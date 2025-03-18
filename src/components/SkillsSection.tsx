
import React from 'react';
import { Code, Database, Layout, Smartphone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface SkillProps {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'mobile';
}

const skills: SkillProps[] = [
  // Frontend skills
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'JavaScript/TypeScript', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend' },
  { name: 'Next.js', level: 82, category: 'frontend' },
  
  // Backend skills
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'Python', level: 70, category: 'backend' },
  { name: 'Java', level: 65, category: 'backend' },
  
  // Database skills
  { name: 'MongoDB', level: 85, category: 'database' },
  { name: 'PostgreSQL', level: 75, category: 'database' },
  { name: 'Firebase', level: 80, category: 'database' },
  
  // Mobile skills
  { name: 'React Native', level: 75, category: 'mobile' },
  { name: 'Flutter', level: 70, category: 'mobile' },
];

const SkillCard: React.FC<{ skill: SkillProps; index: number }> = ({ skill, index }) => {
  return (
    <div 
      className="bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm p-4 rounded-lg"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-foreground font-medium">{skill.name}</h3>
        <span className="text-sm font-semibold text-primary">{skill.level}%</span>
      </div>
      <Progress value={skill.level} className="h-2 bg-secondary" />
    </div>
  );
};

const SkillCategory: React.FC<{
  title: string;
  icon: React.ReactNode;
  skills: SkillProps[];
}> = ({ title, icon, skills }) => (
  <div className="glass-panel p-6 bg-gradient-to-br from-background/80 to-secondary/20 border-white/10">
    <div className="flex items-center mb-6">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
        {icon}
      </div>
      <h3 className="text-xl font-bold bg-gradient-to-r from-foreground via-primary/90 to-primary/70 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
  // Filter skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const databaseSkills = skills.filter(skill => skill.category === 'database');
  const mobileSkills = skills.filter(skill => skill.category === 'mobile');

  return (
    <AnimatedSection 
      id="skills" 
      className="section-container" 
      animation="slide-up"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
        <span className="inline-block bg-gradient-to-r from-primary/80 via-primary to-primary/60 text-transparent bg-clip-text mb-3">
          Technical Skills
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <SkillCategory 
          title="Frontend Development" 
          icon={<Layout size={20} className="text-primary" />}
          skills={frontendSkills}
        />
        <SkillCategory 
          title="Backend Development" 
          icon={<Code size={20} className="text-primary" />}
          skills={backendSkills}
        />
        <SkillCategory 
          title="Database Management" 
          icon={<Database size={20} className="text-primary" />}
          skills={databaseSkills}
        />
        <SkillCategory 
          title="Mobile Development" 
          icon={<Smartphone size={20} className="text-primary" />}
          skills={mobileSkills}
        />
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
