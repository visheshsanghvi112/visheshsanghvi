
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BadgeCheck, Code, Server, Database, Layout, Cloud, Terminal, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Mock skills data
const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React', endorsements: 78, level: 95 },
      { name: 'TypeScript', endorsements: 64, level: 90 },
      { name: 'JavaScript', endorsements: 89, level: 95 },
      { name: 'HTML/CSS', endorsements: 72, level: 90 },
      { name: 'Redux', endorsements: 42, level: 85 },
      { name: 'Next.js', endorsements: 37, level: 85 }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js', endorsements: 61, level: 85 },
      { name: 'Express', endorsements: 53, level: 85 },
      { name: 'GraphQL', endorsements: 38, level: 80 },
      { name: 'RESTful APIs', endorsements: 59, level: 90 },
      { name: 'Python', endorsements: 29, level: 75 }
    ]
  },
  {
    id: 'database',
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', endorsements: 45, level: 85 },
      { name: 'PostgreSQL', endorsements: 38, level: 80 },
      { name: 'MySQL', endorsements: 32, level: 75 },
      { name: 'Redis', endorsements: 24, level: 70 }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', endorsements: 42, level: 80 },
      { name: 'Docker', endorsements: 39, level: 85 },
      { name: 'CI/CD', endorsements: 35, level: 80 },
      { name: 'Kubernetes', endorsements: 27, level: 70 }
    ]
  }
];

const LinkedInSkills: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BadgeCheck className="text-primary h-5 w-5" />
            <CardTitle>{t('components.linkedin.skills')}</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="gap-1">
            <ExternalLink className="h-4 w-4" />
            {t('sections.linkedin.viewMore')}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-2">
                  <IconComponent className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">{category.name}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="flex items-center text-muted-foreground">
                          <BadgeCheck className="h-3.5 w-3.5 mr-1 text-primary" />
                          {skill.endorsements}
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-primary/10"
                        indicatorClassName={cn(
                          "bg-primary",
                          skill.level > 90 ? "bg-primary" : 
                          skill.level > 80 ? "bg-primary/90" : 
                          skill.level > 70 ? "bg-primary/80" : 
                          "bg-primary/70"
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInSkills;
