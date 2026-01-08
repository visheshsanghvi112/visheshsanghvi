
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Sparkles, MapPin, Clock, Award } from 'lucide-react';
import Background3D from './Background3D';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { EncryptedText } from './ui/encrypted-text';
import { BorderMagicButton } from './ui/border-magic-button';

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
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeWord, setActiveWord] = useState(0);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const rotatingWords = ['Developer', 'Designer', 'Problem Solver', 'Tech Enthusiast'];
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Rotating words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
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

      {/* Floating particles - Restored from Old Version */}
      <div className="absolute inset-0 z-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
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

      {/* Skills constellation - Restored from Old Version */}
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



      {/* Main content - Upgraded New Version */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Pre-heading badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 text-primary px-4 py-2 rounded-full mb-6 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={16} className="animate-pulse" />
            Available for Opportunities
          </motion.div>

          {/* Main Heading with Encrypted Text Effect */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="block">
              <EncryptedText
                text="Vishesh Sanghvi"
                revealDelayMs={40}
                revealedClassName="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
                encryptedClassName="text-foreground/30"
              />
            </span>
          </motion.h1>

          {/* Dynamic role with rotating words */}
          <motion.div
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80 mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="mr-3">Full-Stack</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={activeWord}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary"
              >
                {rotatingWords[activeWord]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Professional description */}
          <motion.p
            className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Crafting innovative digital experiences with <span className="text-primary font-semibold">React</span>, <span className="text-primary font-semibold">PHP</span>, and <span className="text-primary font-semibold">Python</span>.
            Holding an <span className="font-semibold">MSc in Big Data Analytics</span> from University of Mumbai,
            transforming complex data into actionable insights.
          </motion.p>

          {/* Key highlights */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center gap-2 text-sm text-foreground/70 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Open to Work
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <MapPin size={14} />
              Mumbai, India
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <Clock size={14} />
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70 bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <Award size={14} />
              3+ Years Experience
            </div>
          </motion.div>

          {/* CTA Buttons with Border Magic Effect */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Link to="/projects">
              <BorderMagicButton
                className="px-8 py-3 text-base font-semibold bg-slate-950 dark:bg-background group"
                containerClassName="h-14"
                borderClassName="bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--primary)/0.5)_50%,hsl(var(--primary))_100%)]"
                duration="3s"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </BorderMagicButton>
            </Link>

            <BorderMagicButton
              as="a"
              href="/CV_Vishesh_Sanghvi.pdf"
              className="px-8 py-3 text-base font-semibold bg-background/95"
              containerClassName="h-14"
              borderClassName="bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary)/0.3)_0%,hsl(var(--primary))_50%,hsl(var(--primary)/0.3)_100%)]"
              duration="2.5s"
            >
              Download CV
            </BorderMagicButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <a
              href="https://github.com/visheshsanghvi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishesh-sanghvi/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:visheshsanghvi112@gmail.com"
              className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background/50 hover:bg-background/70 border border-border/50 hover:border-primary/50 transition-all backdrop-blur-sm flex items-center justify-center cursor-pointer group"
        aria-label="Scroll down"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        <ChevronDown className="text-foreground/70 group-hover:text-primary transition-colors" size={24} />
      </motion.button>
    </motion.section>
  );
};

export default EnhancedHeroSection;
