
import React, { useEffect } from 'react';
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

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize any libraries or add event listeners here
    
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
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <FloatingNavDots />
      
      <main>
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <footer className="py-8 border-t border-border/60 bg-gradient-to-t from-background to-background/50">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Vishesh Sanghvi. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/vishesh-sanghvi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:visheshsanghvi112@gmail.com" 
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Email
            </a>
            <a 
              href="tel:+917977282697" 
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Phone
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
