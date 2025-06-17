
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ModernLogoProps {
  className?: string;
  variant?: 'default' | 'minimal' | 'geometric' | 'tech';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ModernLogo: React.FC<ModernLogoProps> = ({ 
  className = '', 
  variant = 'default',
  showText = true,
  size = 'md'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const renderLogoVariant = () => {
    switch (variant) {
      case 'geometric':
        return (
          <motion.div
            className={cn("relative", sizeClasses[size])}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.svg
              viewBox="0 0 40 40"
              className="w-full h-full"
              initial={false}
              animate={isHovered ? "hover" : "rest"}
            >
              {/* Outer hexagon */}
              <motion.polygon
                points="20,2 35,11 35,29 20,38 5,29 5,11"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
                variants={{
                  rest: { pathLength: 1, opacity: 1 },
                  hover: { pathLength: 1, opacity: 0.8, scale: 1.1 }
                }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Inner triangle for V */}
              <motion.polygon
                points="20,8 28,24 12,24"
                fill="currentColor"
                className="text-primary"
                variants={{
                  rest: { scale: 1, rotate: 0 },
                  hover: { scale: 0.9, rotate: 180 }
                }}
                transition={{ duration: 0.6 }}
              />
              
              {/* S curve */}
              <motion.path
                d="M15,26 Q20,28 25,26 Q20,30 15,32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
                variants={{
                  rest: { pathLength: 1, opacity: 1 },
                  hover: { pathLength: 1, opacity: 1, strokeWidth: 3 }
                }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
            </motion.svg>
          </motion.div>
        );

      case 'tech':
        return (
          <motion.div
            className={cn("relative", sizeClasses[size])}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.svg
              viewBox="0 0 40 40"
              className="w-full h-full"
              initial={false}
              animate={isHovered ? "hover" : "rest"}
            >
              {/* Circuit board style background */}
              <motion.rect
                x="2" y="2" width="36" height="36" rx="6"
                fill="currentColor"
                className="text-primary/10"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.05 }
                }}
              />
              
              {/* V shape made of connected dots */}
              <motion.g className="text-primary" fill="currentColor">
                <motion.circle cx="12" cy="12" r="2" 
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.5 }
                  }}
                  transition={{ delay: 0.1 }}
                />
                <motion.circle cx="16" cy="20" r="2"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.5 }
                  }}
                  transition={{ delay: 0.2 }}
                />
                <motion.circle cx="20" cy="28" r="2"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.5 }
                  }}
                  transition={{ delay: 0.3 }}
                />
                <motion.circle cx="24" cy="20" r="2"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.5 }
                  }}
                  transition={{ delay: 0.2 }}
                />
                <motion.circle cx="28" cy="12" r="2"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.5 }
                  }}
                  transition={{ delay: 0.1 }}
                />
              </motion.g>
              
              {/* Connecting lines */}
              <motion.g stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/50">
                <motion.line x1="12" y1="12" x2="16" y2="20"
                  variants={{
                    rest: { pathLength: 1, opacity: 0.5 },
                    hover: { pathLength: 1, opacity: 1 }
                  }}
                />
                <motion.line x1="16" y1="20" x2="20" y2="28"
                  variants={{
                    rest: { pathLength: 1, opacity: 0.5 },
                    hover: { pathLength: 1, opacity: 1 }
                  }}
                />
                <motion.line x1="20" y1="28" x2="24" y2="20"
                  variants={{
                    rest: { pathLength: 1, opacity: 0.5 },
                    hover: { pathLength: 1, opacity: 1 }
                  }}
                />
                <motion.line x1="24" y1="20" x2="28" y2="12"
                  variants={{
                    rest: { pathLength: 1, opacity: 0.5 },
                    hover: { pathLength: 1, opacity: 1 }
                  }}
                />
              </motion.g>
            </motion.svg>
          </motion.div>
        );

      case 'minimal':
        return (
          <motion.div
            className={cn("relative", sizeClasses[size])}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="w-full h-full rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="font-bold text-primary-foreground z-10"
                style={{ fontSize: size === 'sm' ? '0.75rem' : size === 'md' ? '1rem' : '1.25rem' }}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                VS
              </motion.span>
            </motion.div>
          </motion.div>
        );

      default:
        return (
          <motion.div
            className={cn("relative", sizeClasses[size])}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated background layers */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.4 }}
              />
              
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg blur opacity-50"
                animate={{
                  scale: isHovered ? 1.1 : 0.9,
                  opacity: isHovered ? 0.8 : 0.2
                }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.span 
                className="font-bold text-primary-foreground z-10 relative"
                style={{ fontSize: size === 'sm' ? '0.75rem' : size === 'md' ? '1rem' : '1.25rem' }}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                VS
              </motion.span>
            </motion.div>
          </motion.div>
        );
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      {renderLogoVariant()}
      
      {showText && (
        <motion.span 
          className={cn(
            "ml-2 font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hidden sm:inline-block",
            textSizeClasses[size]
          )}
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Vishesh Sanghvi
        </motion.span>
      )}
    </div>
  );
};

export default ModernLogo;
