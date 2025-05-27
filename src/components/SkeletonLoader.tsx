
import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  className = 'h-4 w-full', 
  count = 1 
}) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-secondary/50 rounded ${className}`}
        />
      ))}
    </div>
  );
};

export default SkeletonLoader;
