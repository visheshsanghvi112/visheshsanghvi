import React, { useState } from 'react';
import { Download, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

const DownloadCVButton = ({ className }: { className?: string }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsDownloading(true);

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
      href="#"
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
            Redirecting...
          </>
        ) : (
          <>
            <Download size={18} className="mr-2 group-hover:animate-bounce" />
            View Resume
          </>
        )}
      </span>
    </a>
  );
};

export default DownloadCVButton;
