
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to new frameworks.",
    content: "Web development continues to evolve at a rapid pace...",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "2",
    title: "10 Design Principles Every Designer Should Know",
    excerpt: "Master the fundamental design principles that will elevate your creative work and improve user experience.",
    content: "Design is more than just making things look pretty...",
    author: "Mike Chen",
    date: "March 12, 2024",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop"
  },
  {
    id: "3",
    title: "Building a Successful Startup: Lessons Learned",
    excerpt: "Real-world insights and practical advice from entrepreneurs who've built successful companies from the ground up.",
    content: "Starting a business is one of the most challenging...",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    category: "Business",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop"
  },
  {
    id: "4",
    title: "The Art of Minimalist Living",
    excerpt: "Discover how embracing minimalism can lead to a more fulfilling and stress-free lifestyle.",
    content: "In our increasingly complex world...",
    author: "David Park",
    date: "March 8, 2024",
    category: "Lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop"
  },
  {
    id: "5",
    title: "React Best Practices for 2024",
    excerpt: "Learn the latest React patterns and best practices that will make your code more maintainable and performant.",
    content: "React continues to be one of the most popular...",
    author: "Alex Thompson",
    date: "March 5, 2024",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    id: "6",
    title: "Photography Tips for Beginners",
    excerpt: "Essential photography techniques and tips that will help you capture stunning images with any camera.",
    content: "Photography is an art form that anyone can learn...",
    author: "Lisa Wong",
    date: "March 3, 2024",
    category: "Creative",
    imageUrl: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=400&fit=crop"
  }
];

export const categories = [
  "All",
  "Technology",
  "Design",
  "Business",
  "Lifestyle",
  "Creative"
];
