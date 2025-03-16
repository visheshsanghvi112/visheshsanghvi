
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface CertificationProps {
  title: string;
  organization: string;
  date: string;
  iconType: 'ibm' | 'cognifyz' | 'oasis' | 'pinnacle' | 'evoastra' | 'general';
  url?: string;
}

const certifications: CertificationProps[] = [
  {
    title: "Data Science Professional",
    organization: "IBM",
    date: "2023",
    iconType: "ibm",
    url: "#"
  },
  {
    title: "Advanced Data Analytics",
    organization: "Cognifyz Technologies",
    date: "2023",
    iconType: "cognifyz",
    url: "#"
  },
  {
    title: "Cloud Computing Essentials",
    organization: "Pinnacle Labs",
    date: "2022",
    iconType: "pinnacle",
    url: "#"
  },
  {
    title: "Machine Learning Fundamentals",
    organization: "Oasis Infobyte",
    date: "2022",
    iconType: "oasis",
    url: "#"
  },
  {
    title: "Big Data Architecture",
    organization: "EVOASTRA Ventures",
    date: "2022",
    iconType: "evoastra",
    url: "#"
  },
  {
    title: "Full Stack Web Development",
    organization: "Udemy",
    date: "2021",
    iconType: "general",
    url: "#"
  }
];

const CertificationCard: React.FC<CertificationProps> = ({
  title,
  organization,
  date,
  iconType,
  url
}) => {
  return (
    <div className="glass-panel p-6 card-hover">
      <div className="flex items-start">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Award size={24} className="text-primary" />
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-foreground/70 text-sm">{organization}</p>
          <p className="text-foreground/60 text-xs mt-1">{date}</p>
        </div>
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-2 p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label={`View ${title} certificate`}
          >
            <ExternalLink size={16} className="text-foreground/60" />
          </a>
        )}
      </div>
    </div>
  );
};

const CertificationsSection: React.FC = () => {
  return (
    <AnimatedSection id="certifications" className="section-container">
      <h2 className="section-heading">
        <span className="chip bg-secondary/70 mb-3 backdrop-blur-sm text-foreground/90 text-xs uppercase tracking-wider px-3 py-1">Achievements</span>
        <br />
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} {...certification} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default CertificationsSection;
