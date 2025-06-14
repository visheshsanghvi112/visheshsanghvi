
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, ThumbsUp, Share2, Eye, Calendar, ExternalLink, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Real LinkedIn posts data for Vishesh Sanghvi
const posts = [
  {
    id: 1,
    type: 'career_update',
    title: 'New Position: Software Developer at Ambica Pharma | Johnlee',
    date: 'May 2024',
    engagement: { likes: 42, comments: 18, views: 1200 },
    content: "Excited to begin my journey as a Software Developer at Ambica Pharma | Johnlee! I'll be working on full-stack development, ERP administration, and SEO optimization. Looking forward to contributing to innovative healthcare solutions.",
    media: null,
    linkedinUrl: "https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/"
  },
  {
    id: 2,
    type: 'achievement',
    title: 'Completed Data Science Certification Program',
    date: 'October 2024',
    engagement: { likes: 58, comments: 24, views: 890 },
    content: "Successfully completed comprehensive Data Science certification with focus on Python, Machine Learning, and statistical analysis. Ready to apply these skills in real-world business scenarios.",
    media: 'certificate_image',
    linkedinUrl: "https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/"
  },
  {
    id: 3,
    type: 'project_showcase',
    title: 'Building Scalable Web Applications with Laravel & React',
    date: 'September 2024',
    engagement: { likes: 73, comments: 31, views: 1450 },
    content: "Recently developed a full-stack application using Laravel backend with React frontend. Implemented user authentication, real-time data processing, and responsive design. The project showcases modern web development best practices.",
    media: 'project_screenshot',
    linkedinUrl: "https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/"
  }
];

const LinkedInActivity: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-card border border-border/20">
      <CardHeader className="border-b border-border/20">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-primary h-5 w-5" />
            <CardTitle>Recent Posts</CardTitle>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1"
            onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/recent-activity/", "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
            View All
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="group">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQF5_qTk5EXb9g/profile-displayphoto-shrink_400_400/0/1708774825393?e=1719446400&v=beta&t=ZhD_zRVNOxQMvNdcf8yPtZ6Mb_W7fwb7GNYxuFP7JHM" alt="Vishesh Sanghvi" />
                  <AvatarFallback>VS</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">Vishesh Sanghvi</span>
                    <Badge 
                      variant="outline" 
                      className="text-xs capitalize"
                    >
                      {post.type.replace('_', ' ')}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="font-medium mb-2 group-hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.content}
                  </p>
                  
                  {/* Engagement Metrics */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-3.5 w-3.5" />
                        <span>{post.engagement.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>{post.engagement.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        <span>{post.engagement.views}</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => window.open(post.linkedinUrl, "_blank")}
                    >
                      View Post
                    </Button>
                  </div>
                </div>
              </div>
              
              {post.id !== posts.length && (
                <div className="border-t border-border/20 mt-6 pt-6" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInActivity;
