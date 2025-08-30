
import React, { useState, useRef, useEffect } from 'react';
import { Download, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

const DownloadCVButton = ({ className }: { className?: string }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Magnetic effect on hover
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Adjust the transform based on mouse position (reduced intensity)
      button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    };
    
    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0) scale(1)';
    };
    
    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (button) {
        button.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isHovering]);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsDownloading(true);

    // Create ripple effect
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      top: ${y}px;
      left: ${x}px;
      transform: translate(-50%, -50%);
      width: 5px;
      height: 5px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      pointer-events: none;
    `;
    
    ripple.classList.add('animate-ripple');
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 1000);

    setTimeout(() => {
      setIsDownloading(false);
      toast({
        title: "Redirecting to Resume",
        description: "Thank you for your interest in my resume!",
      });
      window.location.href = "https://drive.google.com/file/d/1fjc-mHrwavHSOmJm6ck3zF7fNKIy1tXW/view?usp=sharing";
    }, 1500);
  };

  return (
    <a
      ref={buttonRef}
      href="#"
      onClick={handleDownload}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "inline-flex items-center px-6 py-3 rounded-lg font-medium relative overflow-hidden group",
        "bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/80",
        "text-white shadow-lg hover:shadow-xl",
        "transition-all duration-300 ease-out",
        "hover:scale-105 active:scale-95",
        className
      )}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full ease-out duration-700 transition-transform"></span>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="relative flex items-center z-10">
        {isDownloading ? (
          <>
            <Check size={18} className="mr-2 animate-pulse" />
            <span className="relative">
              <span className="animate-pulse">Redirecting...</span>
            </span>
          </>
        ) : (
          <>
            <Download size={18} className="mr-2 group-hover:animate-bounce transition-transform duration-300" />
            <span className="relative">
              <span className="group-hover:opacity-0 transition-opacity duration-300">View Resume</span>
              <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Download CV</span>
            </span>
          </>
        )}
      </span>
    </a>
  );
};

export default DownloadCVButton;
