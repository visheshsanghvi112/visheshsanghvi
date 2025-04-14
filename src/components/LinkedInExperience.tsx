
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, MapPin, Calendar, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock experience data
const experiences = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'TechCorp',
    duration: 'Jan 2022 - Present',
    location: 'San Francisco, CA (Remote)',
    description: 'Leading development of a React-based SaaS platform with microservices architecture. Implemented CI/CD pipelines and mentored junior developers.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB'],
    highlights: [
      'Reduced page load time by 40% through optimized bundle splitting and lazy loading',
      'Architected and implemented a real-time notification system using WebSockets',
      'Led migration from REST to GraphQL, improving API efficiency by 35%'
    ]
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    duration: 'Mar 2019 - Dec 2021',
    location: 'Boston, MA (Hybrid)',
    description: 'Developed and maintained multiple React-based web applications with Node.js backends. Collaborated closely with design and product teams.',
    skills: ['React', 'Express', 'PostgreSQL', 'Redux', 'Jest', 'Material UI'],
    highlights: [
      'Implemented a complex form builder tool that increased customer conversion by 25%',
      'Designed and built a reporting dashboard that improved data visibility for managers',
      'Reduced API response times by 60% through query optimization and caching'
    ]
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'WebSolutions',
    duration: 'Jun 2017 - Feb 2019',
    location: 'New York, NY',
    description: 'Created responsive web interfaces for enterprise clients. Worked with design team to implement UI/UX improvements.',
    skills: ['HTML/CSS', 'JavaScript', 'jQuery', 'Sass', 'Bootstrap', 'Git'],
    highlights: [
      "Developed the company's component library, increasing development speed by 30%",
      'Rebuilt legacy applications with modern frontend technologies',
      'Implemented A/B testing framework leading to 15% increase in user engagement'
    ]
  }
];

const LinkedInExperience: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Briefcase className="text-primary h-5 w-5" />
            <CardTitle>{t('components.linkedin.experience')}</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="gap-1">
            <ExternalLink className="h-4 w-4" />
            {t('sections.linkedin.viewMore')}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="border-b border-border/40 last:border-b-0 pb-6 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-medium">{exp.title}</h3>
                <p className="text-muted-foreground font-medium">{exp.company}</p>
                
                <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              {exp.id === 1 && (
                <Badge variant="outline" className="bg-primary/10 text-xs">
                  {t('sections.experience.current')}
                </Badge>
              )}
            </div>
            
            <p className="mt-3 text-muted-foreground text-sm">{exp.description}</p>
            
            <div className="mt-3">
              <p className="text-sm font-medium">{t('sections.linkedin.highlights')}:</p>
              <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-1.5 mt-3">
              {exp.skills.map((skill, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default LinkedInExperience;
