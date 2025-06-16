
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Linkedin, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import LinkedInProfile from '@/components/LinkedInProfile';
import LinkedInExperience from '@/components/LinkedInExperience';
import LinkedInActivity from '@/components/LinkedInActivity';
import LinkedInConnections from '@/components/LinkedInConnections';
import LinkedInCertifications from '@/components/LinkedInCertifications';
import LinkedInSkills from '@/components/LinkedInSkills';

const LinkedIn: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="container mx-auto px-4 py-8 pt-24 max-w-7xl">
        {/* Clean Header */}
        <div className="mb-12">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4 pl-0 -ml-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Professional Profile</h1>
              <p className="text-lg text-muted-foreground">Software Developer & Data Analyst</p>
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                className="gap-2 bg-[#0077B5] hover:bg-[#005885]"
                onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/", "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
                View LinkedIn
              </Button>
            </div>
          </div>
        </div>
        
        {/* Streamlined Layout */}
        <div className="space-y-8">
          {/* Profile Overview */}
          <LinkedInProfile />
          
          {/* Professional Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Main Content - 3 columns */}
            <div className="xl:col-span-3 space-y-8">
              <LinkedInExperience />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <LinkedInCertifications />
                <LinkedInSkills />
              </div>
              <LinkedInActivity />
            </div>
            
            {/* Sidebar - 1 column */}
            <div className="xl:col-span-1">
              <LinkedInConnections />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LinkedIn;
