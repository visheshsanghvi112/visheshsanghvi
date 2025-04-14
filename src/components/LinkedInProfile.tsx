
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
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden">
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5 w-full"></div>
      
      {/* Profile Info */}
      <div className="px-6 sm:px-8 relative">
        <Avatar className="h-24 w-24 border-4 border-background absolute -top-12">
          <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQF5_qTk5EXb9g/profile-displayphoto-shrink_400_400/0/1708774825393?e=1719446400&v=beta&t=ZhD_zRVNOxQMvNdcf8yPtZ6Mb_W7fwb7GNYxuFP7JHM" alt={profile.name} />
          <AvatarFallback>VS</AvatarFallback>
        </Avatar>
        
        <div className="pt-16 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-muted-foreground">{profile.headline}</p>
              
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Link className="h-4 w-4" />
                  <span>{profile.connections}+ connections</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button className="gap-2" onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/", "_blank")}>
                <ExternalLink className="h-4 w-4" />
                {t('sections.linkedin.viewProfile')}
              </Button>
              <Button variant="outline">
                {t('sections.linkedin.connectWithMe')}
              </Button>
            </div>
          </div>
          
          {/* Current Position */}
          <Card className="mt-6 bg-muted/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                {t('sections.linkedin.position')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <div className="font-medium">{profile.currentPosition.title}</div>
                <div className="text-sm">{profile.currentPosition.company}</div>
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{profile.currentPosition.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{profile.currentPosition.location}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* About */}
          <div className="mt-6">
            <h2 className="text-lg font-medium mb-2">{t('sections.linkedin.about')}</h2>
            <p className="text-muted-foreground">{profile.about}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LinkedInProfile;
