
import { BlogPost } from '@/data/blogPosts';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API responses
export const blogApi = {
  // Get all blog posts with optional category filter
  getPosts: async (category?: string): Promise<BlogPost[]> => {
    await delay(500); // Simulate network delay
    
    // Import the mock data
    const { blogPosts } = await import('@/data/blogPosts');
    
    if (category && category !== 'All') {
      return blogPosts.filter(post => post.category === category);
    }
    
    return blogPosts;
  },

  // Get a single blog post by ID
  getPost: async (id: string): Promise<BlogPost | null> => {
    await delay(300);
    
    const { blogPosts } = await import('@/data/blogPosts');
    const post = blogPosts.find(p => p.id === id);
    
    return post || null;
  },

  // Get featured posts
  getFeaturedPosts: async (): Promise<BlogPost[]> => {
    await delay(400);
    
    const { blogPosts } = await import('@/data/blogPosts');
    return blogPosts.slice(0, 3); // Return first 3 as featured
  },

  // Search posts by query
  searchPosts: async (query: string): Promise<BlogPost[]> => {
    await delay(600);
    
    const { blogPosts } = await import('@/data/blogPosts');
    
    if (!query.trim()) {
      return blogPosts;
    }
    
    const searchTerm = query.toLowerCase();
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm) ||
      post.author.toLowerCase().includes(searchTerm)
    );
  },

  // Get posts by category
  getPostsByCategory: async (category: string): Promise<BlogPost[]> => {
    await delay(400);
    
    const { blogPosts } = await import('@/data/blogPosts');
    return blogPosts.filter(post => post.category === category);
  }
};
