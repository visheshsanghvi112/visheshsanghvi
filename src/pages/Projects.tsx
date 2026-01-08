import React, { useState, useEffect } from 'react';
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
  Users,
  Zap,
  Waves,
  DollarSign,
  Brain,
  Shield,
  Utensils,
  FileUp,
  Dumbbell,
  Cpu,
  MessageSquare,
  Coffee,
  Camera,
  RefreshCw,
  Loader2,
  Search,
  X
} from 'lucide-react';
import MainLayout from '@/components/MainLayout';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import AnimatedSection from '@/components/AnimatedSection';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { getCachedDeployedProjects, ProcessedProject } from '@/services/githubService';
import { useToast } from '@/hooks/use-toast';


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
  video?: string;
}

const projects: ProjectProps[] = [
  {
    title: "NeuroScope MRI Analysis",
    description: "Deep Learning-Based Multimodal MRI Analysis for Early Detection of Neurological Diseases. A live implementation demo of my research using advanced AI models.",
    technologies: ["Deep Learning", "Python", "Medical Imaging", "TensorFlow"],
    image: "/vishesh-ai-project.png",
    video: "/research-areas.mp4",
    liveUrl: "https://neuroscope-mri.vercel.app/",
    icon: <Brain size={18} />,
    featured: true,
    category: "AI"
  },
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
    title: "Baker & Davis",
    description: "A modern landing page for Baker & Davis, a pharmacy company. Features elegant design, service showcases, and customer testimonials.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/baker-davis-ui.png",
    liveUrl: "https://bakerdavis.vercel.app",
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
    featured: false,
    category: "AI"
  },
  {
    title: "Chess by VS",
    description: "An interactive chess game platform with AI opponents and multiplayer functionality. Features modern UI design and strategic gameplay mechanics.",
    technologies: ["React", "JavaScript", "CSS3", "Chess.js"],
    image: "https://images.unsplash.com/photo-1564719593635-fb2a4a4d0b69?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/p-914120",
    liveUrl: "https://chess-by-vs.vercel.app",
    icon: <Users size={18} />,
    category: "Games"
  },
  {
    title: "Future Chess",
    description: "A futuristic chess game with dark theme and modern aesthetics. Combines traditional chess gameplay with cutting-edge visual design and AI opponents.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1609187802105-c3ad85b88b27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/sanghvi-chess-masterpiece-39",
    liveUrl: "https://future-chess.vercel.app",
    icon: <Zap size={18} />,
    category: "Games"
  },
  {
    title: "Billifyy",
    description: "A modern billing and invoice management system with dark futuristic theme. Streamlines billing processes for businesses with automated calculations and professional templates.",
    technologies: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/t-618158",
    liveUrl: "https://billifyy.vercel.app",
    icon: <FileText size={18} />,
    category: "Finance"
  },
  {
    title: "Resume AI",
    description: "An AI-powered resume builder and analyzer that helps create professional resumes with intelligent suggestions and optimization features.",
    technologies: ["React", "AI", "TypeScript", "Node.js"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/billifyy",
    liveUrl: "https://resume-ai-one-tau.vercel.app",
    icon: <Brain size={18} />,
    category: "Tools"
  },
  {
    title: "ConvrtAI",
    description: "A platform demo showcasing AI-powered conversion tools with modern UI. Features various conversion utilities and intelligent data processing capabilities.",
    technologies: ["React", "AI", "TypeScript", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/resume-insight-builder-62",
    liveUrl: "https://convrtai.vercel.app",
    icon: <Zap size={18} />,
    category: "AI"
  },
  {
    title: "Curva Nord Rebellion",
    description: "A creative web application with dark aesthetic themes and modern visual design. Features engaging user interface and interactive elements.",
    technologies: ["React", "CSS3", "JavaScript", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/convrtai",
    liveUrl: "https://curva-nord-rebellion.vercel.app",
    icon: <Camera size={18} />,
    category: "Web"
  },
  {
    title: "Form Genius",
    description: "An intelligent form builder engine with conditional logic, styling options, and element editing capabilities. Create dynamic forms with advanced features.",
    technologies: ["React", "TypeScript", "Form Builder", "CSS3"],
    image: "https://images.unsplash.com/photo-1586281380614-67417126bd62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/curva-nord-rebellion-online",
    liveUrl: "https://form-genius-theta.vercel.app",
    icon: <FileText size={18} />,
    category: "Tools"
  },
  {
    title: "The Algorithm Club",
    description: "A web platform for algorithm enthusiasts with control center features, educational content, and interactive programming challenges.",
    technologies: ["React", "TypeScript", "Algorithms", "Data Structures"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/form-genius-engine-79",
    liveUrl: "https://thealgorithmclub.vercel.app",
    icon: <Cpu size={18} />,
    category: "Education"
  },
  {
    title: "Rekhta Realms",
    description: "A cultural platform dedicated to Roman verse and poetry with detailed project documentation and improved README features.",
    technologies: ["React", "Literature", "CSS3", "JavaScript"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/algorithm-nexus-web-17",
    liveUrl: "https://rekhta-realms.vercel.app",
    icon: <BookOpen size={18} />,
    category: "Web"
  },
  {
    title: "Seaside Stay",
    description: "A hotel booking and accommodation platform with wave-themed design and modern booking features for seaside properties.",
    technologies: ["React", "Next.js", "Booking System", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/rekhta-roman-verse-22",
    liveUrl: "https://seasidestay.vercel.app",
    icon: <Waves size={18} />,
    category: "Web"
  },
  {
    title: "Bills Generator",
    description: "A comprehensive invoice and bill generation system with calculation features and professional templates for business use.",
    technologies: ["React", "JavaScript", "Invoice System", "PDF Generation"],
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/m-923127",
    liveUrl: "https://bills-generator.vercel.app",
    icon: <DollarSign size={18} />,
    category: "Finance"
  },
  {
    title: "AI Code Detection",
    description: "A code integrity scanner that implements human imperfection analysis to detect AI-generated code versus human-written code with advanced algorithms.",
    technologies: ["AI", "Code Analysis", "Machine Learning", "JavaScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/BillsGenerator-",
    liveUrl: "https://ai-code-detection.vercel.app",
    icon: <Shield size={18} />,
    category: "AI"
  },
  {
    title: "Crypto Tracker",
    description: "A cryptocurrency tracking and analysis platform with real-time price monitoring and market insights for digital assets.",
    technologies: ["React", "Crypto API", "Charts", "Real-time Data"],
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/code-integrity-scanner-03",
    liveUrl: "https://crypto-two-sepia.vercel.app",
    icon: <Bitcoin size={18} />,
    category: "Finance"
  },
  {
    title: "Meal Flow AI Planner",
    description: "An AI-powered meal planning application that creates personalized meal plans and shopping lists based on dietary preferences and restrictions.",
    technologies: ["React", "AI", "Meal Planning", "Health Tech"],
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19457f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/c-503186",
    liveUrl: "https://meal-flow-ai-planner.vercel.app",
    icon: <Utensils size={18} />,
    category: "Health"
  },
  {
    title: "PDF Merge",
    description: "A utility tool for merging PDF documents with a simple and intuitive interface. Efficiently combine multiple PDFs into a single document.",
    technologies: ["React", "PDF Processing", "File Handling", "JavaScript"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/meal-flow-ai-planner-53",
    liveUrl: "https://pdf-merge-pearl.vercel.app",
    icon: <FileUp size={18} />,
    category: "Utilities"
  },
  {
    title: "Gymkhaana",
    description: "A fitness and gym management platform called Fit Fuel Fast with dependency management and workout tracking features.",
    technologies: ["React", "Fitness Tech", "Health Tracking", "JavaScript"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/p-013807",
    liveUrl: "https://gymkhaana.vercel.app",
    icon: <Dumbbell size={18} />,
    category: "Health"
  },
  {
    title: "Cortex Second Brain",
    description: "A knowledge management system with sub-cortex organization and submission tracking for building a digital second brain.",
    technologies: ["React", "Knowledge Management", "Data Organization", "TypeScript"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/fit-fuel-fast",
    liveUrl: "https://cortexsecond-brain.vercel.app",
    icon: <Brain size={18} />,
    category: "Tools"
  },
  {
    title: "Agent Haven Cloud",
    description: "A cloud-based agent management platform with module data export capabilities and PDF generation features for business operations.",
    technologies: ["React", "Cloud Platform", "Data Export", "TypeScript"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/c-666698",
    liveUrl: "https://agent-haven-cloud.vercel.app",
    icon: <Users size={18} />,
    category: "Web"
  },
  {
    title: "Interview Prep",
    description: "A comprehensive interview preparation platform called Data Interview Nexus with practice questions and preparation materials.",
    technologies: ["React", "Education Tech", "Interview Prep", "JavaScript"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/a-609842",
    liveUrl: "https://interviewprep-red.vercel.app",
    icon: <MessageSquare size={18} />,
    category: "Education"
  },
  {
    title: "Ring Size Tool",
    description: "Royal Ring Reign - A precise ring sizing tool with enhanced responsiveness and mobile optimization for accurate ring measurements.",
    technologies: ["React", "Precision Tools", "Mobile Responsive", "CSS3"],
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/data-interview-nexus-01",
    liveUrl: "https://ringsize.vercel.app",
    icon: <Calculator size={18} />,
    category: "Utilities"
  },
  {
    title: "Dreamscape Gallery",
    description: "An immersive art gallery website showcasing digital and traditional artwork with modern, interactive interface for art enthusiasts.",
    technologies: ["React", "Three.js", "Art Gallery", "Interactive Design"],
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/royal-ring-reign-65",
    liveUrl: "https://bini-five.vercel.app",
    icon: <Camera size={18} />,
    category: "Web"
  },
  {
    title: "Travel Planner",
    description: "A comprehensive travel planning application with itinerary management and destination recommendations for seamless trip organization.",
    technologies: ["React", "Travel Tech", "Planning Tools", "JavaScript"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/s-dreamscape-gallery",
    liveUrl: "https://travel-eta-wheat.vercel.app",
    icon: <Globe size={18} />,
    category: "Web"
  },
  {
    title: "Worlds by Vishesh",
    description: "A personal creative showcase platform featuring various digital worlds and creative projects with immersive experiences.",
    technologies: ["React", "Creative Tech", "Portfolio", "Interactive Design"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/a-522273",
    liveUrl: "https://worldsbyvishesh.vercel.app",
    icon: <Globe size={18} />,
    category: "Web"
  },
  {
    title: "Dreamscape Gallery",
    description: "An immersive art gallery website showcasing digital and traditional artwork with a modern, interactive interface for art enthusiasts.",
    technologies: ["React", "Three.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/s-dreamscape-gallery",
    icon: <PenTool size={18} />,
    category: "Web"
  },
  {
    title: "Dialogue Dhoom",
    description: "A multiplayer Bollywood dialogue game where players guess movie titles from famous dialogues. Test your Bollywood knowledge in this fun, interactive game.",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/dialogue-dhoom-mobile-game",
    liveUrl: "https://dialoguedhoom.vercel.app/",
    icon: <Presentation size={18} />,
    category: "Games"
  },
  {
    title: "Language Lab",
    description: "An innovative language learning platform that helps users learn different languages through visual and audio techniques. Features interactive lessons and pronunciation guides.",
    technologies: ["React", "Next.js", "TailwindCSS", "AI"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://languagelab-one.vercel.app/dashboard",
    icon: <Globe size={18} />,
    category: "Education"
  },
  {
    title: "Management System",
    description: "A fully functional ERP dashboard system for business management with features for inventory, sales, HR, and finance tracking in a unified interface.",
    technologies: ["React", "Node.js", "MySQL", "Chart.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/f-333644",
    icon: <Briefcase size={18} />,
    category: "Web"
  },
  {
    title: "Learn Syntax",
    description: "An interactive platform to learn coding languages with in-browser compilation. Features multiple courses, pathways, and lessons for various programming languages including Python.",
    technologies: ["React", "Next.js", "Monaco Editor", "WebAssembly"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://learnsyntax.vercel.app/",
    icon: <Code size={18} />,
    category: "Education"
  },
  {
    title: "Learn Bitcoin",
    description: "An educational platform about Bitcoin with real-time price monitoring and profit calculation tools based on Indian markets. Perfect for cryptocurrency beginners.",
    technologies: ["React", "Next.js", "Chart.js", "CoinGecko API"],
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://learnbitcoin-theta.vercel.app/",
    icon: <Bitcoin size={18} />,
    category: "Finance"
  },
  {
    title: "Stats Made Easy",
    description: "A visual educational platform that makes statistical concepts easy to understand through interactive visualizations and simplified explanations.",
    technologies: ["React", "D3.js", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://stats-made-easy.vercel.app/",
    icon: <Activity size={18} />,
    category: "Education"
  },
  {
    title: "Ketaki Digital Canvas",
    description: "A portfolio website for a creative professional showcasing their work and skills in a visually appealing layout.",
    technologies: ["React", "GSAP", "CSS3"],
    image: "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/ketaki-digital-canvas",
    icon: <PenTool size={18} />,
    category: "Web"
  },
  {
    title: "Brewery",
    description: "A fully functional e-commerce website for t-shirts and shorts with product listings, cart functionality, user accounts, and secure checkout options.",
    technologies: ["React", "Next.js", "Commerce.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "http://breweryy.vercel.app/",
    icon: <Shirt size={18} />,
    category: "E-commerce"
  },
  {
    title: "ResumeATS",
    description: "A free resume builder tool that helps create ATS-friendly resumes with customizable templates and export options.",
    technologies: ["React", "PDF.js", "Firebase Auth"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://resumeats.vercel.app/auth",
    icon: <FileText size={18} />,
    category: "Tools"
  },
  {
    title: "Readme Generator",
    description: "A free tool for generating professional README files for GitHub repositories with customizable sections and markdown support.",
    technologies: ["React", "Next.js", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://friendly-readme-creator.vercel.app/",
    icon: <FileBadge size={18} />,
    category: "Tools"
  },
  {
    title: "3D Disease Spread Simulation",
    description: "A 3D visualization tool for disease spread simulation using the SIR model, helping to understand epidemic dynamics.",
    technologies: ["Python", "Streamlit", "Plotly", "SciPy"],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://diseasefds.streamlit.app/",
    icon: <FlaskConical size={18} />,
    category: "Data"
  },
  {
    title: "Movie Recommendation System",
    description: "A PySpark-based movie recommendation system using collaborative filtering to suggest personalized movie recommendations.",
    technologies: ["PySpark", "Python", "Pandas", "Jupyter"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/Recommendation-system",
    icon: <BarChart size={18} />,
    category: "Data"
  },
  {
    title: "Prezii Downloader",
    description: "A Python tool that automates extraction of slides and text from Prezi presentations and saves them as Word documents and PDFs, no premium account needed.",
    technologies: ["Python", "Streamlit", "BeautifulSoup", "docx"],
    image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://prezii.streamlit.app/",
    icon: <Presentation size={18} />,
    category: "Tools"
  },
  {
    title: "Brewery Streetwear",
    description: "An alternative e-commerce storefront for Brewery with enhanced UI features and improved product filtering and categorization.",
    technologies: ["React", "Next.js", "Stripe", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1561052967-61fc91e48d79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi112/brewery-streetwear-storefront",
    icon: <Shirt size={18} />,
    category: "E-commerce"
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
    category: "Finance"
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
    title: "PDF To Word Converter",
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
  }
];

const PROJECTS_PER_PAGE = 9;

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      className="h-full group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-border/40 bg-card flex flex-col">
        <div className="relative h-48 overflow-hidden">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          )}

          {(project.githubUrl || project.liveUrl) && (
            <div className={cn(
              "absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end justify-end p-4 transition-opacity duration-300",
              isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}>
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
  const { toast } = useToast();
  const [githubProjects, setGithubProjects] = useState<ProjectProps[]>([]);
  const [loadingGithub, setLoadingGithub] = useState(true);
  const [githubError, setGithubError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"recent" | "name" | "featured">("featured");

  // Fetch GitHub projects on component mount
  useEffect(() => {
    const loadGithubProjects = async () => {
      try {
        setLoadingGithub(true);
        setGithubError(null);
        const deployedProjects = await getCachedDeployedProjects();

        // Convert ProcessedProject to ProjectProps
        const convertedProjects: ProjectProps[] = deployedProjects.map(project => ({
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          image: project.image,
          githubUrl: project.githubUrl,
          liveUrl: project.liveUrl,
          featured: project.featured,
          category: project.category,
        }));

        setGithubProjects(convertedProjects);
      } catch (error: any) {
        console.error('Error loading GitHub projects:', error);
        setGithubError(error.message || 'Failed to load GitHub projects');
      } finally {
        setLoadingGithub(false);
      }
    };

    loadGithubProjects();
  }, []);

  // Merge manual projects with GitHub projects (manual projects first, then GitHub)
  const allProjects = [...projects, ...githubProjects];

  // Get unique categories from all projects
  const categories = ["All", ...Array.from(new Set(allProjects.map(project => project.category)))];

  // Filter projects by category and search
  let filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  // Apply search filter
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredProjects = filteredProjects.filter(project =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query))
    );
  }

  // Apply sorting
  filteredProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "featured") {
      // Featured projects first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    } else if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    // For "recent", keep the default order (manual first, then GitHub by update date)
    return 0;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  // Get current projects
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  // Handle search change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Manual refresh function - bypasses cache
  const handleRefresh = async () => {
    // Clear cache first
    localStorage.removeItem('github_projects_cache');
    setLoadingGithub(true);
    setGithubError(null);

    try {
      // Import fetchDeployedProjects to bypass cache
      const { fetchDeployedProjects } = await import('@/services/githubService');
      const deployedProjects = await fetchDeployedProjects();

      const convertedProjects: ProjectProps[] = deployedProjects.map(project => ({
        title: project.title,
        description: project.description,
        technologies: project.technologies,
        image: project.image,
        githubUrl: project.githubUrl,
        liveUrl: project.liveUrl,
        featured: project.featured,
        category: project.category,
      }));

      setGithubProjects(convertedProjects);

      // Re-cache the fresh data
      localStorage.setItem('github_projects_cache', JSON.stringify({
        data: deployedProjects,
        timestamp: Date.now(),
      }));

      // Show success toast
      toast({
        title: "✅ Projects Refreshed!",
        description: `Successfully loaded ${deployedProjects.length} projects from GitHub`,
      });
    } catch (error: any) {
      console.error('Error refreshing GitHub projects:', error);
      setGithubError(error.message || 'Failed to refresh projects');

      // Show error toast
      toast({
        title: "❌ Refresh Failed",
        description: error.message || 'Failed to refresh projects',
        variant: "destructive",
      });
    } finally {
      setLoadingGithub(false);
    }
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
    <MainLayout>
      <AnimatedSection className="pt-8 pb-16" animation="fade">
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
              My Portfolio
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Featured Projects
            </motion.h1>
            <motion.p
              className="max-w-2xl mx-auto text-foreground/70 text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              A showcase of my work across different technologies and domains
            </motion.p>

            {/* GitHub Sync Status */}
            <motion.div
              className="flex items-center justify-center gap-4 flex-wrap relative z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-sm">
                {loadingGithub ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-foreground/60">Syncing with GitHub...</span>
                  </>
                ) : githubError ? (
                  <>
                    <span className="text-destructive">⚠ GitHub sync failed</span>
                  </>
                ) : (
                  <>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20">
                      <Github className="w-3 h-3" />
                      Synced with GitHub
                    </span>
                    <span className="text-foreground/60">
                      {allProjects.length} projects total ({githubProjects.length} auto-synced)
                    </span>
                  </>
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={loadingGithub}
                className="gap-2 relative z-20 cursor-pointer hover:bg-secondary/80 transition-colors"
              >
                <RefreshCw className={cn("w-3 h-3", loadingGithub && "animate-spin")} />
                Refresh
              </Button>
            </motion.div>
          </motion.div>



          {/* MacBook Showcase - Featured Project */}
          <div className="w-full relative z-10 overflow-hidden mb-[-200px] mt-[-100px] md:mb-[-400px] md:mt-[-200px]">
            <MacbookScroll
              title={
                <span className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white">
                  Introducing <br /> NeuroScope Research
                </span>
              }
              video="/research-areas.mp4"
              showGradient={true}
              badge={
                <motion.a
                  href="https://neuroscope-mri.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 transform -rotate-12 inline-block shadow-2xl rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: -12 }}
                >
                  <img
                    src="/vishesh-ai-project.png"
                    alt="NeuroScope Badge"
                    className="h-full w-full object-cover"
                  />
                </motion.a>
              }
            />
          </div>

          {/* Hero Parallax Showcase */}
          <div className="w-full my-16">
            <HeroParallax products={products} />
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search projects by name, description, or technology..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-3 pl-11 bg-secondary/20 border border-border/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-foreground/50"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Sort and Results Info */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="text-sm text-foreground/60 whitespace-nowrap">
                  {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "recent" | "name" | "featured")}
                  className="px-4 py-2.5 bg-secondary/20 border border-border/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground cursor-pointer"
                >
                  <option value="featured">Sort: Featured First</option>
                  <option value="name">Sort: Name (A-Z)</option>
                  <option value="recent">Sort: Most Recent</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchQuery || activeCategory !== "All") && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-foreground/60">Active filters:</span>
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                    Search: "{searchQuery}"
                    <button
                      onClick={() => setSearchQuery("")}
                      className="hover:text-primary/80"
                    >
                      ×
                    </button>
                  </span>
                )}
                {activeCategory !== "All" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                    Category: {activeCategory}
                    <button
                      onClick={() => setActiveCategory("All")}
                      className="hover:text-primary/80"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="text-sm text-foreground/60 hover:text-foreground underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          <Tabs defaultValue="All" className="w-full" onValueChange={handleCategoryChange}>
            <motion.div
              className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-hide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <TabsList className="bg-secondary/20 p-1 rounded-full flex-nowrap justify-start md:justify-center w-auto min-w-max md:min-w-0 gap-1">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
                  >
                    <TabsTrigger
                      value={category}
                      className="px-4 py-2 rounded-full text-sm whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      {category}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </motion.div>

            {categories.map(category => (
              <TabsContent key={category} value={category} className="mt-0">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <BentoGrid className="mb-8">
                    {currentProjects.map((project, index) => (
                      <BentoGridItem
                        key={index}
                        title={project.title}
                        description={
                          <div className="flex flex-col gap-2">
                            <span className="line-clamp-2 text-sm">{project.description}</span>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 3).map((t, i) => (<span key={i} className="text-[10px] px-2 py-0.5 bg-secondary/50 rounded-full">{t}</span>))}
                            </div>
                          </div>
                        }
                        header={
                          <div className="relative w-full h-full min-h-[10rem]">
                            <img src={project.image} alt={project.title} className="flex flex-1 w-full h-full rounded-xl object-cover transition duration-200 group-hover/bento:scale-105" />
                            {project.featured && <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded shadow-md z-10">Featured</span>}
                          </div>
                        }
                        icon={project.icon}
                        className=""
                        onClick={() => { const url = project.liveUrl || project.githubUrl; if (url) window.open(url, "_blank"); }}
                      />
                    ))}
                  </BentoGrid>
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination className="my-8">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>

                      {Array.from({ length: totalPages }, (_, i) => (
                        <PaginationItem key={i}>
                          <PaginationLink
                            onClick={() => paginate(i + 1)}
                            isActive={currentPage === i + 1}
                            className="cursor-pointer"
                          >
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationNext
                          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </AnimatedSection>
    </MainLayout>
  );
};

export default Projects;

export const products = [
  {
    title: "NeuroScope MRI Analysis",
    link: "https://neuroscope-mri.vercel.app/",
    thumbnail: "/vishesh-ai-project.png",
    video: "/research-areas.mp4",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

