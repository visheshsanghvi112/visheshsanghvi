
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Book, Clock, User, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavBar from '@/components/NavBar';

const CaseStudies: React.FC = () => {
  const { t } = useTranslation();
  
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      description: "Complete redesign and development of an e-commerce platform that increased conversion rates by 35% and improved user experience significantly.",
      client: "TechCorp Inc.",
      duration: "3 months",
      challenge: "Poor user experience and low conversion rates",
      solution: "Modern React-based frontend with optimized checkout flow",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      results: ["35% increase in conversion rate", "50% reduction in bounce rate", "40% improvement in page load times"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Development of a comprehensive healthcare management system for clinics and hospitals to streamline patient care and administrative tasks.",
      client: "HealthTech Solutions",
      duration: "6 months",
      challenge: "Manual processes causing inefficiencies and errors",
      solution: "Automated system with real-time updates and analytics",
      technologies: ["Vue.js", "Python", "Django", "MySQL"],
      results: ["60% reduction in administrative time", "95% accuracy in patient records", "Real-time reporting capabilities"],
      image: "/placeholder.svg"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-2 pl-0 -ml-2">
              <ArrowLeft className="mr-1 h-4 w-4" />
              {t('navigation.backToHome')}
            </Button>
          </Link>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Book className="h-8 w-8 text-primary" />
            {t('navigation.caseStudies')}
          </h1>
          <p className="text-muted-foreground mt-1 max-w-2xl">
            Detailed case studies of my key projects
          </p>
        </div>
        
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="aspect-video md:aspect-square bg-muted flex items-center justify-center">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {study.client}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {study.duration}
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{study.title}</CardTitle>
                    <CardDescription className="text-base">{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4 text-red-500" />
                          Challenge
                        </h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4 text-green-500" />
                          Solution
                        </h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {caseStudies.length === 0 && (
          <div className="text-center py-20">
            <Book className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Case Studies Coming Soon</h2>
            <p className="text-muted-foreground">
              I'm working on detailed case studies of my projects. Check back soon for in-depth analysis and results.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CaseStudies;
