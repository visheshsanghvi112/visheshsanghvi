
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, UserPlus, BarChart, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Real network stats for Vishesh Sanghvi
const stats = {
  connections: 243, // Real connection count from LinkedIn
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
    <Card className="bg-card border border-border/20">
      <CardHeader className="border-b border-border/20">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Users className="text-primary h-5 w-5" />
            <CardTitle>Network</CardTitle>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1"
            onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/", "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
            View Profile
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        {/* Network Stats */}
        <div className="space-y-4">
          <h3 className="font-medium flex items-center gap-2">
            <BarChart className="h-4 w-4 text-primary" />
            Network Overview
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary/5 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">{stats.connections}</p>
              <p className="text-xs text-muted-foreground">Connections</p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold">{stats.followers}</p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold">{stats.following}</p>
              <p className="text-xs text-muted-foreground">Following</p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{stats.growthRate}</p>
              <p className="text-xs text-muted-foreground">Growth Rate</p>
            </div>
          </div>
          
          {/* Professional Circle */}
          <div className="pt-4 border-t border-border/20">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <UserPlus className="h-4 w-4 text-primary" />
              Professional Circle
            </h4>
            
            <div className="space-y-3">
              {mutualConnections.slice(0, 3).map((connection) => (
                <div key={connection.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={connection.avatar} alt={connection.name} />
                    <AvatarFallback className="text-xs">{connection.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{connection.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{connection.title}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-3"
              onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/", "_blank")}
            >
              View All Connections
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInConnections;
