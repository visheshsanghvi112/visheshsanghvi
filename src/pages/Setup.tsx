
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Settings, Monitor, Cpu, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavBar from '@/components/NavBar';

const Setup: React.FC = () => {
  const { t } = useTranslation();
  
  const setupItems = {
    hardware: [
      {
        name: "MacBook Pro M2",
        description: "16-inch, 32GB RAM, 1TB SSD",
        category: "Primary Device",
        icon: <Monitor className="h-5 w-5" />
      },
      {
        name: "Dell UltraSharp 4K Monitor",
        description: "27-inch 4K USB-C Display",
        category: "Display",
        icon: <Monitor className="h-5 w-5" />
      },
      {
        name: "Custom PC Build",
        description: "Intel i7, RTX 3080, 64GB RAM",
        category: "Secondary Device",
        icon: <Cpu className="h-5 w-5" />
      }
    ],
    software: [
      {
        name: "Visual Studio Code",
        description: "Primary code editor with extensions",
        category: "Development",
        icon: <Settings className="h-5 w-5" />
      },
      {
        name: "Figma",
        description: "UI/UX design and prototyping",
        category: "Design",
        icon: <Settings className="h-5 w-5" />
      },
      {
        name: "Docker",
        description: "Containerization and deployment",
        category: "Development",
        icon: <Settings className="h-5 w-5" />
      }
    ]
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
            <Settings className="h-8 w-8 text-primary" />
            {t('navigation.setup')}
          </h1>
          <p className="text-muted-foreground mt-1 max-w-2xl">
            A tour through the hardware and software tools I use for development, design, and productivity
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hardware Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Cpu className="h-6 w-6 text-primary" />
              Hardware
            </h2>
            <p className="text-muted-foreground mb-6">
              The physical tools that power my development workflow.
            </p>
            <div className="space-y-4">
              {setupItems.hardware.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {item.icon}
                        {item.name}
                      </CardTitle>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Software Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <HardDrive className="h-6 w-6 text-primary" />
              Software
            </h2>
            <p className="text-muted-foreground mb-6">
              The applications and services that help me build better products.
            </p>
            <div className="space-y-4">
              {setupItems.software.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {item.icon}
                        {item.name}
                      </CardTitle>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Workspace Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Monitor className="h-6 w-6 text-primary" />
                My Workspace
              </CardTitle>
              <CardDescription>
                This is where the magic happens. I've designed my workspace to maximize productivity and comfort during those long coding sessions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Workspace photo coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Setup;
