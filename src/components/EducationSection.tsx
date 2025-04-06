
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface EducationProps {
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
  location: string;
  details?: string;
}

const educations: EducationProps[] = [
  {
    institution: "University of Mumbai",
    degree: "Master's",
    field: "Big Data Analytics",
    period: "2024 - 2026",
    location: "Mumbai",
    details: "Specialization in Data Analytics & Machine Learning"
  },
  {
    institution: "KC College, HSNC University",
    degree: "BSC IT",
    field: "Information Technology",
    period: "2021 - 2024",
    grade: "A+",
    location: "Mumbai",
    details: "Coursework in Software Development, Database Management, and Network Security"
  }
];

const EducationSection: React.FC = () => {
  return (
    <AnimatedSection id="education" className="section-container bg-secondary/30">
      <h2 className="section-heading">
        <span className="chip bg-secondary/70 mb-3 backdrop-blur-sm text-foreground/90 text-xs uppercase tracking-wider px-3 py-1">Learning Journey</span>
        <br />
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {educations.map((education, index) => (
          <div 
            key={index}
            className="glass-panel p-6 md:p-8 card-hover transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{education.institution}</h3>
                <p className="text-foreground/70">{education.location}</p>
              </div>
            </div>
            
            <div className="pl-16">
              <div className="mb-3">
                <h4 className="text-lg font-semibold">{education.degree} in {education.field}</h4>
                <div className="flex items-center text-sm text-foreground/70 mt-1">
                  <Calendar size={14} className="mr-1" />
                  <span>{education.period}</span>
                </div>
              </div>
              
              {education.details && (
                <p className="text-sm text-foreground/80 mb-2">{education.details}</p>
              )}
              
              {education.grade && (
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mt-2">
                  Grade: {education.grade}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default EducationSection;
