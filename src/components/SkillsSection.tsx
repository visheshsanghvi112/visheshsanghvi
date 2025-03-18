
import React, { useState } from 'react';
import { Code, Database, Layout, Smartphone, Star, Wrench, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SkillProps {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'mobile' | 'tools';
  isNew?: boolean;
}

const skills: SkillProps[] = [
  // Frontend skills
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'JavaScript/TypeScript', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend' },
  { name: 'Next.js', level: 82, category: 'frontend', isNew: true },
  
  // Backend skills
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'Python', level: 70, category: 'backend' },
  { name: 'Java', level: 65, category: 'backend' },
  
  // Database skills
  { name: 'MongoDB', level: 85, category: 'database' },
  { name: 'PostgreSQL', level: 75, category: 'database' },
  { name: 'Firebase', level: 80, category: 'database', isNew: true },
  { name: 'MySQL', level: 78, category: 'database' },
  
  // Mobile skills
  { name: 'React Native', level: 75, category: 'mobile' },
  { name: 'Flutter', level: 70, category: 'mobile' },
  { name: 'Android Kotlin', level: 65, category: 'mobile', isNew: true },
  
  // Tools & others
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'AWS', level: 70, category: 'tools', isNew: true },
  { name: 'CI/CD', level: 68, category: 'tools' },
];

const SkillCard: React.FC<{ skill: SkillProps; index: number }> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-green-400";
    if (level >= 70) return "bg-blue-500";
    if (level >= 60) return "bg-blue-400";
    return "bg-primary";
  };

  return (
    <div 
      className={cn(
        "bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm p-4 rounded-lg transition-all duration-300",
        isHovered ? "scale-105 shadow-lg shadow-primary/5" : "",
        "border border-transparent",
        isHovered ? "border-primary/20" : ""
      )}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-foreground font-medium">{skill.name}</h3>
          {skill.isNew && (
            <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
              New
            </Badge>
          )}
        </div>
        <div className="flex items-center">
          <span className="text-sm font-semibold text-primary mr-1">{skill.level}%</span>
          {[...Array(Math.floor(skill.level / 20))].map((_, i) => (
            <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      <Progress 
        value={isHovered ? 100 : skill.level} 
        className={cn(
          "h-2 bg-secondary transition-all duration-700",
          isHovered ? getProgressColor(skill.level) : "bg-primary/70"
        )} 
      />
    </div>
  );
};

const SkillCategory: React.FC<{
  title: string;
  icon: React.ReactNode;
  skills: SkillProps[];
  isActive: boolean;
  onClick: () => void;
}> = ({ title, icon, skills, isActive, onClick }) => (
  <div 
    className={cn(
      "glass-panel p-6 transition-all duration-500 cursor-pointer",
      "bg-gradient-to-br border-white/10",
      isActive ? "from-background/80 to-primary/10 shadow-lg shadow-primary/5 scale-100" : "from-background/50 to-secondary/10 scale-95 opacity-90"
    )}
    onClick={onClick}
  >
    <div className="flex items-center mb-6">
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-all duration-300",
        isActive ? "bg-primary/20 text-primary" : "bg-secondary/50 text-foreground/70"
      )}>
        {icon}
      </div>
      <h3 className={cn(
        "text-xl font-bold transition-all duration-300",
        isActive 
          ? "bg-gradient-to-r from-foreground via-primary to-primary/70 bg-clip-text text-transparent" 
          : "text-foreground/90"
      )}>
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
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  
  // Filter skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const databaseSkills = skills.filter(skill => skill.category === 'database');
  const mobileSkills = skills.filter(skill => skill.category === 'mobile');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  return (
    <AnimatedSection 
      id="skills" 
      className="section-container py-20" 
      animation="slide-up"
    >
      <div className="max-w-md mx-auto mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="inline-block bg-gradient-to-r from-primary/80 via-primary to-primary/60 text-transparent bg-clip-text">
            Technical Skills
          </span>
        </h2>
        <p className="text-foreground/70">
          My technical toolkit includes expertise in these technologies that I've utilized across various projects
        </p>
      </div>

      {/* Mobile Category Selector */}
      <div className="flex overflow-x-auto pb-4 gap-2 md:hidden">
        {[
          { id: 'frontend', label: 'Frontend', icon: <Layout size={16} /> },
          { id: 'backend', label: 'Backend', icon: <Code size={16} /> },
          { id: 'database', label: 'Databases', icon: <Database size={16} /> },
          { id: 'mobile', label: 'Mobile', icon: <Smartphone size={16} /> },
          { id: 'tools', label: 'Tools', icon: <Wrench size={16} /> }
        ].map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2 text-sm transition-all",
              activeCategory === category.id 
                ? "bg-primary text-white shadow-md"
                : "bg-secondary/50 text-foreground/70 hover:bg-secondary"
            )}
          >
            {category.icon}
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <SkillCategory 
          title="Frontend Development" 
          icon={<Layout size={20} />}
          skills={frontendSkills}
          isActive={activeCategory === 'frontend'}
          onClick={() => setActiveCategory('frontend')}
        />
        <SkillCategory 
          title="Backend Development" 
          icon={<Code size={20} />}
          skills={backendSkills}
          isActive={activeCategory === 'backend'}
          onClick={() => setActiveCategory('backend')}
        />
        <SkillCategory 
          title="Database Management" 
          icon={<Database size={20} />}
          skills={databaseSkills}
          isActive={activeCategory === 'database'}
          onClick={() => setActiveCategory('database')}
        />
        <SkillCategory 
          title="Mobile Development" 
          icon={<Smartphone size={20} />}
          skills={mobileSkills}
          isActive={activeCategory === 'mobile'}
          onClick={() => setActiveCategory('mobile')}
        />
        <SkillCategory 
          title="Tools & DevOps" 
          icon={<Wrench size={20} />}
          skills={toolsSkills}
          isActive={activeCategory === 'tools'}
          onClick={() => setActiveCategory('tools')}
        />
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
