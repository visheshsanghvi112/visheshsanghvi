
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize theme based on system preference
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsDarkMode(!isDarkMode);
      if (!isDarkMode) {
        document.documentElement.classList.add('dark');
        toast({
          title: "Dark mode activated",
          description: "Your eyes will thank you at night!",
          duration: 2000,
        });
      } else {
        document.documentElement.classList.remove('dark');
        toast({
          title: "Light mode activated",
          description: "Bright and vibrant!",
          duration: 2000,
        });
      }
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 150);
  };

  return (
    <div className={cn("flex items-center space-x-2 relative", className)}>
      <Sun 
        size={16} 
        className={cn(
          "text-foreground/70 transition-all duration-300",
          isDarkMode ? "opacity-50" : "opacity-100 text-yellow-500",
          isAnimating && !isDarkMode && "animate-spin"
        )} 
      />
      <Switch 
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        aria-label="Toggle dark mode"
        className={cn(
          "data-[state=checked]:bg-primary/80 data-[state=unchecked]:bg-secondary/80",
          "transition-all duration-300"
        )}
      />
      <Moon 
        size={16} 
        className={cn(
          "text-foreground/70 transition-all duration-300",
          !isDarkMode ? "opacity-50" : "opacity-100 text-blue-400",
          isAnimating && isDarkMode && "animate-spin"
        )} 
      />
      
      {/* Animated background effect */}
      {isAnimating && (
        <div className={cn(
          "absolute inset-0 -z-10 rounded-full blur-xl transition-all duration-700",
          isDarkMode ? "bg-blue-500/20" : "bg-yellow-500/20"
        )}></div>
      )}
    </div>
  );
};

export default ThemeToggle;
