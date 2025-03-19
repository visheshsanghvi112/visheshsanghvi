
import React from 'react';
import { Star, Quote, User } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number; // 1-5
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Darsh Shah",
    role: "CEO",
    company: "TechSolutions Inc.",
    testimonial: "Vishesh delivered exceptional results on our web project. His attention to detail and problem-solving skills were impressive. He understood our requirements perfectly and exceeded our expectations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Anjali Mehta",
    role: "Marketing Director",
    company: "CreativeMinds",
    testimonial: "Working with Vishesh was a pleasure. He brought innovative ideas to the table and implemented them with great skill. Our app's user experience improved significantly thanks to his contributions.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rahul Patel",
    role: "CTO",
    company: "DataDriven Analytics",
    testimonial: "Vishesh's expertise in data analysis and visualization transformed our dashboard. His ability to translate complex data into intuitive visualizations helped our team make better decisions.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Priya Singh",
    role: "Project Manager",
    company: "InnovateX",
    testimonial: "Vishesh consistently delivers high-quality code on time. He's a great communicator and team player who adapts quickly to new challenges. I would highly recommend him for any development project.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Ajay Kumar",
    role: "Founder",
    company: "MobileTech Solutions",
    testimonial: "We hired Vishesh to develop our mobile application, and he did an outstanding job. His technical knowledge combined with his understanding of user experience made our app stand out in the market.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Neha Sharma",
    role: "UI/UX Director",
    company: "DesignWorks",
    testimonial: "Vishesh has a rare combination of technical expertise and design sensibility. He turned our design concepts into a beautiful, functional website that our clients love. A true professional!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

const TestimonialCard: React.FC<{ testimonial: TestimonialProps; index: number }> = ({ testimonial, index }) => {
  return (
    <div 
      className="testimonial-card transform transition-all duration-500 hover:scale-105"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <Card className="h-full overflow-hidden bg-gradient-to-br from-white/90 to-secondary/20 dark:from-background/90 dark:to-secondary/30 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg">
        <CardContent className="p-0">
          <div className="p-6 relative">
            {/* Quote icon in background */}
            <div className="absolute top-4 right-4 text-primary/10 dark:text-primary/20">
              <Quote size={48} />
            </div>
            
            {/* Rating stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`} 
                />
              ))}
            </div>
            
            {/* Testimonial text */}
            <p className="text-foreground/80 text-sm mb-6 relative z-10">"{testimonial.testimonial}"</p>
            
            {/* Author info */}
            <div className="flex items-center mt-4">
              {testimonial.image ? (
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <User size={24} className="text-primary" />
                </div>
              )}
              <div>
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-xs text-foreground/60">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <AnimatedSection 
      id="testimonials" 
      className="section-container bg-gradient-to-b from-secondary/10 to-background/50 py-24"
      animation="fade-in"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="chip bg-secondary/70 mb-3 backdrop-blur-sm text-foreground/90 text-xs uppercase tracking-wider px-3 py-1">
          What People Say
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/60 bg-clip-text text-transparent">
            Client Testimonials
          </span>
        </h2>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
          Don't just take my word for it. Here's what clients and colleagues have to say about working with me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
