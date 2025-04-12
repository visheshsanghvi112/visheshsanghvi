
import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface Section {
  id: string;
  labelKey: string;
}

interface FloatingNavDotsProps {
  activeSection?: string;
}

const FloatingNavDots: React.FC<FloatingNavDotsProps> = ({ activeSection = 'hero' }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { t } = useTranslation();

  // Define sections with translation keys
  const sections: Section[] = [
    { id: 'hero', labelKey: 'navigation.home' },
    { id: 'experience', labelKey: 'navigation.experience' },
    { id: 'education', labelKey: 'navigation.education' },
    { id: 'skills', labelKey: 'navigation.skills' },
    { id: 'projects', labelKey: 'navigation.projects' },
    { id: 'testimonials', labelKey: 'navigation.testimonials' },
    { id: 'contact', labelKey: 'navigation.contact' },
  ];

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
            aria-label={`Navigate to ${t(section.labelKey)} section`}
            className="group relative"
            onClick={() => handleDotClick(section.id)}
          >
            {/* Tooltip */}
            <span className="absolute right-8 top-0 bg-background/80 text-foreground px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {t(section.labelKey)}
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
