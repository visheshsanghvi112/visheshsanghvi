
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  showScrollTop?: boolean;
  onScrollTop?: () => void;
}

const Footer: React.FC<FooterProps> = ({ showScrollTop, onScrollTop }) => {
  return (
    <>
      {/* Scroll to top button - Only rendered if functions provided */}
      {onScrollTop && (
        <Button 
          onClick={onScrollTop} 
          className={`fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg z-50 transition-all duration-300 ${
            showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          aria-label="Scroll to top"
          size="icon"
        >
          <ArrowUp size={20} />
        </Button>
      )}

      <footer className="py-8 border-t border-border/60 bg-gradient-to-t from-background to-background/50">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <p className="text-foreground/60 text-sm mb-4">
            © {new Date().getFullYear()} Vishesh Sanghvi. All rights reserved.
          </p>
          
          <div className="flex justify-center flex-wrap gap-4 mb-6">
            <Link 
              to="/resume"
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              Interactive Resume
            </Link>
            <a 
              href="https://www.linkedin.com/in/vishesh-sanghvi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a 
              href="https://github.com/visheshsanghvi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a 
              href="mailto:visheshsanghvi112@gmail.com" 
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
            <a 
              href="tel:+917977282697" 
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Phone
            </a>
            <Link 
              to="/admin"
              className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 inline-flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
              Admin Dashboard
            </Link>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/blog" className="text-xs text-foreground/60 hover:text-primary transition-colors">Blog</Link>
              <span className="text-foreground/40">•</span>
              <Link to="/projects" className="text-xs text-foreground/60 hover:text-primary transition-colors">Projects</Link>
              <span className="text-foreground/40">•</span>
              <Link to="/case-studies" className="text-xs text-foreground/60 hover:text-primary transition-colors">Case Studies</Link>
              <span className="text-foreground/40">•</span>
              <Link to="/code-demo" className="text-xs text-foreground/60 hover:text-primary transition-colors">Code Demos</Link>
            </div>
            
            <div className="text-xs text-foreground/40">
              Built with React, TypeScript & Tailwind CSS
              <div className="mt-1">
                <span className="bg-primary/10 text-primary/80 px-2 py-1 rounded text-xs font-mono">Last updated: April 2025</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
