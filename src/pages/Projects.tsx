import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Code, 
  Pill, 
  Package, 
  Building2, 
  Tag, 
  Bot, 
  BarChart, 
  FileType, 
  Smartphone, 
  PenTool, 
  Home, 
  School,
  BookOpen,
  Calculator,
  Briefcase,
  Shirt,
  FileText,
  FileBadge,
  Globe,
  Activity,
  Presentation,
  Bitcoin,
  FlaskConical,
  Gamepad2,
  DollarSign,
  Palette,
  Heart,
  Plane,
  Zap,
  Utensils,
  Dumbbell,
  Brain,
  Users,
  Shield,
  Search
} from 'lucide-react';
import NavBar from '../components/NavBar';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';
import AnimatedSection from '@/components/AnimatedSection';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  icon?: React.ReactNode;
  association?: string;
  category: string;
}

const projects: ProjectProps[] = [
  // Featured Projects
  {
    title: "Yugrow Pharmacy",
    description: "A comprehensive pharmacy management system with inventory tracking, order management, and customer relationship features. Built for seamless pharmacy operations and improved patient care.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],
    image: "/lovable-uploads/fa0fd1d7-e4b7-49db-905d-cb71530ae5b8.png",
    liveUrl: "https://yugrowpharmacy.com/",
    icon: <Pill size={18} />,
    featured: true,
    category: "Web"
  },
  {
    title: "Chess by VS",
    description: "A modern chess game implementation with AI opponents and multiplayer capabilities. Features clean UI design and intelligent gameplay mechanics.",
    technologies: ["React", "TypeScript", "Chess.js", "AI"],
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/p-914120",
    liveUrl: "https://chess-by-vs.vercel.app",
    icon: <Gamepad2 size={18} />,
    featured: true,
    category: "Games"
  },
  {
    title: "Billifyy",
    description: "A comprehensive billing and invoice management system with dark futuristic theme. Streamlines financial operations for businesses of all sizes.",
    technologies: ["React", "Next.js", "TailwindCSS", "Database"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/t-618158",
    liveUrl: "https://billifyy.vercel.app",
    icon: <DollarSign size={18} />,
    featured: true,
    category: "Finance"
  },
  {
    title: "Pharma ERP",
    description: "A specialized ERP solution designed for pharmaceutical companies to streamline operations, manage inventory, handle regulatory compliance, and optimize supply chain processes.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redux", "Material UI"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://pharmaerp.co.in/",
    icon: <Package size={18} />,
    featured: true,
    category: "Web"
  },
  {
    title: "BrainYug ERP",
    description: "An enterprise resource planning system tailored for businesses to integrate core processes including planning, purchasing, inventory, sales, marketing, finance and human resources.",
    technologies: ["Angular", "Node.js", "MongoDB", "Express", "Chart.js"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://brainyug.com/auth/login/",
    icon: <Building2 size={18} />,
    featured: true,
    category: "Web"
  },
  {
    title: "VisheshGpt",
    description: "An advanced AI-powered chatbot designed for daily needs. Leveraging state-of-the-art language models to provide intelligent responses, assistance, and information on a wide range of topics.",
    technologies: ["AI", "Python", "Streamlit", "NLP"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://visheshai2.streamlit.app/",
    icon: <Bot size={18} />,
    featured: false,
    category: "AI"
  },
  {
    title: "Bills Generator",
    description: "Professional invoice and bill generation tool with customizable templates. Perfect for freelancers and small businesses to create professional invoices.",
    technologies: ["React", "JavaScript", "PDF Generation"],
    image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/BillsGenerator-",
    liveUrl: "https://bills-generator.vercel.app",
    icon: <FileText size={18} />,
    category: "Finance"
  },
  {
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency tracking and portfolio management application. Monitor market trends and manage your crypto investments effectively.",
    technologies: ["React", "API Integration", "Chart.js"],
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/c-503186",
    liveUrl: "https://crypto-two-sepia.vercel.app",
    icon: <DollarSign size={18} />,
    category: "Finance"
  },
  {
    title: "Resume AI",
    description: "AI-powered resume builder and analyzer with intelligent insights. Helps create professional resumes with personalized recommendations and formatting.",
    technologies: ["React", "AI", "TypeScript", "Resume Analysis"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/billifyy",
    liveUrl: "https://resume-ai-one-tau.vercel.app",
    icon: <Bot size={18} />,
    category: "AI"
  },
  {
    title: "ConvrtAI",
    description: "AI-powered conversion platform with multiple format support. Smart document and media conversion tool with platform demonstration features.",
    technologies: ["React", "AI", "File Processing", "TypeScript"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/resume-insight-builder-62",
    liveUrl: "https://convrtai.vercel.app",
    icon: <Zap size={18} />,
    category: "AI"
  },
  {
    title: "AI Code Detection",
    description: "Advanced code integrity scanner that analyzes code for AI generation patterns and human imperfections. Helps maintain code authenticity and quality.",
    technologies: ["React", "AI", "Code Analysis", "TypeScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/code-integrity-scanner-03",
    liveUrl: "https://ai-code-detection.vercel.app",
    icon: <Shield size={18} />,
    category: "AI"
  },
  {
    title: "Form Genius",
    description: "Advanced form builder with conditional logic, styling options, and element editing. Create dynamic forms with powerful customization features.",
    technologies: ["React", "Form Builder", "Conditional Logic"],
    image: "https://images.unsplash.com/photo-1586264102394-c905af0746a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/form-genius-engine-79",
    liveUrl: "https://form-genius-theta.vercel.app",
    icon: <FileText size={18} />,
    category: "Tools"
  },
  {
    title: "PDF Merge",
    description: "Simple and efficient PDF merging tool. Combine multiple PDF documents into a single file with ease and maintain document quality.",
    technologies: ["React", "PDF.js", "File Processing"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/p-013807",
    liveUrl: "https://pdf-merge-pearl.vercel.app",
    icon: <FileType size={18} />,
    category: "Tools"
  },
  {
    title: "Ring Size Calculator",
    description: "Precise ring sizing tool with enhanced responsiveness and accuracy. Perfect for jewelry shopping with improved mobile experience.",
    technologies: ["React", "Measurement Tools", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/royal-ring-reign-65",
    liveUrl: "https://ringsize.vercel.app",
    icon: <Calculator size={18} />,
    category: "Tools"
  },
  {
    title: "Meal Flow AI Planner",
    description: "AI-powered meal planning and nutrition tracking application. Smart meal recommendations based on dietary preferences and health goals.",
    technologies: ["React", "AI", "Nutrition API", "Planning"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/meal-flow-ai-planner-53",
    liveUrl: "https://meal-flow-ai-planner.vercel.app",
    icon: <Utensils size={18} />,
    category: "Health"
  },
  {
    title: "Gymkhaana",
    description: "Comprehensive fitness tracking and gym management platform. Fast fuel delivery system for fitness enthusiasts with dependency optimization.",
    technologies: ["React", "Fitness Tracking", "Date Management"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/fit-fuel-fast",
    liveUrl: "https://gymkhaana.vercel.app",
    icon: <Dumbbell size={18} />,
    category: "Health"
  },
  {
    title: "Curva Nord Rebellion",
    description: "Creative online platform with engaging visual design and interactive elements. Features unique styling and user experience optimization.",
    technologies: ["React", "CSS3", "Interactive Design"],
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/curva-nord-rebellion-online",
    liveUrl: "https://curva-nord-rebellion.vercel.app",
    icon: <Palette size={18} />,
    category: "Creative"
  },
  {
    title: "Rekhta Realms",
    description: "Digital poetry and literature platform celebrating Urdu and Hindi poetry. Features detailed project documentation and cultural content.",
    technologies: ["React", "Literature Platform", "Cultural Content"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/rekhta-roman-verse-22",
    liveUrl: "https://rekhta-realms.vercel.app",
    icon: <PenTool size={18} />,
    category: "Creative"
  },
  {
    title: "Bini Gallery",
    description: "Dreamscape art gallery with immersive visual experiences. Showcases digital artworks with responsive design and smooth navigation.",
    technologies: ["React", "Gallery Platform", "Visual Arts"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/s-dreamscape-gallery",
    liveUrl: "https://bini-five.vercel.app",
    icon: <Palette size={18} />,
    category: "Creative"
  },
  {
    title: "Worlds by Vishesh",
    description: "Personal creative showcase platform featuring various digital worlds and interactive experiences. Multi-dimensional portfolio of creative works.",
    technologies: ["React", "Interactive Design", "Creative Platform"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/worldsbyvishesh",
    liveUrl: "https://worldsbyvishesh.vercel.app",
    icon: <Home size={18} />,
    category: "Creative"
  },
  {
    title: "Seaside Stay",
    description: "Coastal accommodation booking platform with wave-inspired design. Features hotel and resort booking with seaside-themed user interface.",
    technologies: ["React", "Booking System", "Wave Design"],
    image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/m-923127",
    liveUrl: "https://seasidestay.vercel.app",
    icon: <Plane size={18} />,
    category: "Travel"
  },
  {
    title: "Travel Planner",
    description: "Comprehensive travel planning and booking platform. Helps travelers organize trips, find accommodations, and plan itineraries efficiently.",
    technologies: ["React", "Travel API", "Planning Tools"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/a-522273",
    liveUrl: "https://travel-eta-wheat.vercel.app",
    icon: <Plane size={18} />,
    category: "Travel"
  },
  {
    title: "Cortex Second Brain",
    description: "Advanced knowledge management system with sub-cortex organization. Intelligent note-taking and information retrieval platform.",
    technologies: ["React", "Knowledge Management", "Data Organization"],
    image: "https://images.unsplash.com/photo-1559474309-48f9b0b24cb2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/c-666698",
    liveUrl: "https://cortexsecond-brain.vercel.app",
    icon: <Brain size={18} />,
    category: "Productivity"
  },
  {
    title: "Agent Haven Cloud",
    description: "Cloud-based agent management platform with data export capabilities. Streamlines agent operations with PDF export and module management.",
    technologies: ["React", "Cloud Platform", "Data Export"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/a-609842",
    liveUrl: "https://agent-haven-cloud.vercel.app",
    icon: <Users size={18} />,
    category: "Business"
  },
  {
    title: "Interview Prep",
    description: "Comprehensive interview preparation platform for data science and technical roles. Features practice questions and preparation materials.",
    technologies: ["React", "Interview Platform", "Data Science"],
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/data-interview-nexus-01",
    liveUrl: "https://interviewprep-red.vercel.app",
    icon: <Briefcase size={18} />,
    category: "Education"
  },
  {
    title: "Ambica Pharma",
    description: "A professional landing page for Ambica Pharma, a pharmaceutical company. Features responsive design, product showcases, and company information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/lovable-uploads/1282192f-354f-42bb-81cd-6c8cc5767875.png",
    githubUrl: "https://github.com/visheshsanghvi112/ambica-pharma-portal",
    liveUrl: "https://ambicapharma.net/",
    icon: <Pill size={18} />,
    category: "Web"
  },
  {
    title: "Stock Analysis Tool",
    description: "A comprehensive Python application that fetches historical stock data from Yahoo Finance, calculates various technical indicators, performs sentiment analysis on news articles, and provides insights on support and resistance levels.",
    technologies: ["Python", "Data Analysis", "Plotly", "NLP"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/Analysis-tool",
    icon: <BarChart size={18} />,
    category: "Data"
  },
  {
    title: "FoodyBite 🍔",
    description: "A vibrant Flutter-based restaurant app UI inspired by designs from Uplabs. Features beautifully crafted screens that showcase the potential of Flutter in creating engaging user interfaces.",
    technologies: ["Flutter", "Firebase", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/FoodApp_flutter",
    icon: <Smartphone size={18} />,
    category: "Mobile"
  }
];

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-border/40 bg-card flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
          {(project.githubUrl || project.liveUrl) && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-2">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="icon" variant="ghost" className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                      <Github size={18} />
                    </Button>
                  </motion.a>
                )}
                
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="icon" variant="ghost" className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                      <ExternalLink size={18} />
                    </Button>
                  </motion.a>
                )}
              </div>
            </div>
          )}
        </div>
        
        <CardHeader className="p-4">
          <div className="flex items-center gap-2">
            {project.icon && <span className="text-primary">{project.icon}</span>}
            <h3 className="text-xl font-bold bg-gradient-to-r from-foreground via-primary/90 to-primary/70 bg-clip-text text-transparent">
              {project.title}
            </h3>
          </div>
          
          {project.featured && (
            <div className="mt-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded">
                Featured Project
              </span>
            </div>
          )}
          
          {project.association && (
            <div className="mt-1">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary/50 text-foreground/80 rounded">
                {project.association}
              </span>
            </div>
          )}
        </CardHeader>
        
        <CardContent className="p-4 pt-0 flex-grow">
          <p className="text-foreground/70 text-sm">{project.description}</p>
        </CardContent>
        
        <CardFooter className="p-4 flex flex-wrap gap-2 border-t border-border/40">
          {project.technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary/50 text-foreground/80"
              whileHover={{ scale: 1.05 }}
            >
              <Code size={12} className="mr-1" />
              {tech}
            </motion.span>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ["All", "Web", "Games", "AI", "Finance", "Tools", "Health", "Creative", "Travel", "Business", "Education", "Data", "Mobile", "Productivity"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter projects by category and search
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  
  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      
      <AnimatedSection className="pt-28 md:pt-32 pb-16" animation="fade">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 text-xs uppercase tracking-wider font-semibold bg-secondary/70 text-foreground/90 rounded-full mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Complete Portfolio
            </motion.span>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              All Projects ({projects.length})
            </motion.h1>
            <motion.p 
              className="max-w-2xl mx-auto text-foreground/70 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Explore my complete collection of projects across different technologies and domains
            </motion.p>
          </motion.div>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" size={20} />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50 border-border/40"
              />
            </div>
          </motion.div>
          
          <Tabs defaultValue="All" className="w-full" onValueChange={handleCategoryChange}>
            <motion.div 
              className="flex justify-center mb-10 overflow-x-auto pb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <TabsList className="bg-secondary/20 p-1 rounded-full flex-nowrap justify-start md:justify-center w-auto min-w-full md:min-w-0">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.05), duration: 0.4 }}
                  >
                    <TabsTrigger 
                      value={category}
                      className="px-4 py-2 rounded-full text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      {category} ({category === "All" ? projects.length : projects.filter(p => p.category === category).length})
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </motion.div>
            
            {categories.map(category => (
              <TabsContent key={category} value={category} className="mt-0">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </motion.div>
                
                {/* No results message */}
                {filteredProjects.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-foreground/70">No projects found matching your criteria.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Projects;
