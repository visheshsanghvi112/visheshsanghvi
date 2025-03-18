
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Vishesh is an exceptional developer with an eye for detail. His ability to transform complex requirements into elegant solutions is remarkable.",
    author: "Rahul Sharma",
    role: "CTO",
    company: "TechNova Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "Working with Vishesh was a game-changer for our project. His technical expertise and problem-solving skills helped us overcome significant challenges.",
    author: "Priya Patel",
    role: "Product Manager",
    company: "DataViz Analytics",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "Vishesh's contributions to our team have been invaluable. His commitment to quality and ability to deliver under pressure sets him apart.",
    author: "Arjun Mehta",
    role: "Senior Developer",
    company: "CloudStore Systems",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <AnimatedSection id="testimonials" className="section-container" animation="fade">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
        <span className="inline-block bg-gradient-to-r from-primary/80 via-primary to-primary/60 text-transparent bg-clip-text mb-3">
          Testimonials
        </span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Quote Icon */}
        <div className="absolute -top-10 -left-8 md:-left-12 z-0 opacity-10">
          <Quote size={100} />
        </div>

        {/* Testimonial Carousel */}
        <div className="relative z-10 glass-panel p-8 md:p-12 bg-gradient-to-br from-background/80 to-secondary/10 border-white/10 shadow-xl">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "transition-opacity duration-500 absolute top-0 left-0 w-full h-full flex flex-col justify-center p-8 md:p-12",
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 -z-10"
              )}
            >
              <p className="text-lg md:text-xl text-foreground/90 italic mb-8 text-balance">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mt-4">
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

          {/* Navigation Buttons */}
          <div className="absolute bottom-6 right-8 flex space-x-2">
            <button 
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === activeIndex 
                    ? "bg-primary w-4" 
                    : "bg-secondary/50 hover:bg-secondary"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
