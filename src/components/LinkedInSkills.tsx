
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BadgeCheck, Code, Server, Database, Layout, Cloud, Terminal, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Real skills data for Vishesh Sanghvi
const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'HTML/CSS', endorsements: 17, level: 95 },
      { name: 'JavaScript', endorsements: 15, level: 90 },
      { name: 'React', endorsements: 10, level: 85 },
      { name: 'WordPress', endorsements: 12, level: 90 },
      { name: 'Tailwind CSS', endorsements: 8, level: 85 },
      { name: 'UI/UX Design', endorsements: 7, level: 80 }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'PHP', endorsements: 14, level: 85 },
      { name: 'Laravel', endorsements: 11, level: 85 },
      { name: 'CodeIgniter', endorsements: 9, level: 80 },
      { name: 'RESTful APIs', endorsements: 8, level: 85 },
      { name: 'Node.js', endorsements: 7, level: 75 }
    ]
  },
  {
    id: 'database',
    name: 'Databases & Analysis',
    icon: Database,
    skills: [
      { name: 'SQL', endorsements: 13, level: 85 },
      { name: 'MySQL', endorsements: 12, level: 85 },
      { name: 'Data Analysis', endorsements: 10, level: 80 },
      { name: 'Excel', endorsements: 11, level: 90 },
      { name: 'MongoDB', endorsements: 6, level: 70 }
    ]
  },
  {
    id: 'cloud',
    name: 'SEO & Administration',
    icon: Cloud,
    skills: [
      { name: 'SEO', endorsements: 15, level: 90 },
      { name: 'ERP Administration', endorsements: 14, level: 85 },
      { name: 'Google Analytics', endorsements: 10, level: 85 },
      { name: 'Content Management', endorsements: 9, level: 80 },
      { name: 'Digital Marketing', endorsements: 8, level: 75 }
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
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1"
            onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/details/skills/", "_blank")}
          >
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
