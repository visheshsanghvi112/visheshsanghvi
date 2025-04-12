
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface EducationProps {
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
  location: string;
  details?: string;
  achievements?: string[];
}

const educations: EducationProps[] = [
  {
    institution: "University of Mumbai",
    degree: "Master's",
    field: "Big Data Analytics",
    period: "2024 - 2026",
    location: "Mumbai",
    details: "Specialization in Data Analytics & Machine Learning",
    achievements: [
      "Advanced coursework in statistical modeling",
      "Research focus on AI applications in business intelligence"
    ]
  },
  {
    institution: "KC College, HSNC University",
    degree: "BSC IT",
    field: "Information Technology",
    period: "2021 - 2024",
    grade: "A+",
    location: "Mumbai",
    details: "Coursework in Software Development, Database Management, and Network Security",
    achievements: [
      "Dean's list for academic excellence",
      "Capstone project: E-commerce platform with AI recommendations"
    ]
  }
];

const EducationSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <AnimatedSection id="education" className="section-container bg-secondary/30" animation="slide-up" threshold={0.1}>
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          <span className="chip bg-secondary/70 mb-3 backdrop-blur-sm text-foreground/90 text-xs uppercase tracking-wider px-3 py-1">
            {t('sections.education.learningJourney')}
          </span>
          <br />
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent">
            {t('sections.education.title')}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {educations.map((education, index) => (
            <div 
              key={index}
              className="glass-panel p-6 md:p-8 card-3d border border-white/10 dark:border-white/5"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shadow-inner animate-pulse-slow">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{education.institution}</h3>
                  <div className="flex items-center text-sm text-foreground/70">
                    <MapPin size={14} className="mr-1" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="pl-16">
                <div className="mb-3">
                  <h4 className="text-lg font-semibold gradient-text">{education.degree} in {education.field}</h4>
                  <div className="flex items-center text-sm text-foreground/70 mt-1">
                    <Calendar size={14} className="mr-1" />
                    <span>{education.period}</span>
                  </div>
                </div>
                
                {education.details && (
                  <p className="text-sm text-foreground/80 mb-2 mt-2 bg-secondary/30 p-3 rounded-md backdrop-blur-sm">
                    {education.details}
                  </p>
                )}
                
                {education.achievements && (
                  <div className="mt-3 space-y-2">
                    {education.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <Award size={14} className="mr-2 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground/80">{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {education.grade && (
                  <div className="inline-block px-3 py-1 mt-3 rounded-full text-xs font-medium bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                    {t('sections.education.grade')}: {education.grade}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default EducationSection;
