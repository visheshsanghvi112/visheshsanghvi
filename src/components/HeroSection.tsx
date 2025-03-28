import React from 'react';
import { ChevronDown } from 'lucide-react';
import Background3D from './Background3D';
import DownloadCVButton from './DownloadCVButton';

const HeroSection: React.FC = () => {
  const handleScrollToNext = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* 3D animated background */}
      <Background3D className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="container max-w-5xl mx-auto px-6 sm:px-8 relative z-10 animate-fade-in">
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base md:text-lg font-medium text-primary mb-4 tracking-wide animate-slide-down">
            Hello, I'm
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-slide-down bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent">
            Vishesh Sanghvii
          </h1>
          <div className="chip bg-secondary/50 backdrop-blur-sm text-foreground/80 text-sm sm:text-base px-4 py-2 rounded-full inline-block mb-6 animate-slide-down">
            MSC BDA Student | Software Developer
          </div>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-slide-up text-balance">
            Full-stack developer specializing in building exceptional digital experiences. Currently focused on database management and big data analytics, with expertise in creating scalable web applications and solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-5 mt-8 animate-fade-in">
          <DownloadCVButton />
          <a
            href="#projects"
            className="px-6 py-3 bg-secondary/80 text-foreground rounded-lg font-medium transition-all hover:scale-105 hover:shadow-md active:scale-95 backdrop-blur-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-secondary/50 text-foreground rounded-lg font-medium transition-all hover:scale-105 hover:shadow-md active:scale-95 backdrop-blur-sm"
          >
            Contact Me
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
