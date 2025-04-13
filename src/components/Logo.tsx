
import React from 'react';
import { cn } from '@/lib/utils';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
          <span className="font-bold text-primary-foreground text-lg">VS</span>
        </div>
        <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg blur opacity-50"></div>
      </div>
      <span className="ml-2 font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hidden sm:inline-block">
        Vishesh Sanghvi
      </span>
    </div>
  );
};

export default Logo;
