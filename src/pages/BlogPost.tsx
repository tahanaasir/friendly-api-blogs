
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/BlogCard";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <article className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to articles
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center space-x-4 pb-8 border-b">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comment
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            {/* Sample Content */}
            <div className="space-y-6 text-gray-800">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding the Basics</h2>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <blockquote className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg my-8">
                <p className="text-lg italic text-gray-700">
                  "The best way to learn is by doing. Don't just read about it, practice it."
                </p>
              </blockquote>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Always start with a clear understanding of your goals</li>
                <li>Break complex problems into smaller, manageable pieces</li>
                <li>Don't be afraid to experiment and iterate</li>
                <li>Learn from the community and share your knowledge</li>
              </ul>
              
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} {...relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
