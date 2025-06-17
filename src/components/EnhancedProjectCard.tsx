
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Code, Eye, Star, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  icon?: React.ReactNode;
  association?: string;
  category: string;
}

interface EnhancedProjectCardProps {
  project: ProjectProps;
  isFeatured?: boolean;
}

const categoryColors = {
  Web: 'from-blue-500/20 to-cyan-500/20',
  Mobile: 'from-green-500/20 to-emerald-500/20',
  AI: 'from-purple-500/20 to-pink-500/20',
  Data: 'from-orange-500/20 to-red-500/20',
  Games: 'from-yellow-500/20 to-orange-500/20',
  Education: 'from-indigo-500/20 to-blue-500/20',
  Finance: 'from-emerald-500/20 to-teal-500/20',
  'E-commerce': 'from-pink-500/20 to-rose-500/20',
  Tools: 'from-gray-500/20 to-slate-500/20',
  Utilities: 'from-violet-500/20 to-purple-500/20'
};

const EnhancedProjectCard: React.FC<EnhancedProjectCardProps> = ({ project, isFeatured = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [techHighlightIndex, setTechHighlightIndex] = useState(-1);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Mouse position tracking for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Sequential tech highlighting animation
    let index = 0;
    const interval = setInterval(() => {
      setTechHighlightIndex(index);
      index++;
      if (index >= project.technologies.length) {
        clearInterval(interval);
        setTimeout(() => setTechHighlightIndex(-1), 500);
      }
    }, 150);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTechHighlightIndex(-1);
    x.set(0);
    y.set(0);
  };

  const showActions = isMobile || isHovered;
  const gradientClass = categoryColors[project.category as keyof typeof categoryColors] || categoryColors.Web;

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative h-full rounded-2xl overflow-hidden transition-all duration-500 group bg-gradient-to-br from-white/90 to-secondary/30 dark:from-background/80 dark:to-secondary/20 border border-white/10 flex flex-col cursor-pointer",
        isFeatured ? "col-span-1 md:col-span-2 lg:col-span-2" : "col-span-1"
      )}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Animated gradient border */}
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 rounded-2xl blur-sm",
          gradientClass
        )}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: isHovered 
            ? `0 0 30px rgba(var(--primary-rgb, 59, 130, 246), 0.3)` 
            : "none"
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main card content */}
      <div className="relative z-10 h-full bg-card/50 backdrop-blur-sm rounded-2xl border border-border/40 flex flex-col">
        {/* Image container with enhanced overlay */}
        <div className="relative overflow-hidden h-48">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
          />
          
          {/* Enhanced overlay with metrics */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 flex flex-col justify-between p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: showActions ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Top metrics */}
            <div className="flex justify-between items-start">
              <div className="flex gap-2">
                {project.featured && (
                  <motion.div
                    className="px-2 py-1 bg-primary/80 text-white rounded-full text-xs font-medium flex items-center gap-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: isHovered ? 1 : 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Star size={12} />
                    Featured
                  </motion.div>
                )}
                <motion.div
                  className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs flex items-center gap-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: isHovered ? 1 : 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <TrendingUp size={12} />
                  {project.category}
                </motion.div>
              </div>
            </div>

            {/* Bottom actions */}
            <div className="flex justify-between items-end">
              <motion.div
                className="flex items-center gap-1 text-white/80 text-sm"
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: isHovered ? 0 : -20, 
                  opacity: isHovered ? 1 : 0 
                }}
                transition={{ delay: 0.3 }}
              >
                <Eye size={14} />
                <span>View Project</span>
              </motion.div>

              <div className="flex gap-2">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: isHovered ? 1 : 0, 
                      rotate: isHovered ? 0 : -180 
                    }}
                    transition={{ delay: 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} className="text-white" />
                  </motion.a>
                )}
                
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ 
                      scale: isHovered ? 1 : 0, 
                      rotate: isHovered ? 0 : 180 
                    }}
                    transition={{ delay: 0.2, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} className="text-white" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content section */}
        <div className="p-6 flex flex-col flex-grow">
          {project.association && (
            <motion.span 
              className="inline-block px-2 py-1 text-xs font-medium bg-secondary/50 text-foreground/80 rounded mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {project.association}
            </motion.span>
          )}
          
          <div className="flex items-center gap-2 mb-2">
            {project.icon && (
              <motion.span 
                className="text-primary"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {project.icon}
              </motion.span>
            )}
            <h3 className="text-xl font-bold bg-gradient-to-r from-foreground via-primary/90 to-primary/70 bg-clip-text text-transparent">
              {project.title}
            </h3>
          </div>
          
          <p className="text-foreground/70 text-sm mb-4 flex-grow leading-relaxed">
            {project.description}
          </p>
          
          {/* Enhanced technology badges */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, index) => (
              <motion.span 
                key={index} 
                className={cn(
                  "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium transition-all duration-300",
                  techHighlightIndex === index 
                    ? "bg-primary/20 text-primary scale-110 shadow-lg" 
                    : "bg-secondary/50 text-foreground/80"
                )}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: techHighlightIndex === index ? 1.1 : 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Code size={12} className="mr-1" />
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedProjectCard;
