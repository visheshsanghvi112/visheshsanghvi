
import React, { useEffect, useState } from 'react';
import { Menu, X, BookOpen, LayoutDashboard, Settings, Code } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface NavBarProps {
  activeSection?: string;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection = 'hero' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
    
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getNavLinks = () => {
    const baseLinks = [
      { label: 'Home', sectionId: 'hero', path: '/' },
      { label: 'Experience', sectionId: 'experience', path: '/#experience' },
      { label: 'Education', sectionId: 'education', path: '/#education' },
      { label: 'Projects', sectionId: 'projects', path: '/#projects' },
      { label: 'GitHub', sectionId: 'github-activity', path: '/#github-activity' },
      { label: 'Certifications', sectionId: 'certifications', path: '/#certifications' },
      { label: 'Testimonials', sectionId: 'testimonials', path: '/#testimonials' },
      { label: 'Contact', sectionId: 'contact', path: '/#contact' },
    ];

    // Only show Skills section in desktop view
    if (!isMobile) {
      baseLinks.splice(3, 0, { label: 'Skills', sectionId: 'skills', path: '/#skills' });
      // Add Interactive Skills after regular Skills
      baseLinks.splice(4, 0, { label: 'Interactive Skills', sectionId: 'interactive-skills', path: '/#interactive-skills' });
    } else {
      // On mobile, still add Interactive Skills but in a different position
      baseLinks.splice(4, 0, { label: 'Interactive Skills', sectionId: 'interactive-skills', path: '/#interactive-skills' });
    }

    return baseLinks;
  };

  const navLinks = getNavLinks();

  // Additional pages links
  const additionalPages = [
    { label: 'Resume', path: '/resume', icon: LayoutDashboard },
    { label: 'Blog', path: '/blog', icon: BookOpen },
    { label: 'Case Studies', path: '/case-studies', icon: LayoutDashboard },
    { label: 'My Setup', path: '/setup', icon: Settings },
    { label: 'Code Demos', path: '/code-demo', icon: Code }
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
        <div className="flex-1 flex items-center">
          <Link
            to="/"
            className="text-xl font-bold text-foreground tracking-tight"
          >
            <span className="text-primary">V</span>S
          </Link>
          
          {/* Additional navigation items - Pages dropdown */}
          <div className="hidden md:flex ml-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-sm font-medium transition-colors text-foreground/80 hover:text-primary"
                >
                  Pages
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-background/95 backdrop-blur-md border-border/50">
                {additionalPages.map((page) => (
                  <DropdownMenuItem key={page.path} asChild>
                    <Link 
                      to={page.path}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <page.icon size={16} />
                      {page.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {isHomePage ? (
            // Show section links on homepage
            navLinks.map((link) => (
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
            ))
          ) : (
            // Show only Home link on other pages
            <Link
              to="/"
              className="text-sm font-medium transition-colors text-foreground/80 hover:text-primary"
            >
              Home
            </Link>
          )}
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
          {isHomePage ? (
            // Show section links on homepage for mobile
            navLinks.map((link) => (
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
            ))
          ) : (
            // Show Home link on other pages for mobile
            <Link
              to="/"
              className="text-lg font-medium transition-colors text-foreground/80 hover:text-primary"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Home
            </Link>
          )}
          
          <hr className="w-24 border-t border-border/30 my-4" />
          
          {/* Additional pages navigation for mobile */}
          {additionalPages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="text-lg font-medium transition-colors text-foreground/80 hover:text-primary flex items-center gap-2"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              <page.icon size={18} />
              {page.label}
            </Link>
          ))}
          
          <ThemeToggle className="mt-6" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
