import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavBar from '../components/NavBar';
import AnimatedSection from '../components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, Laptop, Monitor, Cpu, HardDrive, Speaker, Keyboard, 
  Mouse, Headphones, Smartphone, Coffee, Palette, Globe, 
  Code, CircuitBoard, Gamepad, BookOpen, Terminal, Cloud,
  Video, Mic, PlugZap, Camera, PenTool, Server, Database,
  MessageSquare, Clock, Calendar, FileCheck, Focus, Lock
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const SetupItem = ({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  category,
  badge
}: { 
  icon: any, 
  title: string, 
  description: string, 
  link?: string,
  category: string,
  badge?: string 
}) => {
  const { t } = useTranslation();
  
  return (
    <Card className="setup-item group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors">
                {title}
              </h3>
              {badge && (
                <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-primary/20">
                  {badge}
                </Badge>
              )}
            </div>
            <p className="text-foreground/70 text-sm">{description}</p>
            
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-primary inline-flex items-center mt-2 hover:underline"
              >
                {t('sections.setup.viewDetails')}
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            )}
            
            <div className="mt-3">
              <span className="text-xs bg-secondary/30 px-2 py-1 rounded text-foreground/60">
                {t(`sections.setup.${category.toLowerCase().replace(' ', '')}`)}
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
            badge={item.badge}
          />
        ))}
      </div>
    </div>
  );
};

const Setup = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const hardwareItems = [
    {
      icon: Laptop,
      title: "MacBook Pro 16\" (2023)",
      description: "M2 Max, 32GB RAM, 1TB SSD. My main development machine for coding and design work.",
      link: "https://www.apple.com/macbook-pro/",
      category: "Primary Device",
      badge: "Daily Driver"
    },
    {
      icon: Monitor,
      title: "Dell Ultrasharp U3219Q",
      description: "32\" 4K monitor for extra screen real estate. Perfect for coding with multiple windows open.",
      link: "https://www.dell.com/en-us/shop/dell-ultrasharp-32-4k-usb-c-monitor-u3219q/apd/210-aqzz/monitors-monitor-accessories",
      category: "Display"
    },
    {
      icon: Monitor,
      title: "LG 27UL850-W",
      description: "27\" 4K secondary monitor with USB-C connectivity for a seamless dual-monitor setup.",
      link: "https://www.lg.com/us/monitors/lg-27ul850-w-4k-uhd-led-monitor",
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
      icon: Server,
      title: "Digital Ocean Droplet",
      description: "Virtual private server for hosting production applications and databases.",
      link: "https://www.digitalocean.com/",
      category: "Cloud",
      badge: "Production"
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
      category: "Input",
      badge: "Favorite"
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
      icon: Camera,
      title: "Sony ZV-1",
      description: "Compact camera for recording coding tutorials and tech reviews.",
      link: "https://www.sony.com/electronics/cameras/zv-1",
      category: "Media",
      badge: "New"
    },
    {
      icon: Mic,
      title: "Blue Yeti X",
      description: "USB microphone for recording high-quality audio for tutorials and meetings.",
      link: "https://www.bluemic.com/en-us/products/yeti-x/",
      category: "Media"
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
      category: "Development",
      badge: "Essential"
    },
    {
      icon: Terminal,
      title: "iTerm2 + Oh My Zsh",
      description: "Custom terminal setup with aliases and scripts to speed up development workflows.",
      link: "https://iterm2.com/",
      category: "Development"
    },
    {
      icon: Palette,
      title: "Figma",
      description: "For UI/UX design, wireframing, and prototyping before implementation.",
      link: "https://www.figma.com/",
      category: "Design",
      badge: "Daily Use"
    },
    {
      icon: Cloud,
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
      icon: Globe,
      title: "Postman",
      description: "For API development, testing, and documentation.",
      link: "https://www.postman.com/",
      category: "Development"
    },
    {
      icon: BookOpen,
      title: "Notion",
      description: "For note-taking, documentation, and project planning.",
      link: "https://www.notion.so/",
      category: "Productivity",
      badge: "Team Favorite"
    },
    {
      icon: Video,
      title: "OBS Studio",
      description: "For screen recording, streaming, and creating video tutorials.",
      link: "https://obsproject.com/",
      category: "Media"
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
      description: "PyCharm, WebStorm, and IntelliJ for language-specific development.",
      link: "https://www.jetbrains.com/toolbox-app/",
      category: "Development"
    },
    {
      icon: PenTool,
      title: "Excalidraw",
      description: "For creating diagrams, architecture sketches, and visual documentation.",
      link: "https://excalidraw.com/",
      category: "Design"
    },
    {
      icon: PlugZap,
      title: "Alfred",
      description: "Productivity tool for macOS that boosts my efficiency with custom workflows.",
      link: "https://www.alfredapp.com/",
      category: "Productivity",
      badge: "Can't Live Without"
    }
  ];

  const cloudServices = [
    {
      icon: Cloud,
      title: "Vercel",
      description: "For deploying frontend applications with continuous integration and preview environments.",
      link: "https://vercel.com/",
      category: "Hosting",
      badge: "Main Deployment"
    },
    {
      icon: Server,
      title: "AWS",
      description: "For more complex infrastructure requirements, including S3, Lambda, and EC2 instances.",
      link: "https://aws.amazon.com/",
      category: "Cloud"
    },
    {
      icon: Database,
      title: "MongoDB Atlas",
      description: "Managed MongoDB service for application databases with automatic scaling.",
      link: "https://www.mongodb.com/cloud/atlas",
      category: "Database"
    },
    {
      icon: Globe,
      title: "Cloudflare",
      description: "For DNS management, CDN, and security features across all my projects.",
      link: "https://www.cloudflare.com/",
      category: "Network",
      badge: "Essential"
    },
    {
      icon: Lock,
      title: "1Password",
      description: "Password manager for securing credentials across all development accounts.",
      link: "https://1password.com/",
      category: "Security"
    },
    {
      icon: MessageSquare,
      title: "Slack",
      description: "Main communication tool for team collaboration and project discussions.",
      link: "https://slack.com/",
      category: "Communication"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="pt-20 md:pt-24">
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
            {t('navigation.backToHome')}
          </Button>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="max-w-xl">
              <Badge className="mb-4" variant="outline">Developer Environment</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  {t('sections.setup.title')}
                </span>
              </h1>
              
              <p className="text-xl text-foreground/70 mb-6">
                {t('sections.setup.subtitle')}
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Design</Badge>
                <Badge variant="secondary">Development</Badge>
                <Badge variant="secondary">Productivity</Badge>
                <Badge variant="secondary">Hardware</Badge>
                <Badge variant="secondary">Software</Badge>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl opacity-70"></div>
              <Avatar className="w-32 h-32 border-4 border-primary/20 bg-card">
                <AvatarImage src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&q=80" />
                <AvatarFallback>VS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="section-container pb-10" animation="slide-up" delay={200}>
          <div className="bg-card/30 border border-border/40 rounded-2xl overflow-hidden mb-16 shadow-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 mix-blend-overlay"></div>
              <div className="aspect-video w-full">
                <img 
                  src="https://images.unsplash.com/photo-1607968565043-35a92f76b7c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="My workspace setup" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-1 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-bold">{t('sections.setup.workspace')}</h2>
              </div>
              
              <p className="text-foreground/70 leading-relaxed">
                {t('sections.setup.workspaceDescription')}
              </p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-secondary/20 rounded-lg p-4">
                  <h3 className="font-medium mb-2 text-primary">Lighting</h3>
                  <p className="text-sm text-foreground/70">Philips Hue smart lighting system with adjustable color temperature for optimal focus.</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4">
                  <h3 className="font-medium mb-2 text-primary">Desk</h3>
                  <p className="text-sm text-foreground/70">Fully Jarvis standing desk (72" x 30") with bamboo top for alternating between sitting and standing.</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4">
                  <h3 className="font-medium mb-2 text-primary">Chair</h3>
                  <p className="text-sm text-foreground/70">Herman Miller Embody chair for ergonomic support during long coding sessions.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="section-container pb-20" animation="fade" delay={300}>
          <Tabs defaultValue="hardware" className="mb-10">
            <TabsList className="mb-8 w-full justify-start overflow-x-auto p-1 bg-secondary/20 rounded-full">
              <TabsTrigger value="hardware" className="rounded-full">
                <Laptop className="mr-2 h-4 w-4" />
                {t('sections.setup.hardware')}
              </TabsTrigger>
              <TabsTrigger value="software" className="rounded-full">
                <Code className="mr-2 h-4 w-4" />
                {t('sections.setup.software')}
              </TabsTrigger>
              <TabsTrigger value="cloud" className="rounded-full">
                <Cloud className="mr-2 h-4 w-4" />
                Cloud Services
              </TabsTrigger>
              <TabsTrigger value="productivity" className="rounded-full">
                <Coffee className="mr-2 h-4 w-4" />
                {t('sections.setup.productivity')}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="hardware">
              <SetupSection 
                title={t('sections.setup.hardware')}
                subtitle={t('sections.setup.hardwareSubtitle')}
                items={hardwareItems}
              />
            </TabsContent>
            
            <TabsContent value="software">
              <SetupSection 
                title={t('sections.setup.software')}
                subtitle={t('sections.setup.softwareSubtitle')}
                items={softwareItems}
              />
            </TabsContent>
            
            <TabsContent value="cloud">
              <SetupSection 
                title="Cloud Services"
                subtitle="Online platforms and services that power my development workflow and projects."
                items={cloudServices}
              />
            </TabsContent>
            
            <TabsContent value="productivity">
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-1 bg-primary rounded-full"></div>
                  <h2 className="text-2xl font-bold">{t('sections.setup.productivityTechniques')}</h2>
                </div>
                <p className="text-foreground/70 mb-8">{t('sections.setup.productivitySubtitle')}</p>
                
                <div className="space-y-8">
                  <div className="bg-card/50 border border-border/40 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{t('sections.setup.dailyRoutine')}</h3>
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
                  
                  <div className="bg-card/50 border border-border/40 rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Productivity Tools & Techniques</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          Pomodoro Technique
                        </h4>
                        <p className="text-foreground/70 text-sm">
                          25 minutes of focused work followed by a 5-minute break. After 4 cycles, take a longer 15-30 minute break.
                        </p>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          Time Blocking
                        </h4>
                        <p className="text-foreground/70 text-sm">
                          Scheduling specific blocks of time for different types of tasks to maintain focus and reduce context switching.
                        </p>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center">
                          <FileCheck className="w-4 h-4 mr-2 text-primary" />
                          Weekly Review
                        </h4>
                        <p className="text-foreground/70 text-sm">
                          Every Sunday evening, I review the past week and plan the upcoming week's priorities and goals.
                        </p>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Focus className="w-4 h-4 mr-2 text-primary" />
                          Deep Work Sessions
                        </h4>
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
            <div className="max-w-2xl mx-auto bg-card/50 border border-border/40 rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('sections.setup.questions')}</h3>
              <p className="text-foreground/70 mb-6">
                {t('sections.setup.questionsSubtitle')}
              </p>
              <Button onClick={() => navigate('/contact')} className="px-6 bg-primary hover:bg-primary/90">
                {t('sections.setup.getInTouch')}
              </Button>
            </div>
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
