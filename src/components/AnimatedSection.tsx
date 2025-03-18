
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  id?: string;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom' | 'rotate' | 'bounce' | 'flip';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  id,
  animation = 'fade',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Determine animation class based on prop
  const getAnimationClasses = () => {
    switch (animation) {
      case 'slide-up':
        return 'opacity-0 transform translate-y-16';
      case 'slide-down':
        return 'opacity-0 transform -translate-y-16';
      case 'slide-left':
        return 'opacity-0 transform translate-x-16';
      case 'slide-right':
        return 'opacity-0 transform -translate-x-16';
      case 'zoom':
        return 'opacity-0 transform scale-90';
      case 'rotate':
        return 'opacity-0 transform rotate-6';
      case 'bounce':
        return 'opacity-0 transform -translate-y-4';
      case 'flip':
        return 'opacity-0 transform rotateX-90';
      case 'fade':
      default:
        return 'opacity-0';
    }
  };

  // Determine visible animation classes
  const getVisibleClasses = () => {
    switch (animation) {
      case 'bounce':
        return 'opacity-100 transform-none animate-[bounce_0.5s_ease-out]';
      case 'rotate':
        return 'opacity-100 transform-none rotate-0';
      case 'flip':
        return 'opacity-100 transform-none rotateX-0';
      default:
        return 'opacity-100 transform-none';
    }
  };

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay, threshold]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        getAnimationClasses(),
        'transition-all duration-1000 ease-out',
        isVisible && getVisibleClasses(),
        className
      )}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
