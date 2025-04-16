
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Background3D from './Background3D';
import DownloadCVButton from './DownloadCVButton';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-stack developer specializing in web development and database management";
  const isMobile = useIsMobile();
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
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
    <motion.section
      id="hero"
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-16 md:pt-20"
      style={{ opacity, y }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 3D animated background */}
      <Background3D className="absolute inset-0 z-0" />

      {/* Content */}
      <motion.div 
        className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10"
        style={{ scale }}
      >
        <div className="text-center mb-8">
          <motion.p 
            className="text-sm sm:text-base md:text-lg font-medium text-primary mb-4 tracking-wide"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent tracking-normal px-2 sm:px-0 prevent-overflow"
            variants={itemVariants}
          >
            Vishesh Sanghvi
          </motion.h1>
          
          <motion.div 
            className="chip bg-secondary/50 backdrop-blur-sm text-foreground/80 text-sm sm:text-base px-4 py-2 rounded-full inline-block mb-6"
            variants={itemVariants}
          >
            BDA Student | Full-Stack Alchemist | React, PHP, Python
          </motion.div>
          
          <motion.div 
            className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            <span className="text-balance">{typedText}</span>
            <motion.span 
              className="inline-block"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >|</motion.span>
            <p className="mt-3 text-foreground/70">Turning code into impact—crafting sleek frontends with React & Flutter, powering backends with PHP, and decoding data with Python. From servers to scrapers, I build, break, migrate, and scale—end to end.</p>
          </motion.div>
          
          {/* Stats cards with hover effects */}
          <motion.div 
            ref={statsRef}
            className="flex flex-wrap justify-center gap-4 mt-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div 
              className="glass-panel p-3 sm:p-4 rounded-lg backdrop-blur-sm transform"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(var(--primary-rgb), 0.25)" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p 
                className="text-xl sm:text-2xl font-bold text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
              >3+</motion.p>
              <p className="text-xs sm:text-sm text-foreground/70">Years Experience</p>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-3 sm:p-4 rounded-lg backdrop-blur-sm transform"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(var(--primary-rgb), 0.25)" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p 
                className="text-xl sm:text-2xl font-bold text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
              >30+</motion.p>
              <p className="text-xs sm:text-sm text-foreground/70">Projects</p>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-3 sm:p-4 rounded-lg backdrop-blur-sm transform"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(var(--primary-rgb), 0.25)" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p 
                className="text-xl sm:text-2xl font-bold text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8, delay: 1.4, ease: "easeInOut" }}
              >50+</motion.p>
              <p className="text-xs sm:text-sm text-foreground/70">Certifications</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-5 mt-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.8,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <DownloadCVButton className="transform transition" />
          </motion.div>
          
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-secondary/80 text-foreground rounded-lg font-medium transition-all hover:shadow-md backdrop-blur-sm relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="absolute inset-0 w-0 bg-primary/10"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative">View Projects</span>
          </motion.a>
          
          <motion.a
            href="#contact"
            className="px-6 py-3 bg-secondary/50 text-foreground rounded-lg font-medium transition-all hover:shadow-md backdrop-blur-sm relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="absolute inset-0 w-0 bg-primary/10"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative">Contact Me</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={handleScrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors backdrop-blur-sm flex items-center justify-center cursor-pointer"
        aria-label="Scroll down"
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          transition: { delay: 1.2, duration: 0.5 }
        }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-foreground/80" />
        </motion.div>
      </motion.button>
    </motion.section>
  );
};

export default HeroSection;
