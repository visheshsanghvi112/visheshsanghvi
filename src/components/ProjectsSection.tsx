import React, { useState } from 'react';
import { Github, ExternalLink, Code, School, Smartphone, FileType, PenTool, Home, Bot, BarChart, Pill, Package, Building2, Tag, Gamepad2, DollarSign, Palette, Heart, Plane, FileText, Calculator, Zap, Utensils, Dumbbell, Brain, Users, Shield, Briefcase, Search } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import EnhancedProjectCard from './EnhancedProjectCard';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

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
    title: "Ambica Pharma",
    description: "A professional landing page for Ambica Pharma, a pharmaceutical company. Features responsive design, product showcases, and company information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/lovable-uploads/1282192f-354f-42bb-81cd-6c8cc5767875.png",
    githubUrl: "https://github.com/visheshsanghvi112/ambica-pharma-portal",
    liveUrl: "https://ambicapharma.net/",
    icon: <Pill size={18} />,
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
    featured: true,
    category: "AI"
  },
  {
    title: "Stock Analysis Tool",
    description: "A comprehensive Python application that fetches historical stock data from Yahoo Finance, calculates various technical indicators, performs sentiment analysis on news articles, and provides insights on support and resistance levels.",
    technologies: ["Python", "Data Analysis", "Plotly", "NLP"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/Analysis-tool",
    icon: <BarChart size={18} />,
    featured: false,
    category: "Data"
  },
  {
    title: "Finanza",
    description: "A comprehensive financial management application allowing users to track expenses, manage investments, and visualize spending patterns through interactive charts and reports.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/Finanza",
    icon: <FileType size={18} />,
    featured: false,
    category: "Web"
  },
  {
    title: "FoodyBite 🍔",
    description: "A vibrant Flutter-based restaurant app UI inspired by designs from Uplabs. Features beautifully crafted screens that showcase the potential of Flutter in creating engaging user interfaces.",
    technologies: ["Flutter", "Firebase", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/FoodApp_flutter",
    icon: <Smartphone size={18} />,
    category: "Mobile"
  },
  {
    title: "Interior Design AI",
    description: "This project utilizes AI to help users create personalized interior design concepts. With a user-friendly interface, it offers real-time design suggestions tailored to individual preferences.",
    technologies: ["AI", "Web Development", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/InteriorDesignAi",
    icon: <PenTool size={18} />,
    category: "AI"
  },
  {
    title: "My Portfolio",
    description: "A visually appealing and interactive portfolio designed to highlight my projects and accomplishments. This platform reflects my creative vision and commitment to excellence.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/portfoliovishesh",
    icon: <Home size={18} />,
    category: "Web"
  },
  {
    title: "PDF To Word-Converter",
    description: "File conversion utilities created with Python for converting between PDF and Word formats. Features include PDF to Word conversion and Word to PDF transformation with efficient file handling.",
    technologies: ["Python", "PyMuPDF", "python-docx"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/PDF-and-Word-Converter",
    icon: <FileType size={18} />,
    category: "Utilities"
  },
  {
    title: "Sports Team Management System",
    description: "A Flutter-based app aimed at modernizing sports team management. Integrated with Firebase for real-time updates and Google Sign-In API for security, it fosters community engagement and event planning.",
    technologies: ["Flutter", "Firebase", "Google Sign-In API"],
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/SportsTeamManagementFlutter",
    association: "Kishinchand Chellaram Law College",
    icon: <School size={18} />,
    category: "Mobile"
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
    title: "Future Chess",
    description: "A futuristic chess game with advanced AI logic and sleek dark theme design. Enhanced UI and improved artificial intelligence for challenging gameplay.",
    technologies: ["React", "TypeScript", "AI", "CSS3"],
    image: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/sanghvi-chess-masterpiece-39",
    liveUrl: "https://future-chess.vercel.app",
    icon: <Gamepad2 size={18} />,
    category: "Games"
  },
  {
    title: "The Algorithm Club",
    description: "An interactive platform for algorithm visualization and learning. Features animated demonstrations of data structures and algorithms with engaging UI elements.",
    technologies: ["React", "TypeScript", "Animation", "D3.js"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/algorithm-nexus-web-17",
    liveUrl: "https://thealgorithmclub.vercel.app",
    icon: <Brain size={18} />,
    category: "Education"
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
  }
];

const ProjectCard: React.FC<{ project: ProjectProps; isFeatured: boolean }> = ({ project, isFeatured }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  const showActions = isMobile || isHovered;

  return (
    <div 
      className={cn(
        "glass-panel h-full rounded-2xl overflow-hidden transition-all duration-500 group flex flex-col bg-gradient-to-br from-white/90 to-secondary/30 dark:from-background/80 dark:to-secondary/20 border-white/10 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2",
        isFeatured ? "col-span-1 md:col-span-2 lg:col-span-2" : "col-span-1"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6 transition-all duration-300",
          showActions ? "opacity-100" : "opacity-0"
        )}>
          <div className="flex space-x-3 transform transition-transform duration-300 ease-out" style={{
            transform: showActions ? 'translateY(0)' : 'translateY(20px)'
          }}>
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary/30 transition-colors transform hover:scale-110 active:scale-95"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={18} className="text-white" />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary/30 transition-colors transform hover:scale-110 active:scale-95"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink size={18} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {project.featured && (
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded mb-3">
            Featured Project
          </span>
        )}
        {project.association && (
          <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary/50 text-foreground/80 rounded mb-3 flex items-center gap-1">
            <School size={12} />
            {project.association}
          </span>
        )}
        <div className="flex items-center gap-2 mb-2">
          {project.icon && <span className="text-primary">{project.icon}</span>}
          <h3 className="text-xl font-bold bg-gradient-to-r from-foreground via-primary/90 to-primary/70 bg-clip-text text-transparent">{project.title}</h3>
        </div>
        <p className="text-foreground/70 text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary/50 text-foreground/80 transform transition-transform hover:scale-105"
            >
              <Code size={12} className="mr-1" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ["All", "Web", "Games", "AI", "Finance", "Tools", "Health", "Creative", "Travel", "Business", "Education", "Data", "Mobile", "Productivity"];
  const isMobile = useIsMobile();
  
  // Filter projects based on search query
  const filteredProjectsBySearch = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <AnimatedSection id="projects" className="section-container bg-gradient-to-b from-background to-secondary/20 py-16">
      <h2 className="section-heading mb-8">
        <span className="chip bg-secondary/70 mb-3 backdrop-blur-sm text-foreground/90 text-xs uppercase tracking-wider px-3 py-1">My Work</span>
        <br />
        Projects
      </h2>
      
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
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
      </div>
      
      <Tabs defaultValue="All" className="w-full">
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <TabsList className="bg-secondary/20 p-1 rounded-full flex-nowrap justify-start md:justify-center w-auto min-w-full md:min-w-0">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="px-4 py-2 rounded-full text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {category} ({category === "All" ? projects.length : projects.filter(p => p.category === category).length})
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-0 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {(category === "All" 
                ? filteredProjectsBySearch 
                : filteredProjectsBySearch.filter(project => project.category === category)
              ).map((project, index) => (
                <EnhancedProjectCard 
                  key={index} 
                  project={project} 
                  isFeatured={project.featured && (category === "All" || filteredProjectsBySearch.filter(p => p.category === category).length <= 3)}
                />
              ))}
            </div>
            
            {/* No results message */}
            {(category === "All" 
              ? filteredProjectsBySearch 
              : filteredProjectsBySearch.filter(project => project.category === category)
            ).length === 0 && (
              <div className="text-center py-12">
                <p className="text-foreground/70">No projects found matching your search.</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </AnimatedSection>
  );
};

export default ProjectsSection;
