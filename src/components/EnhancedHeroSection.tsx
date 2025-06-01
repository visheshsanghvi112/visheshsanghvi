
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Database, Globe, Sparkles, Terminal, Coffee, MapPin, Clock } from 'lucide-react';
import Background3D from './Background3D';
import DownloadCVButton from './DownloadCVButton';
import ModernLogo from './ModernLogo';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

interface SkillConstellation {
  name: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

const skills: SkillConstellation[] = [
  { name: 'React', icon: '⚛️', x: 20, y: 30, category: 'frontend' },
  { name: 'TypeScript', icon: '📘', x: 80, y: 25, category: 'frontend' },
  { name: 'Node.js', icon: '🟢', x: 15, y: 70, category: 'backend' },
  { name: 'Python', icon: '🐍', x: 75, y: 65, category: 'backend' },
  { name: 'PHP', icon: '🐘', x: 50, y: 20, category: 'backend' },
  { name: 'MongoDB', icon: '🍃', x: 30, y: 80, category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', x: 85, y: 75, category: 'database' },
  { name: 'Flutter', icon: '📱', x: 60, y: 85, category: 'frontend' }
];

const EnhancedHeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  
  const fullText = "Full-stack developer specializing in web development and database management";
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  // Terminal animation
  useEffect(() => {
    const commands = [
      "~ $ whoami",
      "vishesh.sanghvi",
      "~ $ cat skills.txt",
      "React, Node.js, Python, PHP...",
      "~ $ git status",
      "On branch main. Ready to code! ✨"
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < commands.length) {
        setTerminalLines(prev => [...prev, commands[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

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

  const handleSkillHover = (skillName: string) => {
    setActiveSkill(skillName);
  };

  return (
    <motion.section
      ref={heroRef}
      id="hero"
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-16 md:pt-20"
      style={{ y, opacity }}
    >
      {/* Enhanced 3D animated background */}
      <Background3D className="absolute inset-0 z-0" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [null, -20, 20],
              x: [null, Math.random() * 20 - 10]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Skills constellation */}
      {!isMobile && (
        <div className="absolute inset-0 z-5">
          <svg className="w-full h-full opacity-30">
            {skills.map((skill, index) => {
              const nextSkill = skills[(index + 1) % skills.length];
              return (
                <motion.line
                  key={`line-${index}`}
                  x1={`${skill.x}%`}
                  y1={`${skill.y}%`}
                  x2={`${nextSkill.x}%`}
                  y2={`${nextSkill.y}%`}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/20"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                />
              );
            })}
          </svg>
          
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.5, opacity: 1 }}
              onHoverStart={() => handleSkillHover(skill.name)}
              onHoverEnd={() => setActiveSkill(null)}
            >
              <div className="w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-sm border border-primary/30">
                {skill.icon}
              </div>
              <AnimatePresence>
                {activeSkill === skill.name && (
                  <motion.div
                    className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs whitespace-nowrap border border-border"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {skill.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Main content */}
          <div className="lg:col-span-8">
            <div className="text-center lg:text-left mb-8">
              <motion.div
                className="flex items-center justify-center lg:justify-start mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <ModernLogo variant="tech" size="lg" showText={false} />
                <div className="ml-4">
                  <p className="text-sm font-medium text-primary tracking-wide">
                    Hello, I'm
                  </p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent">
                    Vishesh Sanghvi
                  </h1>
                </div>
              </motion.div>
              
              <motion.div
                className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm text-foreground/80 text-sm px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Sparkles size={16} className="text-primary" />
                BDA Student | Full-Stack Alchemist | React, PHP, Python
              </motion.div>
              
              <motion.div
                className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-balance">{typedText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-primary"
                >
                  |
                </motion.span>
                <p className="mt-3 text-foreground/70">
                  Turning code into impact—crafting sleek frontends with React & Flutter, 
                  powering backends with PHP, and decoding data with Python.
                </p>
              </motion.div>

              {/* Status indicators */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for work
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <MapPin size={12} />
                  Mumbai, India
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Clock size={12} />
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </motion.div>
              
              {/* Action buttons */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <DownloadCVButton className="transform transition hover:scale-105 active:scale-95" />
                <Link
                  to="/projects"
                  className="px-6 py-3 bg-secondary/80 text-foreground rounded-lg font-medium transition-all hover:scale-105 hover:shadow-md active:scale-95 backdrop-blur-sm relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-0 bg-primary/10 transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative">View Projects</span>
                </Link>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-secondary/50 text-foreground rounded-lg font-medium transition-all hover:scale-105 hover:shadow-md active:scale-95 backdrop-blur-sm relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-0 bg-primary/10 transition-all duration-300 group-hover:w-full"></span>
                  <span className="relative">Contact Me</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right side - Terminal & Stats */}
          <div className="lg:col-span-4">
            {/* Interactive terminal */}
            <motion.div
              className="bg-gray-900 rounded-lg p-4 mb-6 font-mono text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-2">terminal</span>
              </div>
              <div className="space-y-1">
                <AnimatePresence>
                  {terminalLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={line.startsWith('~') ? 'text-green-400' : 'text-gray-300'}
                    >
                      {line}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Enhanced stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              {[
                { icon: <Coffee size={20} />, value: "3+", label: "Years Coding" },
                { icon: <Code size={20} />, value: "30+", label: "Projects" },
                { icon: <Database size={20} />, value: "50+", label: "Certifications" },
                { icon: <Globe size={20} />, value: "24/7", label: "Available" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-panel p-4 rounded-lg backdrop-blur-sm text-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <p className="text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors backdrop-blur-sm flex items-center justify-center cursor-pointer group"
        aria-label="Scroll down"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-foreground/80 group-hover:text-foreground transition-colors" />
      </motion.button>
    </motion.section>
  );
};

export default EnhancedHeroSection;
