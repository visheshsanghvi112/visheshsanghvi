
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, GitHub, Twitter } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="section-container">
      <h2 className="section-heading">
        <span className="chip bg-secondary/70 mb-3 backdrop-blur-sm text-foreground/90 text-xs uppercase tracking-wider px-3 py-1">Get in Touch</span>
        <br />
        Contact Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        <div className="glass-panel p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
          <p className="text-foreground/80 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Email</p>
                <a href="mailto:contact@visheshsanghvi.com" className="text-foreground hover:text-primary transition-colors">
                  contact@visheshsanghvi.com
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Phone</p>
                <a href="tel:+910123456789" className="text-foreground hover:text-primary transition-colors">
                  +91 01234 56789
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Location</p>
                <p className="text-foreground">Mumbai, India</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h4 className="text-lg font-semibold mb-4">Find me on</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/visheshsanghvi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHub size={18} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
