
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AnimatedSection from '../components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, ExternalLink, Github, Clock, Calendar, CheckCircle, 
  Layers, Code, Users, BarChart, Link2, Lightbulb, AlertTriangle 
} from 'lucide-react';

// Sample case studies data
const caseStudies = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform Revamp",
    subtitle: "Modernizing an outdated e-commerce system with React, Node.js, and GraphQL",
    client: "RetailTech Solutions",
    duration: "4 months",
    year: "2024",
    role: "Full-Stack Developer & Technical Lead",
    team: ["1 UI/UX Designer", "2 Frontend Developers", "1 Backend Developer", "1 QA Specialist"],
    technologies: ["React", "Node.js", "GraphQL", "MongoDB", "AWS", "Docker", "Redux", "Stripe"],
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    overview: "A complete overhaul of a legacy e-commerce platform serving over 50,000 monthly customers. The client needed a modern, responsive solution with improved performance, security, and user experience.",
    challenge: "The existing platform was built on outdated technology, suffered from poor performance (7+ second page loads), security vulnerabilities, and couldn't handle peak traffic during sales events. Mobile experience was particularly problematic with a 65% bounce rate.",
    solution: "I led the development of a modern, responsive e-commerce solution using React for the frontend and Node.js with GraphQL for the backend. We implemented a microservices architecture deployed on AWS using Docker containers for scalability and reliability.",
    results: [
      "Reduced page load time from 7+ seconds to under 2 seconds",
      "Increased mobile conversion rate by 45%",
      "Reduced server costs by 30% despite handling 2x the traffic",
      "Improved security with comprehensive audit and updates",
      "Added new features including personalized recommendations, real-time inventory, and enhanced search"
    ],
    metrics: [
      { label: "Performance Improvement", value: 70 },
      { label: "Mobile Conversion Rate", value: 45 },
      { label: "Cost Reduction", value: 30 },
      { label: "Traffic Handling", value: 200 },
      { label: "Customer Satisfaction", value: 85 }
    ],
    process: [
      { phase: "Discovery & Planning", duration: "2 weeks", description: "Requirements gathering, stakeholder interviews, and technical architecture planning." },
      { phase: "Design & Prototyping", duration: "3 weeks", description: "Wireframing, UI/UX design, and interactive prototyping with stakeholder feedback." },
      { phase: "Development", duration: "10 weeks", description: "Frontend and backend development, API integration, and continuous integration setup." },
      { phase: "Testing & QA", duration: "3 weeks", description: "Comprehensive testing, performance optimization, and security audit." },
      { phase: "Deployment & Launch", duration: "2 weeks", description: "Staged deployment, data migration, and production launch with monitoring." }
    ],
    testimonial: {
      quote: "Vishesh and his team transformed our outdated e-commerce platform into a modern, high-performing system that has significantly improved our customer experience and business metrics. Their technical expertise and attention to detail were exceptional.",
      author: "Sarah Johnson",
      position: "CTO, RetailTech Solutions"
    },
    liveUrl: "https://example.com/ecommerce-demo",
    githubUrl: "https://github.com/visheshsanghvi/ecommerce-platform",
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1561997968-aa846c2bf255?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "data-analytics-dashboard",
    title: "Enterprise Data Analytics Dashboard",
    subtitle: "Building a real-time analytics platform for business intelligence",
    client: "DataInsight Corp",
    duration: "6 months",
    year: "2023",
    role: "Frontend Developer & Data Visualization Specialist",
    team: ["1 Project Manager", "1 Data Scientist", "2 Backend Developers", "1 UX Designer"],
    technologies: ["React", "TypeScript", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker", "Azure"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    overview: "Development of a comprehensive data analytics dashboard for a Fortune 500 company, processing and visualizing terabytes of business data in real-time to support decision making across multiple departments.",
    challenge: "The client needed to consolidate data from 7 different internal systems, process it efficiently, and present actionable insights through an intuitive interface accessible to non-technical stakeholders.",
    solution: "I designed and implemented a modular dashboard using React and TypeScript with D3.js for advanced visualizations. We developed a scalable backend using Python with FastAPI that processed and aggregated data from various sources, implementing efficient caching strategies for optimal performance.",
    results: [
      "Consolidated data from 7 different internal systems into a single dashboard",
      "Reduced report generation time from hours to seconds",
      "Enabled real-time data visualization with updates every 30 seconds",
      "Implemented predictive analytics for inventory management, saving 15% in carrying costs",
      "Created customizable dashboards for different departments and user roles"
    ],
    metrics: [
      { label: "Report Generation Speed", value: 98 },
      { label: "Data Processing Efficiency", value: 85 },
      { label: "User Adoption Rate", value: 92 },
      { label: "Cost Savings", value: 35 },
      { label: "Decision-making Improvement", value: 75 }
    ],
    process: [
      { phase: "Requirements Analysis", duration: "3 weeks", description: "Stakeholder interviews, data source analysis, and technical requirements documentation." },
      { phase: "Architecture Design", duration: "4 weeks", description: "System architecture design, data flow planning, and technology stack selection." },
      { phase: "Frontend Development", duration: "10 weeks", description: "Dashboard UI development, visualization components, and user interface testing." },
      { phase: "Backend Integration", duration: "6 weeks", description: "API development, data processing pipeline, and system integration." },
      { phase: "Testing & Optimization", duration: "3 weeks", description: "Performance testing, optimization, and user acceptance testing." },
      { phase: "Deployment & Training", duration: "2 weeks", description: "Production deployment, documentation, and user training." }
    ],
    testimonial: {
      quote: "The analytics dashboard has transformed how we analyze data and make decisions. What used to take our team days now happens in seconds. The visualizations are intuitive and powerful, making complex data accessible to everyone.",
      author: "Michael Chen",
      position: "Director of Analytics, DataInsight Corp"
    },
    liveUrl: "https://example.com/analytics-demo",
    githubUrl: "https://github.com/visheshsanghvi/analytics-dashboard",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ]
  }
];

// Case Study Detail Page Component
const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const caseStudy = caseStudies.find(study => study.id === id);
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
          <Button onClick={() => navigate('/case-studies')}>
            View All Case Studies
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="pt-20 md:pt-24 pb-20">
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background/90">
            <img 
              src={caseStudy.coverImage} 
              alt={caseStudy.title} 
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          
          <AnimatedSection 
            className="relative h-full flex items-center section-container" 
            animation="fade"
            duration={800}
          >
            <div className="max-w-4xl mx-auto text-center">
              <Button 
                variant="ghost" 
                className="mb-6 group text-white/80 hover:text-white" 
                onClick={() => navigate('/case-studies')}
              >
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                All Case Studies
              </Button>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-white/80 mb-6">
                {caseStudy.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {caseStudy.technologies.slice(0, 5).map((tech, index) => (
                  <span key={index} className="bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
                
                {caseStudy.technologies.length > 5 && (
                  <span className="bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1 rounded-full text-sm">
                    +{caseStudy.technologies.length - 5} more
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{caseStudy.year}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{caseStudy.duration}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>Team of {caseStudy.team.length + 1}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Content Section */}
        <AnimatedSection className="section-container py-16" animation="fade" delay={200}>
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <Tabs defaultValue="overview" className="mb-12">
                <TabsList className="mb-8 w-full justify-start overflow-x-auto">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="challenge">Challenge</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="text-lg space-y-6">
                  <p>{caseStudy.overview}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {caseStudy.images.map((img, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02] duration-300">
                        <img 
                          src={img} 
                          alt={`${caseStudy.title} screenshot ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="challenge" className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-red-500/10 p-2 rounded-full">
                      <AlertTriangle size={20} className="text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                      <p className="text-foreground/80">{caseStudy.challenge}</p>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 border border-border/40 rounded-xl p-6 mt-8">
                    <h4 className="font-medium mb-4">Key Pain Points</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-red-500">•</span>
                        <span>Poor performance and slow page loads</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-red-500">•</span>
                        <span>Security vulnerabilities in the existing system</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-red-500">•</span>
                        <span>Inability to handle peak traffic periods</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-red-500">•</span>
                        <span>Poor mobile experience leading to high bounce rates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-red-500">•</span>
                        <span>Outdated technology limiting new feature development</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="solution" className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Lightbulb size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">The Solution</h3>
                      <p className="text-foreground/80">{caseStudy.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-card/50 border border-border/40 rounded-xl p-6">
                      <h4 className="font-medium mb-4 flex items-center">
                        <Layers size={18} className="mr-2 text-primary" />
                        Technical Architecture
                      </h4>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span>React frontend with responsive design</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span>Node.js backend with GraphQL API</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span>MongoDB for flexible data storage</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span>Containerized with Docker for scaling</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span>AWS deployment with auto-scaling</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-card/50 border border-border/40 rounded-xl p-6">
                      <h4 className="font-medium mb-4 flex items-center">
                        <Code size={18} className="mr-2 text-primary" />
                        Development Approach
                      </h4>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span>Agile methodology with 2-week sprints</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span>Continuous integration/deployment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span>Test-driven development approach</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span>Regular stakeholder reviews</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 text-primary">•</span>
                          <span>Progressive enhancement strategy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="results" className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-green-500/10 p-2 rounded-full">
                      <BarChart size={20} className="text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">The Results</h3>
                      <p className="text-foreground/80">The project delivered significant improvements across multiple metrics, exceeding client expectations.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 mt-8">
                    {caseStudy.metrics.map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{metric.label}</span>
                          <span className="text-primary">{metric.value}%</span>
                        </div>
                        <Progress value={metric.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-card/50 border border-border/40 rounded-xl p-6 mt-8">
                    <h4 className="font-medium mb-4">Key Improvements</h4>
                    <ul className="space-y-3">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle size={18} className="mt-1 text-green-500 shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="process" className="space-y-8">
                  <h3 className="text-xl font-semibold">Development Process</h3>
                  
                  {caseStudy.process.map((phase, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center z-10 relative">
                          <span className="font-mono text-primary font-bold">{index + 1}</span>
                        </div>
                        {index < caseStudy.process.length - 1 && (
                          <div className="absolute top-10 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-border h-full"></div>
                        )}
                      </div>
                      
                      <div className="pb-12">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-lg">{phase.phase}</h4>
                          <span className="text-sm bg-secondary/30 px-2 py-0.5 rounded text-foreground/70">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-foreground/70">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
              
              {/* Client Testimonial */}
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 relative">
                <div className="absolute -top-4 left-8 text-6xl text-primary/20">"</div>
                <blockquote className="relative z-10">
                  <p className="text-lg italic mb-4">{caseStudy.testimonial.quote}</p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {caseStudy.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{caseStudy.testimonial.author}</p>
                      <p className="text-sm text-foreground/70">{caseStudy.testimonial.position}</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-card/50 border border-border/40 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Project Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm uppercase text-foreground/50 mb-2">Client</h4>
                    <p>{caseStudy.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase text-foreground/50 mb-2">Role</h4>
                    <p>{caseStudy.role}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase text-foreground/50 mb-2">Team Composition</h4>
                    <ul className="space-y-1 text-sm">
                      <li>You (Lead Developer)</li>
                      {caseStudy.team.map((member, index) => (
                        <li key={index}>{member}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase text-foreground/50 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <span key={index} className="bg-secondary/30 px-2 py-1 rounded-md text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <Button className="w-full flex items-center gap-2" asChild>
                      <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        View Live Demo
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full flex items-center gap-2" asChild>
                      <a href={caseStudy.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
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

// Case Studies Overview Page Component
const CaseStudiesOverview = () => {
  const navigate = useNavigate();
  
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
              Case Studies
            </span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-10">
            Dive deep into my most challenging projects and learn about the problems solved, technologies used, and results achieved.
          </p>
        </AnimatedSection>
        
        {/* Case Studies Grid */}
        <AnimatedSection 
          className="section-container pb-20" 
          animation="fade"
          delay={200}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className="group relative bg-card/30 rounded-xl overflow-hidden border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-xl transform-gpu hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 group-hover:opacity-90 transition-opacity z-10"></div>
                  <img 
                    src={study.coverImage} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                    <div className="text-sm text-white/70 mb-2">
                      {study.year} • {study.duration}
                    </div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {study.title}
                    </h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-foreground/70 mb-6 line-clamp-3">
                    {study.overview}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.slice(0, 5).map((tech, i) => (
                      <span key={i} className="text-xs bg-secondary/30 px-2 py-1 rounded text-foreground/70">
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 5 && (
                      <span className="text-xs bg-secondary/30 px-2 py-1 rounded text-foreground/70">
                        +{study.technologies.length - 5}
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full group relative overflow-hidden"
                    onClick={() => navigate(`/case-studies/${study.id}`)}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      View Case Study
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-primary/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Button>
                </div>
              </div>
            ))}
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

const CaseStudies = () => {
  const { id } = useParams();
  
  if (id) {
    return <CaseStudyDetail />;
  }
  
  return <CaseStudiesOverview />;
};

export default CaseStudies;
