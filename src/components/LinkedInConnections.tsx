
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, UserPlus, BarChart, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Real network stats for Vishesh Sanghvi
const stats = {
  connections: 243,
  followers: 265,
  following: 87,
  reach: '5K+',
  growthRate: '8%'
};

// Simulated mutual connections based on profile
const mutualConnections = [
  { 
    id: 1, 
    name: 'Raj Patel', 
    title: 'Full Stack Developer at TechSolutions', 
    mutualCount: 18,
    avatar: 'https://i.pravatar.cc/150?img=15' 
  },
  { 
    id: 2, 
    name: 'Priya Sharma', 
    title: 'SEO Specialist at DigitalMarket', 
    mutualCount: 14,
    avatar: 'https://i.pravatar.cc/150?img=23' 
  },
  { 
    id: 3, 
    name: 'Amit Kumar', 
    title: 'Web Developer at CreativeTech', 
    mutualCount: 12,
    avatar: 'https://i.pravatar.cc/150?img=33' 
  },
  { 
    id: 4, 
    name: 'Sneha Gupta', 
    title: 'Data Analyst at AnalyticsPro', 
    mutualCount: 9,
    avatar: 'https://i.pravatar.cc/150?img=45' 
  }
];

const LinkedInConnections: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Users className="text-primary h-5 w-5" />
            <CardTitle>{t('components.linkedin.connections')}</CardTitle>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1"
            onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/", "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
            {t('sections.linkedin.viewMore')}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Network Stats */}
          <div>
            <h3 className="font-medium mb-3 flex items-center gap-1">
              <BarChart className="h-4 w-4 text-primary" />
              <span>{t('sections.linkedin.networkStats')}</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-4 bg-muted/50 rounded-lg p-4">
              <div className="space-y-1 p-2 rounded-md">
                <span className="text-xs text-muted-foreground">{t('sections.linkedin.connections')}</span>
                <p className="text-xl font-bold">{stats.connections}</p>
              </div>
              
              <div className="space-y-1 p-2 rounded-md">
                <span className="text-xs text-muted-foreground">{t('sections.linkedin.followers')}</span>
                <p className="text-xl font-bold">{stats.followers}</p>
              </div>
              
              <div className="space-y-1 p-2 rounded-md">
                <span className="text-xs text-muted-foreground">{t('sections.linkedin.following')}</span>
                <p className="text-xl font-bold">{stats.following}</p>
              </div>
              
              <div className="space-y-1 p-2 rounded-md">
                <span className="text-xs text-muted-foreground">Growth Rate</span>
                <p className="text-xl font-bold text-green-500">{stats.growthRate}</p>
              </div>
            </div>
          </div>
          
          {/* Mutual Connections */}
          <div>
            <h3 className="font-medium mb-3 flex items-center gap-1">
              <UserPlus className="h-4 w-4 text-primary" />
              <span>{t('sections.linkedin.mutualConnections')}</span>
            </h3>
            
            <div className="space-y-3">
              {mutualConnections.map((connection) => (
                <div key={connection.id} className="flex items-center justify-between gap-3 group hover:bg-muted/50 p-2 rounded-md transition-colors">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={connection.avatar} alt={connection.name} />
                      <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <p className="font-medium text-sm">{connection.name}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{connection.title}</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="text-xs h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    Connect
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInConnections;
