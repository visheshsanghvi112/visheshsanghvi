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
  Camera
} from 'lucide-react';
import NavBar from '../components/NavBar';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import AnimatedSection from '@/components/AnimatedSection';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

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
    title: "Baker & Davis",
    description: "A modern landing page for Baker & Davis, a pharmacy company. Features elegant design, service showcases, and customer testimonials.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1586015555751-63c79a26fe5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
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
  // Get unique categories from projects
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter projects by category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
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
              className="max-w-2xl mx-auto text-foreground/70 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              A showcase of my work across different technologies and domains
            </motion.p>
          </motion.div>
          
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
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {currentProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
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
    </div>
  );
};

export default Projects;
