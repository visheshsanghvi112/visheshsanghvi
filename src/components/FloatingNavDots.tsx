
import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface FloatingNavDotsProps {
  activeSection: string;
}

const FloatingNavDots: React.FC<FloatingNavDotsProps> = ({ activeSection }) => {
  const { t } = useTranslation();
  
  const sections = [
    { id: 'hero', label: t('navigation.home') },
    { id: 'experience', label: t('navigation.experience') },
    { id: 'skills', label: t('navigation.skills') },
    { id: 'projects', label: t('navigation.projects') },
    { id: 'contact', label: t('navigation.contact') },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-4">
      <div className="bg-background/80 backdrop-blur-sm border border-border/40 p-2 rounded-full flex flex-col items-center space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            className="group relative flex items-center"
            onClick={() => scrollToSection(section.id)}
            aria-label={`Scroll to ${section.label}`}
          >
            <span className="absolute right-full mr-2 px-2 py-1 rounded bg-background/80 border border-border/40 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.label}
            </span>
            <div 
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                activeSection === section.id 
                  ? "bg-primary scale-100" 
                  : "bg-primary/30 scale-75 hover:scale-90 hover:bg-primary/50"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingNavDots;
