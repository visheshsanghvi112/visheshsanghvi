
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavBar from '../components/NavBar';
import LeetCodeStats from '../components/LeetCodeStats';
import AnimatedSection from '../components/AnimatedSection';

const LeetCode = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="pt-20 md:pt-24">
        <AnimatedSection 
          className="section-container py-16 md:py-20" 
          animation="fade"
        >
          <Button 
            variant="ghost" 
            className="mb-6 group" 
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {t('navigation.backToHome')}
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent flex items-center gap-3">
              <Code className="h-10 w-10" />
              {t('navigation.leetcode')}
            </span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-10">
            {t('components.leetcode.subtitle')}
          </p>
        </AnimatedSection>
        
        <AnimatedSection className="section-container pb-20" animation="slide-up">
          <LeetCodeStats />
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
