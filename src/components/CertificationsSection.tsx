
import React, { useState } from 'react';
import { Award, ExternalLink, Search, Filter, Code, Database, Shield, Bot, BarChart2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface CertificationProps {
  title: string;
  organization: string;
  date: string;
  iconType: 'ibm' | 'cognifyz' | 'oasis' | 'pinnacle' | 'evoastra' | 'hackerrank' | 'cisco' | 'google' | 'freecodecamp' | 'isro' | 'cognitive' | 'forage' | 'iscc' | 'general';
  url?: string;
  credentialId?: string;
  skills?: string[];
  category?: 'ai' | 'data' | 'development' | 'cybersecurity' | 'design' | 'other';
}

const certifications: CertificationProps[] = [
  {
    title: "Software Engineer Intern",
    organization: "HackerRank",
    date: "2025",
    iconType: "hackerrank",
    url: "https://www.hackerrank.com/certificates/e98389e5822b",
    credentialId: "E98389E5822B",
    category: "development"
  },
  {
    title: "Software Engineer",
    organization: "HackerRank",
    date: "2025",
    iconType: "hackerrank",
    url: "https://www.hackerrank.com/certificates/ae77d729eb31",
    credentialId: "AE77D729EB31",
    skills: ["MySQL", "Project Management"],
    category: "development"
  },
  {
    title: "Accelerating Deep Learning with GPUs",
    organization: "Cognitive Class",
    date: "2025",
    iconType: "cognitive",
    credentialId: "b47f4e88f6c74c10a6bb7cebff3f531b",
    skills: ["Artificial Intelligence (AI)"],
    category: "ai" 
  },
  {
    title: "Big Data Foundations - Level 1",
    organization: "IBM",
    date: "2025",
    iconType: "ibm",
    category: "data"
  },
  {
    title: "Big Data Foundations - Level 2",
    organization: "IBM",
    date: "2025",
    iconType: "ibm",
    category: "data"
  },
  {
    title: "Enterprise Design Thinking - Team Essentials for AI",
    organization: "IBM",
    date: "2025",
    iconType: "ibm",
    category: "ai"
  },
  {
    title: "Enterprise Design Thinking Practitioner",
    organization: "IBM",
    date: "2025",
    iconType: "ibm",
    category: "design"
  },
  {
    title: "Hadoop Foundations - Level 1",
    organization: "IBM",
    date: "2025",
    iconType: "ibm",
    category: "data"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    date: "2025",
    iconType: "freecodecamp",
    credentialId: "visheshsanghvi-jaads",
    skills: ["JavaScript"],
    category: "development"
  },
  {
    title: "Machine Learning for Data Science Projects",
    organization: "IBM",
    date: "2025",
    iconType: "ibm",
    category: "ai"
  },
  {
    title: "Python",
    organization: "HackerRank",
    date: "2024",
    iconType: "hackerrank",
    credentialId: "8CADOBDED1F9",
    skills: ["Python (Programming Language)"],
    category: "development"
  },
  {
    title: "Node (Basic) Certificate",
    organization: "HackerRank",
    date: "2024",
    iconType: "hackerrank",
    credentialId: "7FA69A9CA343",
    category: "development"
  },
  {
    title: "Data Analysis with Python",
    organization: "freeCodeCamp",
    date: "2024",
    iconType: "freecodecamp",
    credentialId: "visheshsanghvi-dawp",
    category: "data"
  },
  {
    title: "Spark - Level 1",
    organization: "IBM",
    date: "2025",
    iconType: "ibm",
    category: "data"
  },
  {
    title: "ISC2 CC Certified in Cybersecurity",
    organization: "ISC2",
    date: "2024",
    iconType: "iscc",
    credentialId: "5b27f18e-78b4-4e21-8427-f40e9edc707e",
    skills: ["Cybersecurity"],
    category: "cybersecurity"
  },
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco",
    date: "2024",
    iconType: "cisco",
    category: "cybersecurity"
  },
  {
    title: "Ethical Hacker",
    organization: "Cisco",
    date: "2024",
    iconType: "cisco",
    category: "cybersecurity"
  },
  {
    title: "SQL",
    organization: "HackerRank",
    date: "2024",
    iconType: "hackerrank",
    skills: ["SQL"],
    category: "data"
  },
  {
    title: "Data Visualization",
    organization: "freeCodeCamp",
    date: "2024",
    iconType: "freecodecamp",
    credentialId: "visheshsanghvi-dv",
    category: "data"
  },
  {
    title: "Google Analytics",
    organization: "Google",
    date: "2024",
    iconType: "google",
    credentialId: "117670977",
    category: "data"
  },
  {
    title: "Machine Learning with Python",
    organization: "freeCodeCamp",
    date: "2024",
    iconType: "freecodecamp",
    credentialId: "visheshsanghvi-mlwp",
    category: "ai"
  },
  {
    title: "AI/ML for Geodata Analysis",
    organization: "ISRO - Indian Space Research Organization",
    date: "2024",
    iconType: "isro",
    category: "ai"
  },
  {
    title: "Introduction to Generative AI",
    organization: "Google",
    date: "2024",
    iconType: "google",
    credentialId: "8251942",
    skills: ["Artificial Intelligence (AI)"],
    category: "ai"
  },
  {
    title: "Introduction to Large Language Models",
    organization: "Google",
    date: "2024",
    iconType: "google",
    credentialId: "8251981",
    category: "ai"
  },
  {
    title: "Introduction to Responsible AI",
    organization: "Google",
    date: "2024",
    iconType: "google",
    credentialId: "8252047",
    category: "ai"
  },
  {
    title: "Data Science Professional",
    organization: "IBM",
    date: "2023",
    iconType: "ibm",
    url: "#",
    category: "data"
  },
  {
    title: "Advanced Data Analytics",
    organization: "Cognifyz Technologies",
    date: "2023",
    iconType: "cognifyz",
    url: "#",
    category: "data"
  },
  {
    title: "Cloud Computing Essentials",
    organization: "Pinnacle Labs",
    date: "2022",
    iconType: "pinnacle",
    url: "#",
    category: "other"
  },
  {
    title: "Responsive Web Design",
    organization: "freeCodeCamp",
    date: "2024",
    iconType: "freecodecamp",
    credentialId: "3F9pT7xRq2N1sL",
    skills: ["Web Development"],
    category: "development"
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'ai':
      return <Bot size={16} className="mr-1 text-blue-500" />;
    case 'data':
      return <Database size={16} className="mr-1 text-green-500" />;
    case 'development':
      return <Code size={16} className="mr-1 text-purple-500" />;
    case 'cybersecurity':
      return <Shield size={16} className="mr-1 text-red-500" />;
    case 'design':
      return <BarChart2 size={16} className="mr-1 text-yellow-500" />;
    default:
      return <Award size={16} className="mr-1 text-gray-500" />;
  }
};

const CertificationCard: React.FC<CertificationProps> = ({
  title,
  organization,
  date,
  iconType,
  url,
  credentialId,
  skills,
  category
}) => {
  return (
    <div className="glass-panel p-6 bg-gradient-to-br from-white/90 to-secondary/30 dark:from-background/80 dark:to-secondary/20 card-hover">
      <div className="flex items-start">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Award size={24} className="text-primary" />
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-foreground/70 text-sm">{organization}</p>
          <p className="text-foreground/60 text-xs mt-1">{date}</p>
          
          {/* Credential ID if available */}
          {credentialId && (
            <p className="text-xs text-foreground/50 mt-1">ID: {credentialId}</p>
          )}
          
          {/* Skills tags */}
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {skills.map((skill, i) => (
                <span 
                  key={i}
                  className="text-xs px-2 py-0.5 rounded-full bg-secondary/40 text-foreground/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          
          {/* Category badge */}
          {category && (
            <div className="mt-2 flex items-center">
              <span className="text-xs flex items-center text-foreground/60">
                {getCategoryIcon(category)}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </div>
          )}
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
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredCertifications = certifications
    .filter(cert => {
      const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            cert.organization.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = activeFilter === "all" || cert.category === activeFilter;
      
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      // Sort by date (assuming the latest date is the largest)
      return parseInt(b.date) - parseInt(a.date);
    });

  return (
    <AnimatedSection id="certifications" className="section-container py-20">
      <h2 className="section-heading">
        <span className="chip bg-secondary/70 mb-3 backdrop-blur-sm text-foreground/90 text-xs uppercase tracking-wider px-3 py-1">Achievements</span>
        <br />
        Certifications
      </h2>

      <div className="max-w-3xl mx-auto mb-8 mt-12">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Search input */}
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} className="text-foreground/50" />
            </div>
            <input 
              type="text" 
              placeholder="Search certifications..." 
              className="pl-10 w-full p-2.5 bg-white/50 dark:bg-background/50 border border-border rounded-lg focus:ring-primary focus:border-primary"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          {/* Filter dropdown */}
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Filter size={16} className="text-foreground/50" />
            </div>
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="pl-10 w-full p-2.5 bg-white/50 dark:bg-background/50 border border-border rounded-lg focus:ring-primary focus:border-primary appearance-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="ai">AI & Machine Learning</option>
              <option value="data">Data Analytics</option>
              <option value="development">Development</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="design">Design</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredCertifications.map((certification, index) => (
          <CertificationCard key={index} {...certification} />
        ))}
      </div>
      
      {filteredCertifications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/70">No certifications found matching your search criteria.</p>
          <button 
            onClick={() => {
              setSearchTerm("");
              setActiveFilter("all");
            }}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </AnimatedSection>
  );
};

export default CertificationsSection;
