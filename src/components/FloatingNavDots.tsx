
import React from 'react';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  label: string;
}

interface FloatingNavDotsProps {
  activeSection?: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const FloatingNavDots: React.FC<FloatingNavDotsProps> = ({ activeSection = 'hero' }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show/hide based on scroll position
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDotClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-4 bg-secondary/20 backdrop-blur-lg p-2 rounded-full">
        {sections.map((section) => (
          <button
            key={section.id}
            aria-label={`Navigate to ${section.label} section`}
            className="group relative"
            onClick={() => handleDotClick(section.id)}
          >
            {/* Tooltip */}
            <span className="absolute right-8 top-0 bg-background/80 text-foreground px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {section.label}
            </span>
            
            {/* Dot */}
            <div 
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                activeSection === section.id 
                  ? "bg-primary scale-125" 
                  : "bg-secondary/50 scale-100 hover:bg-primary/50"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingNavDots;
