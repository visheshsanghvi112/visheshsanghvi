
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Clock } from 'lucide-react';
import DownloadCVButton from './DownloadCVButton';
import { Link } from 'react-router-dom';

const EnhancedHeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const fullText = "Full-stack developer specializing in web development and database management";

  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  // Clock update
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
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
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-16 md:pt-20 bg-gradient-to-br from-background via-background/95 to-secondary/10"
    >
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-primary/15 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary/10 rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-wide">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent">
              Vishesh Sanghvi
            </h1>
          </motion.div>
          
          <motion.div
            className="inline-flex items-center gap-2 bg-secondary/30 text-foreground/80 text-sm px-4 py-2 rounded-full mb-8 border border-border/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            BDA Student | Full-Stack Developer | React, PHP, Python
          </motion.div>
          
          <motion.div
            className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-balance">{typedText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary"
            >
              |
            </motion.span>
            <p className="mt-4 text-foreground/70 text-base">
              Crafting elegant frontends with React & Flutter, building robust backends with PHP & Node.js, 
              and analyzing data with Python. From concept to deployment.
            </p>
          </motion.div>

          {/* Status indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for work
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <MapPin size={14} />
              Mumbai, India
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Clock size={14} />
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </motion.div>
          
          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <DownloadCVButton className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95" />
            <Link
              to="/projects"
              className="px-8 py-3 bg-secondary/50 text-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-secondary/70 active:scale-95 border border-border/50"
            >
              View Projects
            </Link>
            <a
              href="#contact"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-secondary/20 active:scale-95"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Professional stats grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "30+", label: "Projects Completed" },
            { value: "50+", label: "Certifications" },
            { value: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm transition-all duration-300 hover:bg-card/50 hover:border-border/50"
              whileHover={{ y: -5 }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border/30 flex items-center justify-center cursor-pointer group"
        aria-label="Scroll down"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-foreground/70 group-hover:text-foreground transition-colors" />
      </motion.button>
    </section>
  );
};

export default EnhancedHeroSection;
