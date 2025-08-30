
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import { Separator } from './ui/separator';

interface NavBarProps {
  activeSection?: string;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection }) => {
  const { t } = useTranslation();
  
  const navItems = [
    { id: 'hero', label: t('navigation.home') },
    { id: 'experience', label: t('navigation.about') },
    { id: 'contact', label: t('navigation.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 backdrop-blur-lg bg-background/80 border-b border-border/40">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center w-full justify-center">
          <div className="rounded-full bg-card/60 backdrop-blur border border-border/40 shadow-md px-2 py-1 flex items-center gap-1">
            {/* Primary links */}
            <Link
              to="/"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-colors",
                activeSection === 'hero' && "bg-primary/10 text-primary"
              )}
            >
              {t('navigation.home')}
            </Link>
            <a
              href="#experience"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-colors",
                activeSection === 'experience' && "bg-primary/10 text-primary"
              )}
            >
              {t('navigation.about')}
            </a>
            <Link
              to="/projects"
              className="px-4 py-2 text-sm font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {t('navigation.work')}
            </Link>
            <Link
              to="/blog"
              className="px-4 py-2 text-sm font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {t('navigation.blog')}
            </Link>

            {/* More dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 text-sm font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-colors inline-flex items-center">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/case-studies">{t('navigation.caseStudies')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/code-demo">{t('navigation.codeDemos')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/leetcode">{t('navigation.leetcode')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/linkedin">{t('navigation.linkedin')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://drive.google.com/file/d/1xxnxIPt1BJ1ecNQKxnD5Oqal5jdqJ8tf/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Resume (PDF)
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA */}
            <a
              href="https://calendly.com/visheshsanghvi112/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-4 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
            >
              Book a Call
            </a>
          </div>
        </nav>
        
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <Separator orientation="vertical" className="h-6 mx-1 hidden md:block" />
          <ThemeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 md:hidden">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.id} asChild>
                  <a 
                    href={`#${item.id}`}
                    className={cn(
                      "w-full cursor-pointer",
                      activeSection === item.id && "text-primary font-medium"
                    )}
                  >
                    {item.label}
                  </a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a 
                  href="https://drive.google.com/file/d/1xxnxIPt1BJ1ecNQKxnD5Oqal5jdqJ8tf/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full cursor-pointer"
                >
                  Resume
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a 
                  href="https://calendly.com/visheshsanghvi112/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full cursor-pointer"
                >
                  Book a Call
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog" className="w-full cursor-pointer">
                  {t('navigation.blog')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/projects" className="w-full cursor-pointer">
                  {t('navigation.projects')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/case-studies" className="w-full cursor-pointer">
                  {t('navigation.caseStudies')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/code-demo" className="w-full cursor-pointer">
                  {t('navigation.codeDemos')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/leetcode" className="w-full cursor-pointer">
                  {t('navigation.leetcode')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/linkedin" className="w-full cursor-pointer">
                  {t('navigation.linkedin')}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
