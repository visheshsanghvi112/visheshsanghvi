
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AnimatedSection from '../components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, User, Tag, Clock, ArrowLeft, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of React: What's Coming in React 19",
    excerpt: "A deep dive into the upcoming features, improvements, and changes in React 19 that every developer should know about.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl.",
    author: "Vishesh Sanghvi",
    date: "2025-03-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Web Development"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    views: 1240
  },
  {
    id: 2,
    title: "Building Scalable APIs with Python FastAPI",
    excerpt: "Learn how to create high-performance, production-ready APIs using Python's FastAPI framework with async support.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl.",
    author: "Vishesh Sanghvi",
    date: "2025-02-28",
    readTime: "12 min read",
    tags: ["Python", "FastAPI", "Backend", "API Development"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    views: 892
  },
  {
    id: 3,
    title: "The Complete Guide to CSS Grid in 2025",
    excerpt: "Master CSS Grid layout with practical examples and learn about the latest features that make responsive design easier than ever.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl.",
    author: "Vishesh Sanghvi",
    date: "2025-01-10",
    readTime: "15 min read",
    tags: ["CSS", "Web Design", "Responsive", "Frontend"],
    image: "https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    views: 1543
  },
  {
    id: 4,
    title: "Getting Started with Machine Learning in JavaScript",
    excerpt: "Explore machine learning concepts directly in the browser using TensorFlow.js with practical examples for frontend developers.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl.",
    author: "Vishesh Sanghvi",
    date: "2024-12-05",
    readTime: "10 min read",
    tags: ["Machine Learning", "JavaScript", "TensorFlow.js", "AI"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    views: 731
  },
  {
    id: 5,
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt: "Take your React apps to the next level with proven optimization strategies that improve load times and reduce rendering cycles.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl nec nisl.",
    author: "Vishesh Sanghvi",
    date: "2024-11-18",
    readTime: "14 min read",
    tags: ["React", "Performance", "Optimization", "JavaScript"],
    image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    views: 2187
  }
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  const navigate = useNavigate();
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border border-border/50">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center">
          <Eye size={12} className="mr-1" />
          {post.views}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex flex-wrap gap-1 mb-2">
          {post.tags.slice(0, 2).map(tag => (
            <Badge key={tag} variant="outline" className="bg-primary/5 text-xs">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 2 && (
            <Badge variant="outline" className="bg-secondary/5 text-xs">
              +{post.tags.length - 2}
            </Badge>
          )}
        </div>
        
        <h3 className="text-xl font-semibold line-clamp-2 mb-1 hover:text-primary transition-colors duration-200">
          {post.title}
        </h3>
      </CardHeader>
      
      <CardContent className="pb-2">
        <p className="text-foreground/70 text-sm line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="flex justify-between text-sm text-foreground/60 pt-0">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{formatDate(post.date)}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{post.readTime}</span>
        </div>
      </CardFooter>
      
      <div className="px-6 pb-6">
        <Button 
          variant="outline" 
          className="w-full group relative overflow-hidden"
          onClick={() => navigate(`/blog/${post.id}`)}
        >
          <span className="relative z-10">Read More</span>
          <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        </Button>
      </div>
    </Card>
  );
};

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter posts based on search term
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <AnimatedSection 
          className="section-container py-16 md:py-20" 
          animation="fade"
        >
          <Button 
            variant="ghost" 
            className="mb-6 group" 
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Blog & Insights
            </span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-10">
            Thoughts, tutorials, and insights on web development, design, and technology.
          </p>
          
          <div className="relative max-w-md mx-auto mb-16">
            <Input
              placeholder="Search articles by title, tag, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 bg-background/50 backdrop-blur-sm border-foreground/10 rounded-full focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40" size={18} />
          </div>
        </AnimatedSection>
        
        {/* Blog Posts Grid */}
        <AnimatedSection 
          className="section-container pb-20" 
          animation="fade"
          staggerChildren
        >
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {searchTerm ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
            </h2>
            
            <div className="flex gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                All
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                React
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                Python
              </Badge>
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mb-4 text-foreground/30">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-foreground/60">
                Try adjusting your search terms or browse all articles.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchTerm("")}
              >
                View All Articles
              </Button>
            </div>
          )}
        </AnimatedSection>
      </main>
      
      <footer className="py-8 border-t border-border/60 bg-gradient-to-t from-background to-background/50">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Vishesh Sanghvi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
