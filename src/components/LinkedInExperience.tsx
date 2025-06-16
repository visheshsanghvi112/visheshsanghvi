
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, MapPin, Calendar, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Real experience data based on Vishesh Sanghvi's LinkedIn
const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "Ambica Pharma | Johnlee",
    duration: "May 2024 - Present",
    location: "Mumbai, Maharashtra, India",
    description: "Web & Software Developer | ERP Administrator | SEO. Managing and developing websites and applications utilizing WordPress, CodeIgniter, Laravel, HTML, CSS, and JavaScript. Overseeing ERP system and enhancing website performance through SEO.",
    skills: ["Full-Stack Development", "Laravel", "WordPress", "SEO", "ERP Administration"],
    highlights: [
      "Manage and develop websites and applications utilizing WordPress, CodeIgniter, Laravel, HTML, CSS, and JavaScript",
      "Oversee and optimize ERP system ensuring seamless business operations",
      "Enhance performance and visibility of websites through SEO strategies, improving site rankings and user experience",
      "Build efficient, scalable solutions that support business growth"
    ]
  },
  {
    id: 2,
    title: "Cloud Computing",
    company: "Pinnacle Labs",
    duration: "Oct 2024 - Oct 2024",
    location: "Mumbai, Maharashtra, India",
    description: "Worked with cloud infrastructure technologies and deployment solutions.",
    skills: ["Cloud Computing", "AWS", "Infrastructure"],
    highlights: [
      "Managed cloud infrastructure across platforms",
      "Deployed scalable solutions using containerization technologies",
      "Optimized resource allocation for cost-effective operations"
    ]
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Oasis Infobyte",
    duration: "Sep 2024 - Oct 2024",
    location: "Mumbai, Maharashtra, India",
    description: "Performed data analysis and visualization for business insights.",
    skills: ["Data Analysis", "Visualization", "Python"],
    highlights: [
      "Performed exploratory data analysis on large datasets",
      "Created visualization dashboards to represent insights",
      "Developed predictive models using machine learning algorithms"
    ]
  },
  {
    id: 4,
    title: "Data Scientist Intern",
    company: "EVOASTRA VENTURES PVT LTD",
    duration: "Sep 2024 - Oct 2024",
    location: "Mumbai, Maharashtra, India",
    description: "Implemented machine learning solutions and database architecture optimization.",
    skills: ["Machine Learning", "Data Science", "Database Design"],
    highlights: [
      "Implemented machine learning solutions for business challenges",
      "Designed and optimized database architectures",
      "Conducted A/B testing to validate new features"
    ]
  },
  {
    id: 5,
    title: "Data Analysis Intern",
    company: "Cognifyz Technologies",
    duration: "Aug 2024 - Sep 2024",
    location: "Mumbai, Maharashtra, India",
    description: "Analyzed customer behavior patterns and built statistical models for market trends.",
    skills: ["Data Analysis", "Statistics", "SQL"],
    highlights: [
      "Analyzed customer behavior patterns from transaction data",
      "Built statistical models to forecast market trends",
      "Automated reporting processes using Python and SQL"
    ]
  }
];

const LinkedInExperience: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-card border border-border/20">
      <CardHeader className="border-b border-border/20">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Briefcase className="text-primary h-5 w-5" />
            <CardTitle>Experience</CardTitle>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1"
            onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/details/experience/", "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
            View All
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
