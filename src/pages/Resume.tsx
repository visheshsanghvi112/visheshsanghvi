
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Download, Briefcase, GraduationCap, Award, Code, 
  Layers, Database, Globe, Star, Coffee, BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

const Resume: React.FC = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'modern' | 'classic'>('modern');
  
  const handlePrint = () => {
    toast({
      title: "Preparing PDF...",
      description: "Your resume is being prepared for download.",
    });
    
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Header/Navigation */}
        <header className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors mr-4">
              <ArrowLeft size={20} className="mr-2" />
              Back to Portfolio
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              className={viewMode === 'modern' ? 'bg-primary/10' : ''}
              onClick={() => setViewMode('modern')}
            >
              Modern View
            </Button>
            <Button
              variant="outline"
              className={viewMode === 'classic' ? 'bg-primary/10' : ''}
              onClick={() => setViewMode('classic')}
            >
              Classic View
            </Button>
            <Button onClick={handlePrint} className="bg-primary">
              <Download size={16} className="mr-2" />
              Download PDF
            </Button>
          </div>
        </header>
        
        {/* Resume Content */}
        <div ref={printRef} className={`resume-container bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none print:max-w-full ${viewMode === 'classic' ? 'classic-resume' : 'modern-resume'}`}>
          {viewMode === 'modern' ? (
            <div className="p-8 print:p-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-200 pb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Vishesh Sanghvi</h1>
                  <p className="text-lg text-gray-600 mt-1">Full-stack Developer</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-sm text-gray-600">visheshsanghvi112@gmail.com</p>
                  <p className="text-sm text-gray-600">+91 7977282697</p>
                  <div className="flex mt-2 justify-end gap-2">
                    <a href="https://github.com/visheshsanghvi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                      <Github size={16} />
                    </a>
                    <a href="https://linkedin.com/in/vishesh-sanghvi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Profile Summary */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <User size={18} className="mr-2 text-primary" />
                  Professional Summary
                </h2>
                <p className="text-gray-600">
                  Results-driven full-stack developer with expertise in building responsive web applications and managing databases. Passionate about creating exceptional digital experiences with attention to detail and scalability. Currently focused on database management and big data analytics with expertise in creating enterprise web solutions.
                </p>
              </div>
              
              {/* Tabbed Content */}
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="grid grid-cols-4 w-full mb-6">
                  <TabsTrigger value="experience" className="text-sm">
                    <Briefcase size={14} className="mr-1 md:mr-2" />
                    <span className="hidden md:inline">Experience</span>
                  </TabsTrigger>
                  <TabsTrigger value="education" className="text-sm">
                    <GraduationCap size={14} className="mr-1 md:mr-2" />
                    <span className="hidden md:inline">Education</span>
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="text-sm">
                    <Code size={14} className="mr-1 md:mr-2" />
                    <span className="hidden md:inline">Skills</span>
                  </TabsTrigger>
                  <TabsTrigger value="certifications" className="text-sm">
                    <Award size={14} className="mr-1 md:mr-2" />
                    <span className="hidden md:inline">Certifications</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="experience" className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-800">Professional Experience</h3>
                  
                  <div className="border-l-2 border-primary/30 pl-4 space-y-6">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-gray-900">Senior Software Developer</h4>
                        <span className="text-sm text-gray-500">Jan 2023 - Present</span>
                      </div>
                      <p className="text-sm text-gray-600">TechSolutions Inc.</p>
                      <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Led the development of a high-traffic e-commerce platform using React and Node.js</li>
                        <li>Implemented CI/CD pipelines resulting in 40% faster deployment times</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-gray-900">Frontend Developer</h4>
                        <span className="text-sm text-gray-500">May 2021 - Dec 2022</span>
                      </div>
                      <p className="text-sm text-gray-600">WebCraft Studios</p>
                      <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Developed responsive user interfaces for 12+ client projects</li>
                        <li>Optimized application performance resulting in 30% faster load times</li>
                        <li>Collaborated with designers to implement pixel-perfect UI components</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-gray-900">Junior Web Developer</h4>
                        <span className="text-sm text-gray-500">Aug 2020 - May 2021</span>
                      </div>
                      <p className="text-sm text-gray-600">Digital Innovators Ltd</p>
                      <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Built and maintained websites for small business clients</li>
                        <li>Implemented responsive designs and cross-browser compatibility</li>
                        <li>Assisted senior developers with code debugging and testing</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="education" className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-800">Education</h3>
                  
                  <div className="border-l-2 border-primary/30 pl-4 space-y-6">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-gray-900">MSc Big Data Analytics</h4>
                        <span className="text-sm text-gray-500">2022 - 2024</span>
                      </div>
                      <p className="text-sm text-gray-600">University of Modern Technology</p>
                      <p className="mt-1 text-sm text-gray-600">
                        Focused on advanced data processing techniques, machine learning algorithms, and data visualization methodologies.
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-gray-900">BSc Computer Science</h4>
                        <span className="text-sm text-gray-500">2018 - 2022</span>
                      </div>
                      <p className="text-sm text-gray-600">State University</p>
                      <p className="mt-1 text-sm text-gray-600">
                        Completed with honors. Coursework included software engineering, database systems, algorithms, and web development.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="skills" className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-800">Technical Skills</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Layers size={16} className="mr-2 text-primary" />
                        Frontend
                      </h4>
                      <div className="space-y-3">
                        <SkillBar name="React/Next.js" value={90} />
                        <SkillBar name="JavaScript/TypeScript" value={85} />
                        <SkillBar name="HTML/CSS/SCSS" value={95} />
                        <SkillBar name="Tailwind CSS" value={88} />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Code size={16} className="mr-2 text-primary" />
                        Backend
                      </h4>
                      <div className="space-y-3">
                        <SkillBar name="Node.js" value={80} />
                        <SkillBar name="Express" value={75} />
                        <SkillBar name="Python" value={70} />
                        <SkillBar name="REST API Design" value={85} />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Database size={16} className="mr-2 text-primary" />
                        Databases
                      </h4>
                      <div className="space-y-3">
                        <SkillBar name="MongoDB" value={85} />
                        <SkillBar name="PostgreSQL" value={75} />
                        <SkillBar name="Firebase" value={80} />
                        <SkillBar name="MySQL" value={78} />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Globe size={16} className="mr-2 text-primary" />
                        Other
                      </h4>
                      <div className="space-y-3">
                        <SkillBar name="Git/GitHub" value={90} />
                        <SkillBar name="Docker" value={75} />
                        <SkillBar name="AWS" value={70} />
                        <SkillBar name="CI/CD" value={68} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-3">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5">Team Collaboration</Badge>
                      <Badge variant="outline" className="bg-primary/5">Problem Solving</Badge>
                      <Badge variant="outline" className="bg-primary/5">Communication</Badge>
                      <Badge variant="outline" className="bg-primary/5">Time Management</Badge>
                      <Badge variant="outline" className="bg-primary/5">Project Planning</Badge>
                      <Badge variant="outline" className="bg-primary/5">Adaptability</Badge>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="certifications" className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-800">Certifications</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 text-primary">
                          <Award size={18} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">AWS Certified Developer</h4>
                          <p className="text-sm text-gray-600">Amazon Web Services</p>
                          <p className="text-xs text-gray-500 mt-1">Issued Jan 2023</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 text-primary">
                          <Award size={18} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">MongoDB Developer Certification</h4>
                          <p className="text-sm text-gray-600">MongoDB University</p>
                          <p className="text-xs text-gray-500 mt-1">Issued Mar 2022</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 text-primary">
                          <Award size={18} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">React Developer</h4>
                          <p className="text-sm text-gray-600">Meta</p>
                          <p className="text-xs text-gray-500 mt-1">Issued Nov 2021</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 text-primary">
                          <Award size={18} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Professional Scrum Master I</h4>
                          <p className="text-sm text-gray-600">Scrum.org</p>
                          <p className="text-xs text-gray-500 mt-1">Issued Aug 2021</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              {/* Interests */}
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <Coffee size={18} className="mr-2 text-primary" />
                  Interests
                </h2>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-primary/10 text-primary border-0 px-3 py-1">Open Source</Badge>
                  <Badge className="bg-primary/10 text-primary border-0 px-3 py-1">Web3 Technologies</Badge>
                  <Badge className="bg-primary/10 text-primary border-0 px-3 py-1">AI/ML</Badge>
                  <Badge className="bg-primary/10 text-primary border-0 px-3 py-1">Mobile Development</Badge>
                  <Badge className="bg-primary/10 text-primary border-0 px-3 py-1">UI/UX Design</Badge>
                  <Badge className="bg-primary/10 text-primary border-0 px-3 py-1">Technical Writing</Badge>
                </div>
              </div>
              
              {/* Languages */}
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <BookOpen size={18} className="mr-2 text-primary" />
                  Languages
                </h2>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <p className="font-medium text-gray-700">English</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={16} className={i <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Hindi</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={16} className={i <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Gujarati</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={16} className={i <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 print:p-6 classic-view">
              {/* Classic resume view */}
              <header className="text-center mb-8 border-b border-gray-300 pb-4">
                <h1 className="text-3xl font-bold uppercase text-gray-900 tracking-wider">Vishesh Sanghvi</h1>
                <p className="text-lg text-gray-600 mt-1">Full-stack Developer</p>
                <div className="flex justify-center mt-3 text-sm text-gray-600 space-x-4">
                  <span>visheshsanghvi112@gmail.com</span>
                  <span>|</span>
                  <span>+91 7977282697</span>
                  <span>|</span>
                  <span>github.com/visheshsanghvi</span>
                </div>
              </header>
              
              <div className="grid grid-cols-1 gap-8">
                {/* Summary */}
                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Professional Summary</h2>
                  <p className="text-gray-700">
                    Results-driven full-stack developer with expertise in building responsive web applications and managing databases. Passionate about creating exceptional digital experiences with attention to detail and scalability. Currently focused on database management and big data analytics with expertise in creating enterprise web solutions.
                  </p>
                </section>
                
                {/* Experience */}
                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Professional Experience</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-900">Senior Software Developer</h3>
                        <span className="text-gray-600">Jan 2023 - Present</span>
                      </div>
                      <p className="text-gray-700 italic mb-2">TechSolutions Inc.</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Led the development of a high-traffic e-commerce platform using React and Node.js</li>
                        <li>Implemented CI/CD pipelines resulting in 40% faster deployment times</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-900">Frontend Developer</h3>
                        <span className="text-gray-600">May 2021 - Dec 2022</span>
                      </div>
                      <p className="text-gray-700 italic mb-2">WebCraft Studios</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Developed responsive user interfaces for 12+ client projects</li>
                        <li>Optimized application performance resulting in 30% faster load times</li>
                        <li>Collaborated with designers to implement pixel-perfect UI components</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-900">Junior Web Developer</h3>
                        <span className="text-gray-600">Aug 2020 - May 2021</span>
                      </div>
                      <p className="text-gray-700 italic mb-2">Digital Innovators Ltd</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Built and maintained websites for small business clients</li>
                        <li>Implemented responsive designs and cross-browser compatibility</li>
                        <li>Assisted senior developers with code debugging and testing</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                {/* Education */}
                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Education</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-900">MSc Big Data Analytics</h3>
                        <span className="text-gray-600">2022 - 2024</span>
                      </div>
                      <p className="text-gray-700 italic mb-2">University of Modern Technology</p>
                      <p className="text-gray-700">
                        Focused on advanced data processing techniques, machine learning algorithms, and data visualization methodologies.
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-900">BSc Computer Science</h3>
                        <span className="text-gray-600">2018 - 2022</span>
                      </div>
                      <p className="text-gray-700 italic mb-2">State University</p>
                      <p className="text-gray-700">
                        Completed with honors. Coursework included software engineering, database systems, algorithms, and web development.
                      </p>
                    </div>
                  </div>
                </section>
                
                {/* Skills */}
                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Skills</h2>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-gray-800">Frontend:</p>
                      <p className="text-gray-700">React/Next.js, JavaScript/TypeScript, HTML/CSS/SCSS, Tailwind CSS</p>
                    </div>
                    
                    <div>
                      <p className="font-bold text-gray-800">Backend:</p>
                      <p className="text-gray-700">Node.js, Express, Python, REST API Design</p>
                    </div>
                    
                    <div>
                      <p className="font-bold text-gray-800">Databases:</p>
                      <p className="text-gray-700">MongoDB, PostgreSQL, Firebase, MySQL</p>
                    </div>
                    
                    <div>
                      <p className="font-bold text-gray-800">Tools & Others:</p>
                      <p className="text-gray-700">Git/GitHub, Docker, AWS, CI/CD, Agile/Scrum</p>
                    </div>
                    
                    <div>
                      <p className="font-bold text-gray-800">Soft Skills:</p>
                      <p className="text-gray-700">Team Collaboration, Problem Solving, Communication, Time Management, Project Planning</p>
                    </div>
                  </div>
                </section>
                
                {/* Certifications */}
                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Certifications</h2>
                  
                  <div className="grid grid-cols-2 gap-y-2">
                    <div>
                      <p className="font-bold text-gray-800">AWS Certified Developer</p>
                      <p className="text-sm text-gray-600">Amazon Web Services, Jan 2023</p>
                    </div>
                    
                    <div>
                      <p className="font-bold text-gray-800">MongoDB Developer Certification</p>
                      <p className="text-sm text-gray-600">MongoDB University, Mar 2022</p>
                    </div>
                    
                    <div>
                      <p className="font-bold text-gray-800">React Developer</p>
                      <p className="text-sm text-gray-600">Meta, Nov 2021</p>
                    </div>
                    
                    <div>
                      <p className="font-bold text-gray-800">Professional Scrum Master I</p>
                      <p className="text-sm text-gray-600">Scrum.org, Aug 2021</p>
                    </div>
                  </div>
                </section>
                
                {/* Languages & Interests */}
                <section className="grid grid-cols-2 gap-x-8">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Languages</h2>
                    <p className="text-gray-700">English (Native), Hindi (Native), Gujarati (Fluent)</p>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">Interests</h2>
                    <p className="text-gray-700">Open Source, Web3 Technologies, AI/ML, Mobile Development, UI/UX Design</p>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Print styles */}
      <style jsx="true">{`
        @media print {
          body * {
            visibility: hidden;
          }
          .resume-container, .resume-container * {
            visibility: visible;
          }
          .resume-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          
          /* Hide tabs when printing */
          .TabsList, button {
            display: none !important;
          }
          
          /* Show all tab content when printing */
          .TabsContent {
            display: block !important;
            visibility: visible !important;
            margin-bottom: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

// Skill Bar Component
const SkillBar: React.FC<{ name: string; value: number }> = ({ name, value }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-700">{name}</span>
        <span className="text-xs text-gray-500">{value}%</span>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  );
};

// Import missing icons
const Linkedin = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Github = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const User = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
);

export default Resume;
