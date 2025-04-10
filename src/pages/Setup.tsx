
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AnimatedSection from '../components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, Laptop, Monitor, Cpu, HardDrive, Speaker, Keyboard, 
  Mouse, Headphones, Smartphone, Coffee, Palette, Globe, 
  Code, CircuitBoard, Gamepad, BookOpen 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const SetupItem = ({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  category 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  link?: string,
  category: string 
}) => {
  return (
    <Card className="setup-item group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          
          <div className="flex-grow">
            <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-foreground/70 text-sm">{description}</p>
            
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-primary inline-flex items-center mt-2 hover:underline"
              >
                View Details
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            )}
            
            <div className="mt-3">
              <span className="text-xs bg-secondary/30 px-2 py-1 rounded text-foreground/60">
                {category}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SetupSection = ({ title, subtitle, items }: { title: string, subtitle: string, items: any[] }) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-foreground/70 mb-8">{subtitle}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <SetupItem 
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            link={item.link}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

const Setup = () => {
  const navigate = useNavigate();
  
  // Setup data
  const hardwareItems = [
    {
      icon: Laptop,
      title: "MacBook Pro 16\" (2023)",
      description: "M2 Max, 32GB RAM, 1TB SSD. My main development machine for coding and design work.",
      link: "https://www.apple.com/macbook-pro/",
      category: "Primary Device"
    },
    {
      icon: Monitor,
      title: "Dell Ultrasharp U3219Q",
      description: "32\" 4K monitor for extra screen real estate. Perfect for coding with multiple windows open.",
      link: "https://www.dell.com/en-us/shop/dell-ultrasharp-32-4k-usb-c-monitor-u3219q/apd/210-aqzz/monitors-monitor-accessories",
      category: "Display"
    },
    {
      icon: Laptop,
      title: "Custom Windows PC",
      description: "AMD Ryzen 9 5900X, 64GB RAM, RTX 3080, 2TB NVMe. For gaming and Windows-specific development.",
      link: null,
      category: "Secondary Device"
    },
    {
      icon: Cpu,
      title: "Raspberry Pi 4",
      description: "8GB model running as a home server for testing and hosting personal projects.",
      link: "https://www.raspberrypi.org/products/raspberry-pi-4-model-b/",
      category: "Server"
    },
    {
      icon: HardDrive,
      title: "Synology DS920+",
      description: "NAS with 4x 4TB drives in RAID for backup and media storage.",
      link: "https://www.synology.com/en-us/products/DS920+",
      category: "Storage"
    },
    {
      icon: Speaker,
      title: "Audioengine A2+",
      description: "Compact powered speakers with excellent sound quality for my desk setup.",
      link: "https://audioengineusa.com/shop/wirelessspeakers/a2-wireless-computer-speakers/",
      category: "Audio"
    },
    {
      icon: Keyboard,
      title: "Keychron K3",
      description: "Low-profile mechanical keyboard with Gateron Brown switches. Compact and efficient.",
      link: "https://www.keychron.com/products/keychron-k3-wireless-mechanical-keyboard",
      category: "Input"
    },
    {
      icon: Mouse,
      title: "Logitech MX Master 3",
      description: "Ergonomic mouse with customizable buttons and gestures for maximum productivity.",
      link: "https://www.logitech.com/en-us/products/mice/mx-master-3.html",
      category: "Input"
    },
    {
      icon: Headphones,
      title: "Sony WH-1000XM4",
      description: "Noise-cancelling headphones for deep focus during coding sessions.",
      link: "https://www.sony.com/electronics/headband-headphones/wh-1000xm4",
      category: "Audio"
    },
    {
      icon: Smartphone,
      title: "iPhone 14 Pro",
      description: "My primary mobile device for testing mobile web applications and staying connected.",
      link: "https://www.apple.com/iphone-14-pro/",
      category: "Mobile"
    },
    {
      icon: CircuitBoard,
      title: "Arduino Starter Kit",
      description: "For IoT projects and hardware prototyping when I need a break from software.",
      link: "https://store.arduino.cc/usa/arduino-starter-kit",
      category: "Prototyping"
    },
    {
      icon: Gamepad,
      title: "Xbox Elite Controller Series 2",
      description: "For gaming breaks between coding sessions - all work and no play...",
      link: "https://www.xbox.com/en-US/accessories/controllers/elite-wireless-controller-series-2",
      category: "Entertainment"
    }
  ];
  
  const softwareItems = [
    {
      icon: Code,
      title: "VS Code",
      description: "My primary code editor with extensions for React, TypeScript, Python, and more.",
      link: "https://code.visualstudio.com/",
      category: "Development"
    },
    {
      icon: Palette,
      title: "Figma",
      description: "For UI/UX design, wireframing, and prototyping before implementation.",
      link: "https://www.figma.com/",
      category: "Design"
    },
    {
      icon: Globe,
      title: "Docker",
      description: "For containerizing applications and ensuring consistent development environments.",
      link: "https://www.docker.com/",
      category: "Development"
    },
    {
      icon: Coffee,
      title: "Insomnia",
      description: "REST client for API testing and development.",
      link: "https://insomnia.rest/",
      category: "Development"
    },
    {
      icon: BookOpen,
      title: "Notion",
      description: "For note-taking, documentation, and project planning.",
      link: "https://www.notion.so/",
      category: "Productivity"
    },
    {
      icon: Code,
      title: "iTerm2 + Oh My Zsh",
      description: "Custom terminal setup with aliases and scripts to speed up development.",
      link: "https://iterm2.com/",
      category: "Development"
    },
    {
      icon: Palette,
      title: "Adobe Creative Cloud",
      description: "Photoshop, Illustrator, and After Effects for more complex design tasks.",
      link: "https://www.adobe.com/creativecloud.html",
      category: "Design"
    },
    {
      icon: Code,
      title: "Jetbrains Toolbox",
      description: "PyCharm, WebStorm, and IntelliJ for specific language development.",
      link: "https://www.jetbrains.com/toolbox-app/",
      category: "Development"
    },
    {
      icon: Globe,
      title: "Postman",
      description: "For API development, testing, and documentation.",
      link: "https://www.postman.com/",
      category: "Development"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <AnimatedSection 
          className="section-container py-16 md:py-20" 
          animation="fade"
        >
          <Button 
            variant="ghost" 
            className="mb-6 group" 
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              My Development Setup
            </span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-10">
            A tour of the hardware and software tools I use for development, design, and productivity.
          </p>
        </AnimatedSection>
        
        {/* Workspace Tour */}
        <AnimatedSection className="section-container pb-10" animation="slide-up" delay={200}>
          <div className="bg-card/30 border border-border/40 rounded-2xl overflow-hidden mb-16">
            <div className="aspect-video w-full">
              <img 
                src="https://images.unsplash.com/photo-1607968565043-35a92f76b7c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="My workspace setup" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">My Workspace</h2>
              <p className="text-foreground/70">
                This is where the magic happens. I've designed my workspace to maximize productivity and comfort during those long coding sessions. Good ergonomics, proper lighting, and a distraction-free environment help me stay in the flow state.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Setup Items */}
        <AnimatedSection className="section-container pb-20" animation="fade" delay={300}>
          <Tabs defaultValue="hardware" className="mb-10">
            <TabsList className="mb-8 w-full justify-start overflow-x-auto">
              <TabsTrigger value="hardware">Hardware</TabsTrigger>
              <TabsTrigger value="software">Software</TabsTrigger>
              <TabsTrigger value="productivity">Productivity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hardware">
              <SetupSection 
                title="Hardware & Peripherals" 
                subtitle="The physical tools that power my development workflow."
                items={hardwareItems}
              />
            </TabsContent>
            
            <TabsContent value="software">
              <SetupSection 
                title="Software Tools" 
                subtitle="The applications and services that help me build better products."
                items={softwareItems}
              />
            </TabsContent>
            
            <TabsContent value="productivity">
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-2">My Productivity System</h2>
                <p className="text-foreground/70 mb-8">How I stay organized and focused throughout the day.</p>
                
                <div className="space-y-8">
                  <div className="bg-card/50 border border-border/40 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Daily Routine</h3>
                    <ol className="space-y-4">
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Morning Focus (6:00 - 9:00 AM)</h4>
                          <p className="text-foreground/70 text-sm">Deep work on the most demanding tasks while my mind is fresh. No meetings, no emails.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Communication Block (9:00 - 11:00 AM)</h4>
                          <p className="text-foreground/70 text-sm">Catch up on emails, messages, and scheduled meetings.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Lunch & Break (12:00 - 1:00 PM)</h4>
                          <p className="text-foreground/70 text-sm">Step away from the computer, eat, and take a short walk to reset.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Afternoon Work (1:00 - 5:00 PM)</h4>
                          <p className="text-foreground/70 text-sm">Mix of coding, design work, and meetings as needed.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">5</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Evening Learning (7:00 - 9:00 PM)</h4>
                          <p className="text-foreground/70 text-sm">Dedicated time for learning new technologies, reading, or working on personal projects.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="bg-card/50 border border-border/40 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Productivity Techniques</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Pomodoro Technique</h4>
                        <p className="text-foreground/70 text-sm">
                          25 minutes of focused work followed by a 5-minute break. After 4 cycles, take a longer 15-30 minute break.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Time Blocking</h4>
                        <p className="text-foreground/70 text-sm">
                          Scheduling specific blocks of time for different types of tasks to maintain focus and reduce context switching.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Weekly Review</h4>
                        <p className="text-foreground/70 text-sm">
                          Every Sunday evening, I review the past week and plan the upcoming week's priorities and goals.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Deep Work Sessions</h4>
                        <p className="text-foreground/70 text-sm">
                          2-3 hour blocks of uninterrupted focus on complex problems, with all notifications turned off.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="border-t border-border/30 pt-10 text-center">
            <h3 className="text-xl font-semibold mb-3">Have a question about my setup?</h3>
            <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
              Feel free to reach out if you have any questions about my tools or workflow. I'm always happy to share tips and recommendations.
            </p>
            <Button onClick={() => navigate('/contact')} className="px-6">
              Get in Touch
            </Button>
          </div>
        </AnimatedSection>
      </main>
      
      <footer className="py-8 border-t border-border/60 bg-gradient-to-t from-background to-background/50">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Vishesh Sanghvi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Setup;
