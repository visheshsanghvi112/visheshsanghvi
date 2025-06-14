
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, MapPin, Calendar, Award, Link, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const LinkedInProfile: React.FC = () => {
  const { t } = useTranslation();
  
  // Real profile data
  const profile = {
    name: 'Vishesh Sanghvi',
    headline: 'Web & Software Developer | ERP Administrator | SEO at Ambica Pharma | Johnlee',
    location: 'Mumbai, Maharashtra, India',
    connections: 243,
    about: 'Web & Software Developer | ERP Administrator | SEO. Manage and develop websites and applications utilizing WordPress, CodeIgniter, Laravel, HTML, CSS, and JavaScript. Oversee and optimize ERP system ensuring seamless business operations. Enhance performance and visibility of websites through SEO strategies, improving site rankings and user experience. Build efficient, scalable solutions that support business growth.',
    currentPosition: {
      title: 'Software Developer',
      company: 'Ambica Pharma | Johnlee',
      duration: 'May 2024 - Present',
      location: 'Mumbai, Maharashtra, India'
    }
  };
  
  return (
    <Card className="bg-card border border-border/20 overflow-hidden">
      {/* Clean Header with Gradient */}
      <div className="h-24 bg-gradient-to-r from-[#0077B5]/10 via-primary/5 to-transparent"></div>
      
      {/* Profile Content */}
      <div className="px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 -mt-8">
          {/* Profile Image */}
          <Avatar className="h-20 w-20 border-4 border-background shadow-lg bg-background">
            <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQF5_qTk5EXb9g/profile-displayphoto-shrink_400_400/0/1708774825393?e=1719446400&v=beta&t=ZhD_zRVNOxQMvNdcf8yPtZ6Mb_W7fwb7GNYxuFP7JHM" alt={profile.name} />
            <AvatarFallback className="text-lg font-semibold">VS</AvatarFallback>
          </Avatar>
          
          {/* Profile Info */}
          <div className="flex-1 pt-2">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="space-y-3">
                <div>
                  <h1 className="text-3xl font-bold">{profile.name}</h1>
                  <p className="text-lg text-muted-foreground mt-1">{profile.headline}</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Link className="h-4 w-4" />
                    <span className="font-medium">{profile.connections}</span> connections
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <span className="font-medium">265</span> followers
                  </div>
                </div>
                
                {/* Current Position Inline */}
                <div className="flex items-center gap-2 text-sm bg-primary/5 px-3 py-2 rounded-lg w-fit">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="font-medium">{profile.currentPosition.title}</span>
                  <span className="text-muted-foreground">at {profile.currentPosition.company}</span>
                </div>
              </div>
            </div>
            
            {/* About Section */}
            <div className="mt-6 pb-8">
              <h2 className="text-lg font-semibold mb-3">About</h2>
              <p className="text-muted-foreground leading-relaxed">{profile.about}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LinkedInProfile;
