
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Background3D from './Background3D';
import DownloadCVButton from './DownloadCVButton';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-stack developer specializing in web development and database management";
  const isMobile = useIsMobile();
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  
  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  // Parallax effect
  useEffect(() => {
    const handleParallax = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const parallaxValue = scrollY * 0.3;
        if (parallaxValue < heroHeight) {
          heroSection.style.backgroundPositionY = `${parallaxValue}px`;
        }
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const handleScrollToNext = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-16 md:pt-20"
    >
      {/* 3D animated background */}
      <Background3D className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base md:text-lg font-medium text-primary mb-4 tracking-wide animate-slide-down opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-down opacity-0 bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent tracking-normal px-2 sm:px-0 prevent-overflow" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Vishesh Sanghvi
          </h1>
          <div className="chip bg-secondary/50 backdrop-blur-sm text-foreground/80 text-sm sm:text-base px-4 py-2 rounded-full inline-block mb-6 animate-slide-down opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            BDA Student | Full-Stack Alchemist | React, PHP, Python
          </div>
          <div className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <span className="text-balance">{typedText}</span>
            <span className="animate-pulse">|</span>
            <p className="mt-3 text-foreground/70">Turning code into impact—crafting sleek frontends with React & Flutter, powering backends with PHP, and decoding data with Python. From servers to scrapers, I build, break, migrate, and scale—end to end.</p>
          </div>
          
          {/* Stats cards with hover effects */}
          <div 
            ref={statsRef}
            className="flex flex-wrap justify-center gap-4 mt-8 opacity-0 transform translate-y-4"
            style={{ 
              animation: 'fadeSlideUp 0.6s ease-out 1s forwards',
              perspective: '1000px' 
            }}
          >
            <div className="glass-panel p-3 sm:p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transform">
              <p className="text-xl sm:text-2xl font-bold text-primary">3+</p>
              <p className="text-xs sm:text-sm text-foreground/70">Years Experience</p>
            </div>
            <div className="glass-panel p-3 sm:p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transform" style={{ animationDelay: '0.1s' }}>
              <p className="text-xl sm:text-2xl font-bold text-primary">30+</p>
              <p className="text-xs sm:text-sm text-foreground/70">Projects</p>
            </div>
            <div className="glass-panel p-3 sm:p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transform" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl sm:text-2xl font-bold text-primary">50+</p>
              <p className="text-xs sm:text-sm text-foreground/70">Certifications</p>
            </div>
          </div>
        </div>

        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-5 mt-8 opacity-0"
          style={{ 
            animation: 'fadeIn 0.8s ease-out 1.2s forwards'
          }}
        >
          <DownloadCVButton className="transform transition hover:scale-105 active:scale-95" />
          <a
            href="#projects"
            className="px-6 py-3 bg-secondary/80 text-foreground rounded-lg font-medium transition-all hover:scale-105 hover:shadow-md active:scale-95 backdrop-blur-sm relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-0 bg-primary/10 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative">View Projects</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-secondary/50 text-foreground rounded-lg font-medium transition-all hover:scale-105 hover:shadow-md active:scale-95 backdrop-blur-sm relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-0 bg-primary/10 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative">Contact Me</span>
          </a>
        </div>
      </div>

      <button
        onClick={handleScrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors backdrop-blur-sm flex items-center justify-center animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="text-foreground/80" />
      </button>
    </section>
  );
};

export default HeroSection;
