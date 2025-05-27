
// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void | Promise<void>) => {
  const start = performance.now();
  
  const result = fn();
  
  if (result instanceof Promise) {
    return result.finally(() => {
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
    });
  } else {
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  }
};

export const reportWebVitals = (metric: any) => {
  console.log('Web Vital:', metric);
  // Integration point for web vitals reporting
};

// Lazy loading utility
export const lazyLoad = (importFn: () => Promise<any>) => {
  return React.lazy(() => 
    importFn().catch(err => {
      console.error('Lazy load error:', err);
      // Return a fallback component
      return { 
        default: () => React.createElement('div', null, 'Failed to load component') 
      };
    })
  );
};

// Image optimization utility
export const optimizeImage = (src: string, width?: number, height?: number): string => {
  // For now, return the original src
  // This can be enhanced with image optimization services
  return src;
};
