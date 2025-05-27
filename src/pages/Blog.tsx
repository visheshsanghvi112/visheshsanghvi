
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, BookOpen, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavBar from '@/components/NavBar';

const Blog: React.FC = () => {
  const { t } = useTranslation();
  
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for creating maintainable and scalable React applications with modern tools and patterns.",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"]
    },
    {
      id: 2,
      title: "Modern CSS Techniques for Better UX",
      excerpt: "Explore advanced CSS features and techniques to create beautiful, responsive, and accessible user interfaces.",
      date: "2024-03-10",
      readTime: "6 min read",
      tags: ["CSS", "UI/UX", "Frontend"]
    },
    {
      id: 3,
      title: "API Design Best Practices",
      excerpt: "Guidelines for designing robust, scalable, and developer-friendly APIs that stand the test of time.",
      date: "2024-03-05",
      readTime: "10 min read",
      tags: ["API", "Backend", "Design"]
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-2 pl-0 -ml-2">
              <ArrowLeft className="mr-1 h-4 w-4" />
              {t('navigation.backToHome')}
            </Button>
          </Link>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            {t('navigation.blog')}
          </h1>
          <p className="text-muted-foreground mt-1 max-w-2xl">
            Articles and insights on development and technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                  <span>•</span>
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {blogPosts.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Blog Coming Soon</h2>
            <p className="text-muted-foreground">
              I'm working on creating valuable content. Check back soon for articles on web development, technology, and more.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Blog;
