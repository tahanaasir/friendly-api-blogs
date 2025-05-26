
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { blogPosts, categories } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 6, filteredPosts.length));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      
      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisiblePosts(6);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <p className="text-gray-600">Discover our most recent stories and insights</p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                {...post}
                featured={index === 0 && selectedCategory === "All"}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <div className="text-center">
              <Button onClick={loadMore} variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
