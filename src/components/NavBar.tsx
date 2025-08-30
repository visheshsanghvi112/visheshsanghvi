
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, ChevronDown, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
    { id: 'projects', label: t('navigation.work') },
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
        
        <div className="hidden md:flex items-center">
          <NavigationMenu className="mx-6">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    href={`#${item.id}`}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "px-4 py-2 text-sm font-medium transition-colors",
                      activeSection === item.id 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium">
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[280px] gap-3 p-4">
                    <div>
                      <NavigationMenuLink 
                        asChild 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Link to="/blog">
                          <div className="text-sm font-medium leading-none">{t('navigation.blog')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Articles and insights on development
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink 
                        asChild 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Link to="/case-studies">
                          <div className="text-sm font-medium leading-none">{t('navigation.caseStudies')}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Detailed project breakdowns
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink 
                        asChild 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Link to="/leetcode">
                          <div className="text-sm font-medium leading-none">LeetCode</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Coding solutions and statistics
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink 
                        asChild 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Link to="/linkedin">
                          <div className="text-sm font-medium leading-none">LinkedIn</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Professional network and highlights
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  <a 
                    href="https://calendly.com/visheshsanghvi112/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Book a Call
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
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
