
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  isActive?: boolean;
}

const experiences: ExperienceProps[] = [
  {
    title: "Software Developer",
    company: "Ambica Pharma | Johnlee",
    period: "2023 - Present",
    description: [
      "Develop and maintain web applications for pharmaceutical management",
      "Administer ERP systems ensuring seamless operations",
      "Implement SEO strategies to improve online visibility",
      "Create responsive interfaces for cross-platform functionality"
    ],
    isActive: true
  },
  {
    title: "Cloud Computing Intern",
    company: "Pinnacle Labs",
    period: "2023",
    description: [
      "Managed cloud infrastructure across AWS and Azure platforms",
      "Deployed scalable solutions using containerization technologies",
      "Optimized resource allocation for cost-effective operations",
      "Collaborated on cloud security implementation strategies"
    ]
  },
  {
    title: "Data Analysis Intern",
    company: "Oasis Infobyte",
    period: "2023",
    description: [
      "Performed exploratory data analysis on large datasets",
      "Created visualization dashboards to represent insights",
      "Developed predictive models using machine learning algorithms",
      "Collaborated with cross-functional teams to implement data-driven solutions"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Cognifyz Technologies",
    period: "2022",
    description: [
      "Analyzed customer behavior patterns from transaction data",
      "Built statistical models to forecast market trends",
      "Automated reporting processes using Python and SQL",
      "Provided data-driven recommendations to improve business operations"
    ]
  },
  {
    title: "Data Scientist",
    company: "EVOASTRA Ventures",
    period: "2022",
    description: [
      "Implemented machine learning solutions for business challenges",
      "Designed and optimized database architectures",
      "Conducted A/B testing to validate new features",
      "Developed algorithms to improve data processing efficiency"
    ]
  }
];

const ExperienceCard: React.FC<ExperienceProps & { index: number }> = ({
  title,
  company,
  period,
  description,
  isActive,
  index
}) => (
  <div className={cn(
    "glass-panel p-6 md:p-8 transition-all hover:shadow-lg",
    index % 2 === 0 ? "md:ml-8 lg:ml-16" : "md:mr-8 lg:mr-16"
  )}>
    <div className="flex flex-wrap items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <h4 className="text-lg font-medium text-primary">{company}</h4>
      </div>
      <div className="flex items-center mt-2 sm:mt-0 px-3 py-1 rounded-full bg-secondary/70 text-foreground/80 text-sm">
        <Calendar size={14} className="mr-1" />
        <span>{period}</span>
      </div>
    </div>
    <ul className="space-y-2 text-foreground/80">
      {description.map((item, i) => (
        <li key={i} className="flex items-start">
          <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
    {isActive && (
      <div className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
        Current Position
      </div>
    )}
  </div>
);

const ExperienceSection: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="section-container py-20 md:py-24">
      <h2 className="section-heading">
        <span className="chip bg-secondary/70 mb-3 backdrop-blur-sm text-foreground/90 text-xs uppercase tracking-wider px-3 py-1">Career Path</span>
        <br />
        Professional Experience
      </h2>

      <div className="relative mt-16">
        {/* Timeline center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"></div>

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
