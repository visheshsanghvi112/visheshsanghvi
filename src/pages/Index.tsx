
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import CertificationsSection from '../components/CertificationsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import SkillsSection from '../components/SkillsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FloatingNavDots from '../components/FloatingNavDots';
import LiveSkillsSection from '../components/LiveSkillsSection';
import GitHubActivitySection from '../components/GitHubActivitySection';
import { ArrowUp, Book, FileCode2, Settings, BookOpen, ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

const Index: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Enhanced scroll reveal functionality with more animation options
    const revealElements = document.querySelectorAll('.subtle-reveal');
    
    const revealOnScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('revealed');
          
          // Add staggered animation to children with .stagger-item class
          const staggerItems = element.querySelectorAll('.stagger-item');
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('revealed');
            }, 100 * index);
          });
        }
      });

      // Update active section for highlighting in navigation
      const sections = isMobile 
        ? ['hero', 'experience', 'education', 'projects', 'interactive-skills', 'github-activity', 'certifications', 'testimonials', 'contact'] 
        : ['hero', 'experience', 'education', 'skills', 'interactive-skills', 'projects', 'github-activity', 'certifications', 'testimonials', 'contact'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on load
    revealOnScroll();
    
    // Add keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Arrow up/down for section navigation
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateToNextSection('down');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateToNextSection('up');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobile, activeSection]);
  
  // Function to navigate to next/previous section
  const navigateToNextSection = (direction: 'up' | 'down') => {
    const sections = isMobile 
      ? ['hero', 'experience', 'education', 'projects', 'interactive-skills', 'github-activity', 'certifications', 'testimonials', 'contact'] 
      : ['hero', 'experience', 'education', 'skills', 'interactive-skills', 'projects', 'github-activity', 'certifications', 'testimonials', 'contact'];
    
    const currentIndex = sections.indexOf(activeSection);
    let targetIndex;
    
    if (direction === 'down') {
      targetIndex = Math.min(currentIndex + 1, sections.length - 1);
    } else {
      targetIndex = Math.max(currentIndex - 1, 0);
    }
    
    if (targetIndex !== currentIndex) {
      const targetSection = document.getElementById(sections[targetIndex]);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar activeSection={activeSection} />
      <FloatingNavDots activeSection={activeSection} />
      
      <main className="pt-16 md:pt-20 relative">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <LiveSkillsSection />
        <ProjectsSection />
        <GitHubActivitySection />
        <CertificationsSection />
        <TestimonialsSection />
        <ContactSection />
        
        {/* Featured Pages Section */}
        <AnimatedSection 
          id="featured-pages" 
          className="section-container py-20 bg-gradient-to-b from-background to-secondary/10"
          animation="fade"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Explore More
              </span>
            </h2>
            <p className="text-foreground/70 mb-6">
              Discover additional content and resources to learn more about my work, thoughts, and tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Blog Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-md bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 flex flex-col h-full">
                <div className="mb-4 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Blog & Insights</h3>
                <p className="text-foreground/70 text-sm mb-4 flex-grow">
                  Thoughts, tutorials, and insights on web development and technology.
                </p>
                <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium">
                  Read Articles
                  <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Case Studies Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-md bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 flex flex-col h-full">
                <div className="mb-4 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <Book size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Case Studies</h3>
                <p className="text-foreground/70 text-sm mb-4 flex-grow">
                  Detailed breakdowns of projects, challenges, and solutions.
                </p>
                <Link to="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium">
                  View Case Studies
                  <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Setup Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-md bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 flex flex-col h-full">
                <div className="mb-4 w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <Settings size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">My Setup</h3>
                <p className="text-foreground/70 text-sm mb-4 flex-grow">
                  The hardware, software, and workflow I use for development.
                </p>
                <Link to="/setup" className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium">
                  Explore Setup
                  <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Code Demos Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-md bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 flex flex-col h-full">
                <div className="mb-4 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <FileCode2 size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Code Demos</h3>
                <p className="text-foreground/70 text-sm mb-4 flex-grow">
                  Interactive code examples to explore concepts and techniques.
                </p>
                <Link to="/code-demo" className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium">
                  Try Demos
                  <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      {/* Scroll to top button */}
      <Button 
        onClick={scrollToTop} 
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        aria-label="Scroll to top"
        size="icon"
      >
        <ArrowUp size={20} />
      </Button>
      
      <footer className="py-8 border-t border-border/60 bg-gradient-to-t from-background to-background/50">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <p className="text-foreground/60 text-sm mb-4">
            © {new Date().getFullYear()} Vishesh Sanghvi. All rights reserved.
          </p>
          
          <div className="flex justify-center flex-wrap gap-4 mb-6">
            <Link 
              to="/resume"
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              Interactive Resume
            </Link>
            <a 
              href="https://www.linkedin.com/in/vishesh-sanghvi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a 
              href="https://github.com/visheshsanghvi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a 
              href="mailto:visheshsanghvi112@gmail.com" 
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
            <a 
              href="tel:+917977282697" 
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Phone
            </a>
            <Link 
              to="/admin"
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
              Admin Dashboard
            </Link>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/blog" className="text-xs text-foreground/60 hover:text-primary transition-colors">Blog</Link>
              <span className="text-foreground/40">•</span>
              <Link to="/case-studies" className="text-xs text-foreground/60 hover:text-primary transition-colors">Case Studies</Link>
              <span className="text-foreground/40">•</span>
              <Link to="/setup" className="text-xs text-foreground/60 hover:text-primary transition-colors">My Setup</Link>
              <span className="text-foreground/40">•</span>
              <Link to="/code-demo" className="text-xs text-foreground/60 hover:text-primary transition-colors">Code Demos</Link>
            </div>
            
            <div className="text-xs text-foreground/40">
              Built with React, TypeScript & Tailwind CSS
              <div className="mt-1">
                <span className="bg-primary/10 text-primary/80 px-2 py-1 rounded text-xs font-mono">Last updated: April 2025</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
