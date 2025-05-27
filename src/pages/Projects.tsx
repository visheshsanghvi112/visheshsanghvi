
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ExternalLink, Github, Folder } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavBar from '@/components/NavBar';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL featuring user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/visheshsanghvi/ecommerce-platform",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/visheshsanghvi/task-manager",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides current weather conditions, forecasts, and interactive maps using multiple weather APIs.",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/visheshsanghvi/weather-dashboard",
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
            <Folder className="h-8 w-8 text-primary" />
            {t('navigation.projects')}
          </h1>
          <p className="text-muted-foreground mt-1 max-w-2xl">
            Collection of my development and design projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {projects.length === 0 && (
          <div className="text-center py-20">
            <Folder className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Projects Coming Soon</h2>
            <p className="text-muted-foreground">
              I'm currently working on showcasing my projects. Check back soon to see my latest work.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;
