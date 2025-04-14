
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import LinkedInProfile from '@/components/LinkedInProfile';
import LinkedInExperience from '@/components/LinkedInExperience';
import LinkedInSkills from '@/components/LinkedInSkills';
import LinkedInActivity from '@/components/LinkedInActivity';
import LinkedInConnections from '@/components/LinkedInConnections';

const LinkedIn: React.FC = () => {
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
              <Linkedin className="h-8 w-8 text-[#0077B5]" />
              {t('sections.linkedin.title')}
            </h1>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Connect with me on LinkedIn to see my professional experience, skills, and activities.
            </p>
          </div>
          
          <Button 
            className="bg-[#0077B5] hover:bg-[#006699] gap-2"
            onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/", "_blank")}
          >
            <Linkedin className="h-4 w-4" />
            {t('sections.linkedin.viewProfile')}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Profile Section */}
          <LinkedInProfile />
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <LinkedInExperience />
              <LinkedInActivity />
            </div>
            
            <div className="space-y-8">
              <LinkedInSkills />
              <LinkedInConnections />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LinkedIn;
