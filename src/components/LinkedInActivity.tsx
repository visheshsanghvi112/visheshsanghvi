
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, ThumbsUp, Share2, Heart, User, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Real activity data for Vishesh Sanghvi
const activities = [
  {
    id: 1,
    type: 'post',
    title: 'Excited to start my new role as Software Developer',
    date: '3 weeks ago',
    likes: 34,
    comments: 12,
    shares: 3,
    content: "I'm thrilled to announce that I've joined Ambica Pharma | Johnlee as a Software Developer. Looking forward to building innovative solutions and contributing to the company's growth with my skills in web development, ERP administration, and SEO.",
    hashtags: ['#newbeginnings', '#softwaredeveloper', '#webdevelopment', '#career']
  },
  {
    id: 2,
    type: 'article',
    title: 'The Importance of SEO for Modern Businesses',
    date: '2 months ago',
    likes: 45,
    comments: 15,
    shares: 8,
    content: "In today's digital landscape, having a strong online presence is crucial for business success. Search Engine Optimization plays a vital role in increasing visibility and driving organic traffic. Here are some effective strategies that can help businesses improve their SEO rankings...",
    hashtags: ['#SEO', '#digitalmarketing', '#businessgrowth', '#webtraffic']
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Completed Data Analysis internship at Cognifyz Technologies',
    date: '3 months ago',
    likes: 67,
    comments: 23,
    shares: 5,
    content: "Just completed my internship at Cognifyz Technologies where I worked on analyzing customer behavior patterns and building statistical models. Grateful for the opportunity to enhance my data analysis skills while working on real-world business problems.",
    hashtags: ['#datascience', '#internship', '#professionaldev', '#analytics']
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
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1"
            onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/recent-activity/", "_blank")}
          >
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
                <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQF5_qTk5EXb9g/profile-displayphoto-shrink_400_400/0/1708774825393?e=1719446400&v=beta&t=ZhD_zRVNOxQMvNdcf8yPtZ6Mb_W7fwb7GNYxuFP7JHM" alt="Vishesh Sanghvi" />
                <AvatarFallback>VS</AvatarFallback>
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
