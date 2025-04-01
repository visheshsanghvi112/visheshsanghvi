
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

interface NavBarProps {
  activeSection?: string;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection = 'hero' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // When opening the mobile menu, prevent body scrolling
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleNavLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    // Re-enable scrolling when closing the menu
    document.body.style.overflow = '';
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Education', sectionId: 'education' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Certifications', sectionId: 'certifications' },
    { label: 'Testimonials', sectionId: 'testimonials' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16 md:h-20">
        <div className="flex-1">
          <a
            href="#hero"
            className="text-xl font-bold text-foreground tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick('hero');
            }}
          >
            <span className="text-primary">V</span>S
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              className={cn(
                "text-sm font-medium transition-colors interactive-link",
                activeSection === link.sectionId 
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.sectionId);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center ml-6">
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="ml-4 md:hidden w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors hover:bg-muted"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transition-transform duration-300 ease-in-out overflow-auto',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ top: 0, height: '100vh' }} // Explicitly set top:0 and full viewport height
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8 pt-20">
          {navLinks.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              className={cn(
                "text-lg font-medium transition-colors",
                activeSection === link.sectionId 
                  ? "text-primary font-semibold"
                  : "text-foreground/80 hover:text-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.sectionId);
              }}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle className="mt-8" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
