
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FileQuestion, ArrowLeft, Home, Code } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Auto redirect countdown
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/95 p-4">
      <AnimatedSection 
        animation="fade" 
        className="w-full max-w-3xl"
        duration={800}
      >
        <div className="glass-panel p-8 sm:p-12 text-center space-y-8 relative overflow-hidden">
          {/* Background code effect */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <pre className="text-xs text-left p-8">
              {`const findPage = (path) => {
  try {
    return pages.find(page => page.path === path);
  } catch (error) {
    throw new Error('404: Page not found');
  }
}

// Error occurred at:
findPage('${location.pathname}');`}
            </pre>
          </div>
          
          <div className="relative">
            <div className="mb-6 relative">
              <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <FileQuestion size={48} className="text-red-400" />
              </div>
              
              <h1 className="text-5xl sm:text-7xl font-bold mb-2 gradient-text">404</h1>
              <p className="text-xl sm:text-2xl text-foreground/80 mb-2">Oops! Page not found</p>
              <p className="text-foreground/60 max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved to another dimension.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                className="group relative overflow-hidden" 
                onClick={() => window.history.back()}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ArrowLeft size={16} className="group-hover:animate-bounce-subtle" />
                  Go Back
                </span>
                <span className="absolute inset-0 bg-primary/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              
              <Link to="/">
                <Button 
                  variant="outline" 
                  className="group relative overflow-hidden w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Home size={16} className="group-hover:animate-bounce-subtle" />
                    Return Home
                  </span>
                  <span className="absolute inset-0 bg-primary/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-foreground/40">
              Redirecting to homepage in <span className="font-mono text-primary">{counter}</span> seconds
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <div className="mt-4 text-center text-foreground/40 text-sm">
        <div className="flex items-center justify-center gap-2">
          <Code size={14} /> 
          <span>Looking for the source code? Check my <a href="https://github.com/visheshsanghvi" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
