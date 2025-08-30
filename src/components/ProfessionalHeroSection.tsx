import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Calendar, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DownloadCVButton from './DownloadCVButton';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProfessionalHeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const isMobile = useIsMobile();
  
  const fullText = "Full-Stack Software Engineer & Technical Solutions Architect";
  
  // Professional typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  const handleScrollToNext = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    { icon: <TrendingUp size={20} />, value: "50+", label: "Projects Delivered", color: "text-green-600" },
    { icon: <Users size={20} />, value: "15+", label: "Client Partnerships", color: "text-blue-600" },
    { icon: <Award size={20} />, value: "98%", label: "Client Satisfaction", color: "text-purple-600" },
    { icon: <CheckCircle size={20} />, value: "3+", label: "Years Experience", color: "text-orange-600" }
  ];

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/5"
    >
      {/* Subtle professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Professional Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-medium text-lg mb-2">
                Professional Software Developer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
                Vishesh Sanghvi
              </h1>
              
              {/* Dynamic Role */}
              <div className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 mb-6 h-16 flex items-center justify-center lg:justify-start">
                <span className="font-medium">{typedText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 text-primary"
                >
                  |
                </motion.span>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experienced full-stack developer specializing in scalable web applications, 
                enterprise solutions, and modern technology stacks. Proven track record of 
                delivering high-performance solutions for diverse industry clients.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2 text-foreground/70">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for Projects</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <MapPin size={14} />
                  <span>Mumbai, India (GMT+5:30)</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Calendar size={14} />
                  <span>Open to Consultation</span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
            >
              {/* Calendly Integration */}
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a 
                  href="https://calendly.com/visheshsanghvi112/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Calendar size={18} />
                  Schedule Consultation
                </a>
              </Button>

              <DownloadCVButton className="px-8 py-3 font-semibold" />

              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="px-8 py-3 font-semibold border-primary/20 hover:bg-primary/5"
              >
                <Link to="/projects">
                  View Portfolio
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Professional Metrics - Right Side */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">Professional Achievements</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    className="text-center group hover:scale-105 transition-transform duration-300 cursor-default"
                  >
                    <div className={`${achievement.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                      {achievement.icon}
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-foreground/70 leading-tight">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/30">
                <div className="text-center">
                  <p className="text-sm text-foreground/70 mb-4">Core Technologies</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['React', 'TypeScript', 'Node.js', 'Python', 'PHP', 'PostgreSQL'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-secondary/80 text-secondary-foreground text-xs rounded-full border border-border/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Professional scroll indicator */}
      <motion.button
        onClick={handleScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-16 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-colors backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer group border border-border/20"
        aria-label="Scroll down"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-xs text-foreground/60 mb-1 group-hover:text-foreground/80 transition-colors">
          Scroll
        </div>
        <ChevronDown size={16} className="text-foreground/60 group-hover:text-foreground/80 transition-colors" />
      </motion.button>
    </section>
  );
};

export default ProfessionalHeroSection;