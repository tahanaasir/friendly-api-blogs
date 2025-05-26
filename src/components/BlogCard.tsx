
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

const BlogCard = ({ id, title, excerpt, author, date, category, imageUrl, featured = false }: BlogCardProps) => {
  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full object-cover ${featured ? 'h-64 md:h-80' : 'h-48'}`}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className={`font-bold text-gray-900 mb-3 line-clamp-2 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          <Link to={`/post/${id}`} className="hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h2>
        
        <p className={`text-gray-600 mb-4 line-clamp-3 ${featured ? 'text-lg' : ''}`}>
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>
          
          <Link
            to={`/post/${id}`}
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            <span>Read more</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
