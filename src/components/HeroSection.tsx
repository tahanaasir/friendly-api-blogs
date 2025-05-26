
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Discover Amazing
          <span className="text-blue-600 block">Stories & Ideas</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our collection of insightful articles, tutorials, and stories from passionate writers around the world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 h-12"
            />
          </div>
          <Button size="lg" className="h-12 px-8">
            Search
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span>Popular topics:</span>
          <button className="text-blue-600 hover:text-blue-700 transition-colors">#Technology</button>
          <button className="text-blue-600 hover:text-blue-700 transition-colors">#Design</button>
          <button className="text-blue-600 hover:text-blue-700 transition-colors">#Business</button>
          <button className="text-blue-600 hover:text-blue-700 transition-colors">#Lifestyle</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
