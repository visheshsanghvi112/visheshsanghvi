
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { analytics } from '@/utils/analytics';
import LoadingSpinner from './LoadingSpinner';

// Define form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize form with react-hook-form and zod validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Track form submission attempt
      analytics.trackEvent('contact_form_submit_attempt', {
        subject: values.subject,
        message_length: values.message.length
      });

      // Insert the form data into Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message
        } as any);
      
      if (error) {
        throw error;
      }

      // Track successful submission
      analytics.trackEvent('contact_form_submit_success');

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default"
      });

      // Reset the form and show success state
      form.reset();
      setIsSubmitted(true);
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      
      // Track error
      analytics.trackError(error as Error, 'contact_form_submit');
      
      // Show error message
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'visheshsanghvi112@gmail.com',
      href: 'mailto:visheshsanghvi112@gmail.com',
      action: () => analytics.trackEvent('contact_email_click')
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7977282697',
      href: 'tel:+917977282697',
      action: () => analytics.trackEvent('contact_phone_click')
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: '#',
      action: () => analytics.trackEvent('contact_location_click')
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vishesh-sanghvi/',
      label: 'LinkedIn Profile',
      action: () => analytics.trackEvent('social_linkedin_click', { source: 'contact_section' })
    },
    {
      icon: Github,
      href: 'https://github.com/visheshsanghvi',
      label: 'GitHub Profile',
      action: () => analytics.trackEvent('social_github_click', { source: 'contact_section' })
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/',
      label: 'Twitter Profile',
      action: () => analytics.trackEvent('social_twitter_click', { source: 'contact_section' })
    }
  ];

  return (
    <AnimatedSection id="contact" className="section-container" animation="slide-up">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
        <span className="inline-block bg-gradient-to-r from-primary/80 via-primary to-primary/60 text-transparent bg-clip-text mb-3">
          Contact Me
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        {/* Contact Information */}
        <div className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-secondary/50 via-secondary/30 to-background/80 border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Let's Connect
          </h3>
          <p className="text-foreground/80 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="space-y-6">
            {contactInfo.map(({ icon: Icon, label, value, href, action }) => (
              <div key={label} className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">{label}</p>
                  {href.startsWith('#') ? (
                    <span className="text-foreground">{value}</span>
                  ) : (
                    <a 
                      href={href} 
                      className="text-foreground hover:text-primary transition-colors"
                      onClick={action}
                    >
                      {value}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h4 className="text-lg font-semibold mb-4">Find me on</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label, action }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors transform hover:scale-110"
                  aria-label={label}
                  onClick={action}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-background/90 via-background/70 to-secondary/30 border-white/10 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Send a Message
          </h3>
          
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Message Sent!</h4>
              <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Subject"
                          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary resize-none transition-colors"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
