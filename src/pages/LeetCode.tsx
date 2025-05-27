
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Code, Trophy, Star, Award, Target, Calendar, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import NavBar from '../components/NavBar';
import LeetCodeStats from '../components/LeetCodeStats';
import LeetCodeBadges from '../components/LeetCodeBadges';
import LeetCodeSubmissions from '../components/LeetCodeSubmissions';
import LeetCodeRecentSolutions from '../components/LeetCodeRecentSolutions';
import AnimatedSection from '../components/AnimatedSection';

const LeetCode = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="pt-20 md:pt-24">
        <AnimatedSection 
          className="section-container py-12 md:py-16" 
          animation="fade"
        >
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="ghost" 
              className="group" 
              onClick={() => navigate('/')}
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              {t('navigation.backToHome')}
            </Button>
            
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-primary/10 text-primary gap-1">
                <Trophy size={12} />
                Top 10%
              </Badge>
              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 gap-1">
                <Star size={12} />
                Premium
              </Badge>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent flex items-center gap-3">
                  <Code className="h-10 w-10" />
                  {t('navigation.leetcode')}
                </span>
              </h1>
              
              <p className="text-xl text-foreground/70 max-w-3xl mt-2">
                {t('components.leetcode.subtitle')}
              </p>
            </div>
            
            <div className="md:ml-auto flex flex-wrap gap-3">
              <Button variant="outline" className="gap-2" size="sm">
                <Zap className="text-yellow-500" size={16} />
                Daily Challenge
              </Button>
              <Button className="gap-2" size="sm" onClick={() => window.open("https://leetcode.com/u/visheshsanghvi112/", "_blank")}>
                <Target className="mr-1" size={16} />
                View on LeetCode
              </Button>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="section-container pb-8" animation="slide-up">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-5 md:grid-cols-5 h-auto p-1 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2 py-2">
                <Trophy size={16} />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex items-center gap-2 py-2">
                <CheckCircle2 size={16} />
                <span className="hidden sm:inline">Recent</span>
              </TabsTrigger>
              <TabsTrigger value="badges" className="flex items-center gap-2 py-2">
                <Award size={16} />
                <span className="hidden sm:inline">Badges</span>
              </TabsTrigger>
              <TabsTrigger value="submissions" className="flex items-center gap-2 py-2">
                <Code size={16} />
                <span className="hidden sm:inline">Submissions</span>
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center gap-2 py-2">
                <Calendar size={16} />
                <span className="hidden sm:inline">Activity</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-0">
              <LeetCodeStats />
            </TabsContent>

            <TabsContent value="recent" className="mt-0">
              <LeetCodeRecentSolutions />
            </TabsContent>
            
            <TabsContent value="badges" className="mt-0">
              <LeetCodeBadges />
            </TabsContent>
            
            <TabsContent value="submissions" className="mt-0">
              <LeetCodeSubmissions />
            </TabsContent>
            
            <TabsContent value="calendar" className="mt-0">
              <div className="flex items-center justify-center p-12 bg-card/50 rounded-lg border border-border/40">
                <p className="text-muted-foreground">Activity calendar coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </main>
      
      <footer className="py-8 border-t border-border/60 bg-gradient-to-t from-background to-background/50">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Vishesh Sanghvi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LeetCode;
