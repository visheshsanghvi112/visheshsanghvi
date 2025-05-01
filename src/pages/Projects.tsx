
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, School, Smartphone, FileType, PenTool, Home, Bot, BarChart, Pill, Package, Building2, Tag } from 'lucide-react';
import NavBar from '../components/NavBar';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
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
  }
];

const ProjectCard: React.FC<{ project: ProjectProps; isFeatured: boolean }> = ({ project, isFeatured }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  // Always show action buttons on mobile
  const showActions = isMobile || isHovered;

  return (
    <motion.div 
      className={cn(
        "glass-panel h-full rounded-2xl overflow-hidden transition-all duration-500 group flex flex-col bg-gradient-to-br from-white/90 to-secondary/30 dark:from-background/80 dark:to-secondary/20 border-white/10 hover:shadow-lg hover:shadow-primary/20",
        isFeatured ? "col-span-1 md:col-span-2 lg:col-span-2" : "col-span-1"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Image container with overlay */}
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
              <motion.a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} className="text-white" />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label={`View ${project.title} live demo`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} className="text-white" />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
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
            <motion.span 
              key={index} 
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary/50 text-foreground/80"
              whileHover={{ scale: 1.05 }}
            >
              <Code size={12} className="mr-1" />
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  // Get unique categories from projects
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];
  const isMobile = useIsMobile();
  
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
      
      <main className="pt-28 md:pt-32 pb-16">
        <motion.div 
          className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.span 
              className="inline-block px-3 py-1 text-xs uppercase tracking-wider font-semibold bg-secondary/70 text-foreground/90 rounded-full mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              My Work
            </motion.span>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Projects
            </motion.h1>
            <motion.p 
              className="max-w-2xl mx-auto text-foreground/70 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Showcasing my best work across web development, mobile applications, AI, and data science.
            </motion.p>
          </div>
          
          <Tabs defaultValue="All" className="w-full">
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
              <TabsContent key={category} value={category} className="mt-0 animate-fade-in">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {(category === "All" 
                    ? projects 
                    : projects.filter(project => project.category === category)
                  ).map((project, index) => (
                    <ProjectCard 
                      key={index} 
                      project={project} 
                      isFeatured={project.featured && (category === "All" || projects.filter(p => p.category === category).length <= 3)}
                    />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
};

export default Projects;
