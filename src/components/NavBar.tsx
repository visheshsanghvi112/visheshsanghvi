
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavBarProps {
  activeSection?: string;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection = 'hero' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  const getNavLinks = () => {
    const baseLinks = [
      { label: 'Home', sectionId: 'hero' },
      { label: 'Experience', sectionId: 'experience' },
      { label: 'Education', sectionId: 'education' },
      { label: 'Projects', sectionId: 'projects' },
      { label: 'GitHub', sectionId: 'github-activity' },
      { label: 'Certifications', sectionId: 'certifications' },
      { label: 'Testimonials', sectionId: 'testimonials' },
      { label: 'Contact', sectionId: 'contact' },
    ];

    // Only show Skills section in desktop view
    if (!isMobile) {
      baseLinks.splice(3, 0, { label: 'Skills', sectionId: 'skills' });
      // Add Interactive Skills after regular Skills
      baseLinks.splice(4, 0, { label: 'Interactive Skills', sectionId: 'interactive-skills' });
    } else {
      // On mobile, still add Interactive Skills but in a different position
      baseLinks.splice(4, 0, { label: 'Interactive Skills', sectionId: 'interactive-skills' });
    }

    return baseLinks;
  };

  const navLinks = getNavLinks();

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
        <div className="flex-1 flex items-center">
          <Link
            to="/"
            className="text-xl font-bold text-foreground tracking-tight"
          >
            <span className="text-primary">V</span>S
          </Link>
          
          {/* Additional navigation items */}
          <div className="hidden md:flex ml-6 space-x-4">
            <Link
              to="/resume"
              className="text-sm font-medium transition-colors text-foreground/80 hover:text-primary"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
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
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-8 pt-20">
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
          
          <hr className="w-24 border-t border-border/30 my-4" />
          
          {/* Additional navigation items for mobile */}
          <Link
            to="/resume"
            className="text-lg font-medium transition-colors text-foreground/80 hover:text-primary"
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Resume
          </Link>
          
          <ThemeToggle className="mt-6" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
