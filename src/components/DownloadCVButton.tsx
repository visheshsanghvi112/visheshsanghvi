
import React from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DownloadCVButtonProps {
  className?: string;
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({ className }) => {
  return (
    <a
      href="/vishesh-sanghvi-resume.pdf" // You'll need to add this PDF to your public folder
      download="vishesh-sanghvi-resume.pdf"
      className={cn(
        "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all",
        "bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/80",
        "text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
        className
      )}
    >
      <Download size={18} className="mr-2" />
      Download Resume
    </a>
  );
};

export default DownloadCVButton;
