
import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Background3D from './Background3D';
import DownloadCVButton from './DownloadCVButton';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Full-stack developer specializing in building exceptional digital experiences. Currently focused on database management and big data analytics, with expertise in creating scalable web applications and solutions.";
  const [textIndex, setTextIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[textIndex]);
        setTextIndex(textIndex + 1);
      }, 30); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [textIndex, fullText]);

  // Reveal animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToNext = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced 3D animated background with more particles */}
      <Background3D className="absolute inset-0 z-0" />

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/5 to-background/30 z-[1]"></div>

      {/* Content */}
      <motion.div 
        className="container max-w-5xl mx-auto px-6 sm:px-8 relative z-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="text-center mb-8">
          <motion.p 
            className="text-sm sm:text-base md:text-lg font-medium text-primary mb-4 tracking-wide"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.p>

          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 relative"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent inline-block">
              Vishesh Sanghvi
            </span>
            {/* Decorative elements */}
            <span className="absolute -top-6 -right-6 text-primary/40 text-4xl hidden md:block">&#123;</span>
            <span className="absolute -bottom-6 -left-6 text-primary/40 text-4xl hidden md:block">&#125;</span>
          </motion.h1>

          <motion.div 
            className="chip bg-secondary/50 backdrop-blur-sm text-foreground/80 text-sm sm:text-base px-4 py-2 rounded-full inline-block mb-6"
            variants={itemVariants}
          >
            MSC BDA Student | Software Developer
          </motion.div>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed text-balance relative"
            variants={itemVariants}
          >
            {typedText}
            <span className={cn("inline-block w-1 h-5 ml-1 bg-primary", {
              "animate-pulse": textIndex < fullText.length
            })}></span>
          </motion.p>
        </div>

        {/* Social media indicators with subtle animation */}
        <motion.div 
          className="flex justify-center space-x-5 mb-10"
          variants={itemVariants}
        >
          {["LinkedIn", "GitHub", "Twitter", "Email"].map((platform, index) => (
            <div 
              key={platform} 
              className="w-3 h-3 rounded-full bg-primary/30 hover:scale-150 hover:bg-primary transition-all duration-300 cursor-pointer"
              title={platform}
            />
          ))}
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-5 mt-8"
          variants={itemVariants}
        >
          <DownloadCVButton />
          
          <a
            href="#projects"
            className="px-6 py-3 bg-secondary/80 text-foreground rounded-lg font-medium transition-all hover:scale-105 hover:shadow-md active:scale-95 backdrop-blur-sm group flex items-center justify-center"
          >
            View Projects
            <ArrowRight className="ml-2 opacity-70 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          
          <a
            href="#contact"
            className="px-6 py-3 bg-secondary/50 text-foreground rounded-lg font-medium transition-all hover:scale-105 hover:shadow-md active:scale-95 backdrop-blur-sm border border-secondary/30"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Floating achievement stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 mb-10"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[
            { label: "Projects", value: "15+" },
            { label: "Years Exp", value: "3+" },
            { label: "Skills", value: "20+" },
            { label: "Clients", value: "10+" }
          ].map(stat => (
            <div key={stat.label} className="glass-panel p-3 rounded-lg text-center backdrop-blur-lg">
              <h3 className="text-2xl font-bold text-primary">{stat.value}</h3>
              <p className="text-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        onClick={handleScrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full glass-panel flex items-center justify-center cursor-pointer z-10"
        aria-label="Scroll down"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="text-foreground/80 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
