
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  rating?: number;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Vishesh is an exceptional developer with an eye for detail. His ability to transform complex requirements into elegant solutions is remarkable.",
    author: "Rahul Sharma",
    role: "CTO",
    company: "TechNova Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    content: "Working with Vishesh was a game-changer for our project. His technical expertise and problem-solving skills helped us overcome significant challenges.",
    author: "Priya Patel",
    role: "Product Manager",
    company: "DataViz Analytics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    content: "Vishesh's contributions to our team have been invaluable. His commitment to quality and ability to deliver under pressure sets him apart.",
    author: "Arjun Mehta",
    role: "Senior Developer",
    company: "CloudStore Systems",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5
  },
  {
    content: "An outstanding developer who combines technical skills with business understanding. Vishesh consistently delivered high-quality solutions that exceeded our expectations.",
    author: "Anika Desai",
    role: "Director of Engineering",
    company: "InnovateTech",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <AnimatedSection id="testimonials" className="section-container py-24" animation="fade">
      <h2 className="section-heading">
        <span className="chip bg-secondary/70 mb-3 backdrop-blur-sm text-foreground/90 text-xs uppercase tracking-wider px-3 py-1">Client Feedback</span>
        <br />
        Testimonials
      </h2>

      <div className="relative max-w-4xl mx-auto mt-16">
        {/* Background decoration */}
        <div className="absolute -top-10 left-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl dark:bg-primary/10"></div>
        <div className="absolute -bottom-10 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl dark:bg-primary/10"></div>
        
        {/* Quote Icon */}
        <div className="absolute -top-10 -left-8 md:-left-12 z-0 opacity-10">
          <Quote size={100} className="text-primary" />
        </div>

        {/* Testimonial Carousel */}
        <div className="relative z-10 glass-panel p-8 md:p-12 bg-gradient-to-br from-white/90 to-secondary/30 dark:from-background/80 dark:to-secondary/10 border-white/10 shadow-xl">
          <div className="overflow-hidden relative h-[280px] md:h-[240px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-500 absolute top-0 left-0 w-full h-full flex flex-col justify-center",
                  index === activeIndex ? "opacity-100 translate-x-0 z-10" : 
                  index < activeIndex ? "opacity-0 -translate-x-full -z-10" : "opacity-0 translate-x-full -z-10"
                )}
              >
                <p className="text-lg md:text-xl text-foreground/90 italic mb-6 text-balance">
                  "{testimonial.content}"
                </p>
                
                {/* Star Rating */}
                {testimonial.rating && (
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating! 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300"
                        } 
                      />
                    ))}
                  </div>
                )}
                
                <div className="flex items-center mt-2">
                  {testimonial.image && (
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.author}</h4>
                    <p className="text-sm text-foreground/70">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-6 right-8 flex space-x-2">
            <button 
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-white/30 dark:bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/30 dark:bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === activeIndex 
                    ? "bg-primary w-4" 
                    : "bg-secondary/50 hover:bg-secondary"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
