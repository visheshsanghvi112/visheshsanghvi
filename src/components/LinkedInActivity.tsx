
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, ThumbsUp, Share2, Heart, User, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Mock activity data
const activities = [
  {
    id: 1,
    type: 'post',
    title: 'Just published a new article on React performance optimization',
    date: '3 days ago',
    likes: 87,
    comments: 24,
    shares: 12,
    content: 'I've put together a comprehensive guide on optimizing React applications for better performance. Topics include memoization, code splitting, virtualization, and more. Check it out at the link below!',
    hashtags: ['#reactjs', '#webdev', '#performance', '#javascript']
  },
  {
    id: 2,
    type: 'article',
    title: 'Building Accessible Web Applications with React',
    date: '2 weeks ago',
    likes: 156,
    comments: 38,
    shares: 45,
    content: 'Accessibility shouldn't be an afterthought. In this article, I discuss practical techniques for making your React applications more accessible to all users...',
    hashtags: ['#accessibility', '#a11y', '#reactjs', '#inclusivedesign']
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Started new position as Senior Full Stack Developer',
    date: '3 months ago',
    likes: 234,
    comments: 65,
    shares: 8,
    content: 'I'm excited to announce that I've joined TechCorp as a Senior Full Stack Developer! Looking forward to working with this amazing team on challenging projects.',
    hashtags: ['#newjob', '#techjobs', '#career', '#fullstack']
  }
];

const LinkedInActivity: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageSquare className="text-primary h-5 w-5" />
            <CardTitle>{t('components.linkedin.activity')}</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="gap-1">
            <ExternalLink className="h-4 w-4" />
            {t('sections.linkedin.viewMore')}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="border-b border-border/40 last:border-b-0 pb-6 last:pb-0">
            <div className="flex space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" alt="Jane Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium line-clamp-1">{activity.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{activity.date}</span>
                      </div>
                      
                      {activity.type === 'article' && (
                        <Badge variant="outline" className="text-xs">
                          Article
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{activity.content}</p>
                
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {activity.hashtags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/40">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3.5 w-3.5" />
                      <span>{activity.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>{activity.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="h-3.5 w-3.5" />
                      <span>{activity.shares}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-xs h-8">
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default LinkedInActivity;
