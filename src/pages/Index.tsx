import React, { useEffect } from 'react';
import MainLayout from '@/components/MainLayout';
import EnhancedHeroSection from '../components/EnhancedHeroSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FloatingNavDots from '../components/FloatingNavDots';
import GitHubActivitySection from '../components/GitHubActivitySection';
import { Book, FileCode2, BookOpen, ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';

const Index: React.FC = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Enhanced scroll reveal functionality with more animation options
    const revealElements = document.querySelectorAll('.subtle-reveal');

    const revealOnScroll = () => {
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
  }, [isMobile]);

  // Function to navigate to next/previous section
  const navigateToNextSection = (direction: 'up' | 'down') => {
    const sections = ['hero', 'experience', 'education', 'github-activity', 'certifications', 'testimonials', 'contact'];

    let currentSectionId = 'hero';
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          currentSectionId = sections[i];
          break;
        }
      }
    }

    const currentIndex = sections.indexOf(currentSectionId);
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

  return (
    <MainLayout>
      <FloatingNavDots activeSection="hero" />

      <div className="relative">
        <EnhancedHeroSection />

        <ExperienceSection />
        <EducationSection />
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

            {/* Projects Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-md bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 flex flex-col h-full">
                <div className="mb-4 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <FileCode2 size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Projects</h3>
                <p className="text-foreground/70 text-sm mb-4 flex-grow">
                  Collection of my development projects and technical work.
                </p>
                <Link to="/projects" className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium">
                  View Projects
                  <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Case Studies Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-md bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6 flex flex-col h-full">
                <div className="mb-4 w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
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
      </div>
    </MainLayout>
  );
};

export default Index;
