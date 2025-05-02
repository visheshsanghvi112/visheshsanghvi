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
  FlaskConical
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
    title: "Yugrow Discount Platform",
    description: "A dynamic discount platform offering deals across various categories. Features user accounts, wishlist functionality, and a responsive product catalog for enhanced shopping experience.",
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    liveUrl: "https://yugrow.vercel.app/",
    icon: <Tag size={18} />,
    featured: true,
    category: "Web"
  },
  {
    title: "Ambica Pharma",
    description: "A professional landing page for Ambica Pharma, a pharmaceutical company. Features responsive design, product showcases, and company information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
              className="flex justify-center mb-10 overflow-x-auto pb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <TabsList className="bg-secondary/20 p-1 rounded-full flex-nowrap justify-start md:justify-center w-auto min-w-full md:min-w-0">
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
