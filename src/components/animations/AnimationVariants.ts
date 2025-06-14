import { Variants } from 'framer-motion';

// Hero section animations
export const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

// Magnetic button effect
export const magneticVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 15
    }
  }
};

// Floating animation for cards
export const floatingVariants: Variants = {
  animate: {
    y: [-5, 5],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

// Glitch effect for tech elements
export const glitchVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.1,
    }
  },
  glitch: {
    x: [0, -2, 2, 0],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 0.2,
      repeat: 2,
      repeatType: "reverse",
    },
  },
};

// Reveal animation with perspective
export const perspectiveVariants: Variants = {
  hidden: {
    opacity: 0,
    rotateX: -15,
    y: 50,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Particle trail animation
export const particleVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [0, 1.2, 1],
    opacity: [0, 1, 0.8],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Neural network pulse
export const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Holographic shimmer effect
export const shimmerVariants: Variants = {
  shimmer: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Typewriter effect
export const typewriterVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

// Morphing shape animation
export const morphVariants: Variants = {
  morph: {
    borderRadius: ["20px", "50px", "20px"],
    rotate: [0, 180, 360],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};