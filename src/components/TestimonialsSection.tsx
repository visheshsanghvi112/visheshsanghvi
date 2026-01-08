import React from 'react';
import AnimatedSection from './AnimatedSection';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const testimonials = [
  {
    quote: "Vishesh delivered a stunning WordPress website for our pharmaceutical company. His attention to detail and understanding of our industry was impressive. The site not only looks professional but has significantly improved our online presence.",
    name: "Dr. Rajesh Patil",
    designation: "Managing Director, JohnLee Pharmaceuticals",
    src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    quote: "We needed a custom Tally-like financial management system, and Vishesh built exactly what we envisioned. The software is intuitive, efficient, and has streamlined our entire accounting process. Exceptional work!",
    name: "Amit Sharma",
    designation: "CEO, GenericPlus Solutions",
    src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    quote: "Working with Vishesh on our website redesign was a pleasure. He's not just technically skilled but also a great communicator who understood our vision perfectly. The final product exceeded our expectations.",
    name: "Priya Desai",
    designation: "Marketing Head, Ambica Pharma",
    src: "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    quote: "Vishesh developed our e-commerce platform for motorcycle accessories with incredible attention to user experience. The site is fast, responsive, and conversion rates have increased by 40% since launch. Highly recommended!",
    name: "Karan Mehta",
    designation: "Founder, Bike Gear India",
    src: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    quote: "As a fellow developer, I can appreciate the clean code and scalable architecture Vishesh brings to every project. His expertise in React and PHP is top-notch. A true professional who delivers on time, every time.",
    name: "Neha Singh",
    designation: "Tech Lead, Innovate Labs",
    src: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <AnimatedSection
      id="testimonials"
      className="section-container py-20 bg-gradient-to-b from-secondary/20 to-background"
      animation="fade"
      threshold={0.1}
    >
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Client Testimonials
          </span>
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto px-4">
          What clients say about working with me on their projects
        </p>
      </div>

      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </AnimatedSection>
  );
};

export default TestimonialsSection;
