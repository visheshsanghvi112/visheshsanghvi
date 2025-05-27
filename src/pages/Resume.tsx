
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Download, FileUser } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';

const Resume: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-2 pl-0 -ml-2">
                <ArrowLeft className="mr-1 h-4 w-4" />
                {t('navigation.backToHome')}
              </Button>
            </Link>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <FileUser className="h-8 w-8 text-primary" />
              {t('navigation.resume')}
            </h1>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Interactive resume showcasing my skills and experience
            </p>
          </div>
          
          <Button 
            variant="outline"
            className="gap-2"
            onClick={() => window.open("path/to/resume.pdf", "_blank")}
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
        
        <div className="bg-card rounded-lg border p-8">
          <div className="text-center py-20">
            <FileUser className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Interactive Resume</h2>
            <p className="text-muted-foreground mb-6">
              This page will showcase an interactive version of my resume with detailed sections for experience, education, skills, and achievements.
            </p>
            <p className="text-sm text-muted-foreground">
              Content coming soon...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
