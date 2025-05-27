
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, FileCode2, Play, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavBar from '@/components/NavBar';

const CodeDemo: React.FC = () => {
  const { t } = useTranslation();
  
  const codeDemos = [
    {
      id: 1,
      title: "React Hooks Playground",
      description: "Interactive examples demonstrating various React hooks including useState, useEffect, useContext, and custom hooks.",
      technologies: ["React", "TypeScript", "Hooks"],
      demoUrl: "#",
      codeUrl: "https://github.com/visheshsanghvi/react-hooks-demo",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "CSS Animation Examples",
      description: "Collection of modern CSS animations and transitions with interactive controls to modify properties in real-time.",
      technologies: ["CSS3", "JavaScript", "Animations"],
      demoUrl: "#",
      codeUrl: "https://github.com/visheshsanghvi/css-animations",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "API Integration Patterns",
      description: "Examples of different API integration patterns including REST, GraphQL, and real-time subscriptions.",
      technologies: ["React", "GraphQL", "WebSockets"],
      demoUrl: "#",
      codeUrl: "https://github.com/visheshsanghvi/api-patterns",
      difficulty: "Advanced"
    }
  ];
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };
  
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
            <FileCode2 className="h-8 w-8 text-primary" />
            {t('navigation.codeDemos')}
          </h1>
          <p className="text-muted-foreground mt-1 max-w-2xl">
            Interactive code demonstrations and examples
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codeDemos.map((demo) => (
            <Card key={demo.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getDifficultyColor(demo.difficulty)}>
                    {demo.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{demo.title}</CardTitle>
                <CardDescription>{demo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {demo.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={demo.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4 mr-1" />
                      Try Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={demo.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {codeDemos.length === 0 && (
          <div className="text-center py-20">
            <FileCode2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Code Demos Coming Soon</h2>
            <p className="text-muted-foreground">
              I'm working on creating interactive code demonstrations. Check back soon for hands-on examples and tutorials.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CodeDemo;
