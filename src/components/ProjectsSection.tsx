
import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: ProjectProps[] = [
  {
    title: "Finanza",
    description: "A comprehensive financial management application allowing users to track expenses, manage investments, and visualize spending patterns through interactive charts and reports.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi",
    liveUrl: "#",
    featured: true
  },
  {
    title: "FoodyBite",
    description: "Flutter-based restaurant discovery app with advanced filtering, user reviews, and integrated reservation system for a seamless dining experience.",
    technologies: ["Flutter", "Firebase", "Google Maps API", "REST API"],
    image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi",
    featured: true
  },
  {
    title: "DataViz Dashboard",
    description: "Interactive data visualization platform for business analytics with customizable widgets and real-time updates.",
    technologies: ["Vue.js", "D3.js", "GraphQL", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi"
  },
  {
    title: "CloudStore",
    description: "Scalable cloud storage solution with end-to-end encryption and advanced file management capabilities.",
    technologies: ["AWS", "React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    githubUrl: "https://github.com/visheshsanghvi"
  }
];

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
  featured
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "glass-panel rounded-2xl overflow-hidden transition-all duration-500 group h-full flex flex-col bg-gradient-to-br from-background/80 to-secondary/20 border-white/10 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2",
        featured ? "col-span-1 md:col-span-2" : "col-span-1",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with overlay */}
      <div className="relative overflow-hidden h-48 md:h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6 transition-all duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="flex space-x-3 transform transition-transform duration-300 ease-out" style={{
            transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
          }}>
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary/30 transition-colors transform hover:scale-110 active:scale-95"
                aria-label={`View ${title} on GitHub`}
              >
                <Github size={18} className="text-white" />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary/30 transition-colors transform hover:scale-110 active:scale-95"
                aria-label={`View ${title} live demo`}
              >
                <ExternalLink size={18} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {featured && (
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded mb-3">
            Featured Project
          </span>
        )}
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white via-primary/90 to-primary/70 bg-clip-text text-transparent">{title}</h3>
        <p className="text-foreground/70 text-sm mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, index) => (
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
  return (
    <AnimatedSection id="projects" className="section-container bg-gradient-to-b from-background to-secondary/20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
        <span className="inline-block bg-gradient-to-r from-primary/80 via-primary to-primary/60 text-transparent bg-clip-text mb-3">
          Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
