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
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-lg bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className="nav-link">
            {t('navigation.home')}
          </Link>
          <a href="#experience" className="nav-link">
            {t('navigation.experience')}
          </a>
          <a href="#skills" className="nav-link">
            {t('navigation.skills')}
          </a>
          <a href="#projects" className="nav-link">
            {t('navigation.projects')}
          </a>
          <a href="#contact" className="nav-link">
            {t('navigation.contact')}
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="nav-link" size="sm">
                {t('navigation.pages')} <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/resume" className="w-full cursor-pointer">
                  {t('navigation.resume')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog" className="w-full cursor-pointer">
                  {t('navigation.blog')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/case-studies" className="w-full cursor-pointer">
                  {t('navigation.caseStudies')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/setup" className="w-full cursor-pointer">
                  {t('navigation.setup')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/code-demo" className="w-full cursor-pointer">
                  {t('navigation.codeDemos')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#leetcode" className="w-full cursor-pointer">
                  {t('navigation.leetcode')}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex items-center space-x-1">
          <LanguageSwitcher />
          <ThemeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 md:hidden">
              <DropdownMenuItem asChild>
                <Link to="/" className="w-full cursor-pointer">
                  {t('navigation.home')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#experience" className="w-full">
                  {t('navigation.experience')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#skills" className="w-full">
                  {t('navigation.skills')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#projects" className="w-full">
                  {t('navigation.projects')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#contact" className="w-full">
                  {t('navigation.contact')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/resume" className="w-full cursor-pointer">
                  {t('navigation.resume')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog" className="w-full cursor-pointer">
                  {t('navigation.blog')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/case-studies" className="w-full cursor-pointer">
                  {t('navigation.caseStudies')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/setup" className="w-full cursor-pointer">
                  {t('navigation.setup')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/code-demo" className="w-full cursor-pointer">
                  {t('navigation.codeDemos')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#leetcode" className="w-full cursor-pointer">
                  {t('navigation.leetcode')}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
