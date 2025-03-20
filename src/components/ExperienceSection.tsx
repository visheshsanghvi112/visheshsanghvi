
import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  skills?: string[];
  isActive?: boolean;
  isRemote?: boolean;
  hasOfferLetter?: boolean;
  hasCertificate?: boolean;
  companyLogo?: string;
}

const experiences: ExperienceProps[] = [
  {
    title: "Software Developer",
    company: "Ambica Pharma | Johnlee",
    period: "May 2024 - Present",
    location: "Mumbai, Maharashtra, India",
    description: [
      "Web & Software Developer | ERP Administrator | SEO",
      "Manage and develop websites and applications utilizing WordPress, CodeIgniter, Laravel, HTML, CSS, and JavaScript",
      "Oversee and optimize ERP system ensuring seamless business operations",
      "Enhance performance and visibility of websites through SEO strategies, improving site rankings and user experience",
      "Build efficient, scalable solutions that support business growth"
    ],
    skills: ["Full-Stack Development", "Laravel", "Data Analysis"],
    isActive: true,
    hasOfferLetter: true
  },
  {
    title: "Cloud Computing",
    company: "Pinnacle Labs",
    period: "Oct 2024 - Oct 2024",
    location: "Mumbai, Maharashtra, India",
    description: [
      "Managed cloud infrastructure across platforms",
      "Deployed scalable solutions using containerization technologies",
      "Optimized resource allocation for cost-effective operations"
    ],
    skills: ["Data Analysis"],
    isRemote: true,
    hasOfferLetter: true,
    hasCertificate: true,
    companyLogo: "Pinnacle Labs logo"
  },
  {
    title: "Data Analyst",
    company: "Oasis Infobyte",
    period: "Sep 2024 - Oct 2024",
    location: "Mumbai, Maharashtra, India",
    description: [
      "Performed exploratory data analysis on large datasets",
      "Created visualization dashboards to represent insights",
      "Developed predictive models using machine learning algorithms"
    ],
    skills: ["Statistical Data Analysis"],
    isRemote: true,
    hasOfferLetter: true,
    hasCertificate: true,
    companyLogo: "Oasis Infobyte logo"
  },
  {
    title: "Data Scientist Intern",
    company: "EVOASTRA VENTURES PVT LTD",
    period: "Sep 2024 - Oct 2024",
    description: [
      "Implemented machine learning solutions for business challenges",
      "Designed and optimized database architectures",
      "Conducted A/B testing to validate new features"
    ],
    isRemote: true,
    hasOfferLetter: true,
    companyLogo: "EVOASTRA VENTURES PVT LTD logo"
  },
  {
    title: "Data Analysis Intern",
    company: "Cognifyz Technologies",
    period: "Aug 2024 - Sep 2024",
    location: "Mumbai, Maharashtra, India",
    description: [
      "Analyzed customer behavior patterns from transaction data",
      "Built statistical models to forecast market trends",
      "Automated reporting processes using Python and SQL"
    ],
    skills: ["Data Analysis", "Big Data Analytics"],
    isRemote: true,
    companyLogo: "Cognifyz Technologies logo"
  },
  {
    title: "Machine Learning Internship",
    company: "CognoRise InfoTech",
    period: "Aug 2024 - Sep 2024",
    location: "Mumbai, Maharashtra, India",
    description: [
      "Developed and implemented machine learning algorithms",
      "Analyzed complex datasets to extract valuable insights",
      "Collaborated on AI-driven solutions for business problems"
    ],
    isRemote: true,
    hasCertificate: true,
    companyLogo: "CognoRise InfoTech logo"
  },
  {
    title: "Freelance Web Developer",
    company: "Freelance",
    period: "Sep 2021 - Jul 2022",
    description: [
      "Developed custom websites for various clients",
      "Implemented responsive designs and user-friendly interfaces",
      "Managed project timelines and client relationships"
    ],
    companyLogo: "freelance logo"
  },
  {
    title: "Human Resources Manager",
    company: "Prateek Power Industry",
    period: "Nov 2020 - Jul 2021",
    location: "Udaipur, Rajasthan, India",
    description: [
      "Managed recruitment and onboarding processes",
      "Developed and implemented HR policies and procedures",
      "Handled employee relations and performance management"
    ]
  }
];

const ExperienceCard: React.FC<ExperienceProps & { index: number }> = ({
  title,
  company,
  period,
  location,
  description,
  skills,
  isActive,
  isRemote,
  hasOfferLetter,
  hasCertificate,
  index
}) => (
  <div className={cn(
    "glass-panel p-6 md:p-8 transition-all hover:shadow-lg bg-gradient-to-br from-white/90 to-secondary/30 dark:from-background/80 dark:to-secondary/20 border border-white/20 dark:border-white/10 rounded-lg",
    index % 2 === 0 ? "md:ml-8 lg:ml-16" : "md:mr-8 lg:mr-16"
  )}>
    <div className="flex flex-wrap items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <h4 className="text-lg font-medium text-primary">{company}</h4>
        
        {location && (
          <div className="flex items-center mt-1 text-foreground/70 text-sm">
            <MapPin size={14} className="mr-1" />
            <span>{location}</span>
            {isRemote && <span className="ml-1">{" · "}Remote</span>}
            {!isRemote && location.includes("Mumbai") && <span className="ml-1">{" · "}On-site</span>}
          </div>
        )}
      </div>
      <div className="flex items-center mt-2 sm:mt-0 px-3 py-1 rounded-full bg-secondary/70 text-foreground/80 text-sm">
        <Calendar size={14} className="mr-1" />
        <span>{period}</span>
      </div>
    </div>
    
    <ul className="space-y-2 text-foreground/80 mb-4">
      {description.map((item, i) => (
        <li key={i} className="flex items-start">
          <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    
    <div className="flex flex-wrap gap-2 mt-3">
      {skills && skills.map((skill, i) => (
        <span 
          key={i} 
          className="text-xs px-2 py-1 rounded-full bg-secondary/40 text-foreground/80"
        >
          {skill}
        </span>
      ))}

      {isActive && (
        <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
          Current Position
        </span>
      )}
      
      {(hasOfferLetter || hasCertificate) && (
        <div className="flex gap-2 mt-2">
          {hasOfferLetter && (
            <span className="text-xs flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 dark:text-blue-300">
              <ExternalLink size={12} />
              Offer Letter
            </span>
          )}
          {hasCertificate && (
            <span className="text-xs flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-400 dark:text-green-300">
              <ExternalLink size={12} />
              Certificate
            </span>
          )}
        </div>
      )}
    </div>
  </div>
);

const ExperienceSection: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="section-container py-20 md:py-24">
      <h2 className="section-heading mb-16 text-center">
        <span className="chip bg-secondary/70 mb-3 backdrop-blur-sm text-foreground/90 text-xs uppercase tracking-wider px-3 py-1">Career Path</span>
        <br />
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/60 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </span>
      </h2>

      <div className="relative mt-16">
        {/* Timeline center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/20 to-border md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className={cn(
                "relative flex flex-col md:flex-row md:items-center",
                index % 2 === 0 
                  ? "md:flex-row-reverse text-left" 
                  : "text-left"
              )}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary flex items-center justify-center md:-translate-x-1/2 z-10">
                <Briefcase size={14} className="text-primary" />
              </div>

              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-6 lg:px-12">
                <ExperienceCard {...experience} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
