
import React, { useState } from 'react';
import { Download, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

interface DownloadCVButtonProps {
  className?: string;
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({ className }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      toast({
        title: "Resume downloaded",
        description: "Thank you for your interest in my resume!",
      });
    }, 1500);
  };

  return (
    <a
      href="/vishesh-sanghvi-resume.pdf"
      download="vishesh-sanghvi-resume.pdf"
      onClick={handleDownload}
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
      <span className="relative flex items-center">
        {isDownloading ? (
          <>
            <Check size={18} className="mr-2 animate-pulse" />
            Downloading...
          </>
        ) : (
          <>
            <Download size={18} className="mr-2 group-hover:animate-bounce" />
            Download Resume
          </>
        )}
      </span>
    </a>
  );
};

export default DownloadCVButton;
