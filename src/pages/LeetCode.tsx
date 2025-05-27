
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Code, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import LeetCodeStats from '@/components/LeetCodeStats';
import LeetCodeBadges from '@/components/LeetCodeBadges';
import LeetCodeRecentSolutions from '@/components/LeetCodeRecentSolutions';
import LeetCodeSubmissions from '@/components/LeetCodeSubmissions';

const LeetCode: React.FC = () => {
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
              <Code className="h-8 w-8 text-orange-500" />
              {t('navigation.leetcode')}
            </h1>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              My LeetCode solutions and statistics
            </p>
          </div>
          
          <Button 
            className="bg-orange-500 hover:bg-orange-600 gap-2"
            onClick={() => window.open("https://leetcode.com/visheshsanghvi/", "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
            View LeetCode Profile
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Stats Section */}
          <LeetCodeStats />
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <LeetCodeRecentSolutions />
              <LeetCodeSubmissions />
            </div>
            
            <div className="space-y-8">
              <LeetCodeBadges />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeetCode;
