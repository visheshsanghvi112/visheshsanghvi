
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AnimatedSection from '../components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Play, RefreshCw, Copy, Download } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CodeEditor = ({ code, setCode, language }: { code: string, setCode: (code: string) => void, language: string }) => {
  return (
    <div className="relative h-[300px] md:h-[400px] bg-card rounded-md overflow-hidden">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-full bg-black/80 text-gray-300 p-4 font-mono text-sm focus:outline-none resize-none"
        spellCheck="false"
      />
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={() => {
            navigator.clipboard.writeText(code);
            toast({
              title: "Copied!",
              description: "Code copied to clipboard",
              duration: 2000,
            });
          }}
          className="p-1.5 rounded-md bg-gray-700/50 hover:bg-gray-700 text-gray-300 transition-colors"
          aria-label="Copy code"
        >
          <Copy size={14} />
        </button>
      </div>
      <div className="absolute bottom-2 left-2 text-xs text-gray-500">{language}</div>
    </div>
  );
};

const CodeOutput = ({ output }: { output: string }) => {
  return (
    <div className="bg-card p-4 rounded-md min-h-[150px] max-h-[300px] overflow-auto font-mono text-sm text-foreground/80">
      {output.split('\n').map((line, i) => (
        <div key={i} className={line.includes('Error') ? 'text-red-400' : ''}>{line}</div>
      ))}
    </div>
  );
};

// Demo examples with their initial code
const demoExamples = [
  {
    id: 'javascript-array',
    title: 'JavaScript Array Manipulations',
    language: 'javascript',
    code: `// Array operations demo
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// Map: Create a new array with all fruits in uppercase
const upperFruits = fruits.map(fruit => fruit.toUpperCase());

// Filter: Create a new array with fruits that start with 'A'
const aFruits = fruits.filter(fruit => fruit.startsWith('A'));

// Find: Find the first fruit that contains 'an'
const foundFruit = fruits.find(fruit => fruit.includes('an'));

// Reduce: Combine all fruits into a single string
const fruitString = fruits.reduce((acc, fruit, index) => {
  return acc + (index === 0 ? '' : ', ') + fruit;
}, '');

// Results
console.log('Original array:', fruits);
console.log('Uppercase fruits:', upperFruits);
console.log('Fruits starting with A:', aFruits);
console.log('First fruit containing "an":', foundFruit);
console.log('All fruits combined:', fruitString);`,
    description: 'This demo shows common array methods in JavaScript like map, filter, find, and reduce. Modify the code and run it to see the results.'
  },
  {
    id: 'react-hooks',
    title: 'React Hooks Basics',
    language: 'jsx',
    code: `// React Hooks demo
import React, { useState, useEffect } from 'react';

function Counter() {
  // useState hook for state management
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  
  // useEffect hook for side effects
  useEffect(() => {
    console.log(\`Count changed to \${count}\`);
    
    // Cleanup function
    return () => {
      console.log('Component will update or unmount');
    };
  }, [count]); // Only re-run when count changes
  
  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div className={\`counter \${theme}\`}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
}

// This is just a code example, not actual running React code
console.log('React Hooks example: useState and useEffect');
console.log('In a real React application, this would render a counter component');`,
    description: 'Learn the basics of React Hooks like useState and useEffect. This is a code example to understand the syntax and usage patterns.'
  },
  {
    id: 'fetch-api',
    title: 'Fetch API & Promises',
    language: 'javascript',
    code: `// Fetch API demo
// Note: This is a frontend API call simulation

// Simulated fetch function (since we can't make actual network requests)
function simulateFetch(url, delay = 1000) {
  console.log(\`Fetching data from \${url}...\`);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly succeed or fail to demonstrate error handling
      const random = Math.random();
      
      if (random > 0.3) { // 70% success rate
        if (url.includes('users')) {
          resolve({
            data: [
              { id: 1, name: 'John Doe', email: 'john@example.com' },
              { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
            ]
          });
        } else if (url.includes('posts')) {
          resolve({
            data: [
              { id: 1, title: 'Introduction to Fetch API', author: 'John' },
              { id: 2, title: 'Working with Promises', author: 'Jane' }
            ]
          });
        } else {
          resolve({ data: { message: 'Generic data' } });
        }
      } else {
        reject(new Error('Network error: Failed to fetch data'));
      }
    }, delay);
  });
}

// Using promises with then/catch
simulateFetch('https://api.example.com/users')
  .then(response => {
    console.log('Users data:', response.data);
    return simulateFetch('https://api.example.com/posts');
  })
  .then(response => {
    console.log('Posts data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Using async/await (more modern approach)
async function fetchData() {
  try {
    console.log('\\n--- Async/Await approach ---');
    const usersResponse = await simulateFetch('https://api.example.com/users', 1500);
    console.log('Users data (async):', usersResponse.data);
    
    const postsResponse = await simulateFetch('https://api.example.com/posts', 800);
    console.log('Posts data (async):', postsResponse.data);
  } catch (error) {
    console.error('Error in async function:', error.message);
  }
}

// Execute the async function
fetchData();

console.log('This will execute before the async operations complete!');`,
    description: 'Explore how to make API requests using the Fetch API with both Promise chains and async/await syntax.'
  },
  {
    id: 'typescript-basics',
    title: 'TypeScript Basics',
    language: 'typescript',
    code: `// TypeScript Demo
// Note: This is a TypeScript example that can't actually run in this playground

// Basic types
const name: string = 'Vishesh Sanghvi';
const age: number = 28;
const isActive: boolean = true;
const skills: string[] = ['JavaScript', 'TypeScript', 'React', 'Node.js'];

// Type alias
type User = {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // Optional property
};

// Interface
interface Project {
  id: number;
  title: string;
  technologies: string[];
  completed: boolean;
}

// Function with types
function greetUser(user: User): string {
  return \`Hello, \${user.name}! Welcome back.\`;
}

// Generic function
function getFirstItem<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

// Union types
type Status = 'active' | 'inactive' | 'pending';
const projectStatus: Status = 'active';

// Example objects
const user: User = {
  id: 1,
  name: 'Vishesh',
  email: 'vishesh@example.com',
  isAdmin: true
};

const project: Project = {
  id: 101,
  title: 'Portfolio Website',
  technologies: ['React', 'TypeScript', 'Tailwind'],
  completed: true
};

// Simulating output since we can't actually run TypeScript
console.log('Basic types demonstration:');
console.log(\`Name (string): \${name}\`);
console.log(\`Age (number): \${age}\`);
console.log(\`Active (boolean): \${isActive}\`);
console.log(\`Skills (string[]): \${skills.join(', ')}\`);

console.log('\\nUser object:');
console.log(user);

console.log('\\nProject object:');
console.log(project);

console.log('\\nFunction with types result:');
console.log(greetUser(user));

console.log('\\nGeneric function result:');
console.log(\`First skill: \${getFirstItem(skills)}\`);

console.log('\\nUnion type:');
console.log(\`Project status: \${projectStatus}\`);`,
    description: 'Learn TypeScript fundamentals including types, interfaces, generics, and more. This is a static code example for understanding TypeScript syntax.'
  }
];

const CodeDemo = () => {
  const navigate = useNavigate();
  const [activeDemo, setActiveDemo] = useState(demoExamples[0].id);
  const [code, setCode] = useState(demoExamples[0].code);
  const [output, setOutput] = useState('// Run the code to see the output');
  const [isRunning, setIsRunning] = useState(false);
  
  // Update code when demo changes
  useEffect(() => {
    const demo = demoExamples.find(d => d.id === activeDemo);
    if (demo) {
      setCode(demo.code);
      setOutput('// Run the code to see the output');
    }
  }, [activeDemo]);
  
  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('Running code...');
    
    // Using a timeout to simulate processing time
    setTimeout(() => {
      try {
        // Capture console.log outputs
        const logs: string[] = [];
        const originalConsoleLog = console.log;
        const originalConsoleError = console.error;
        
        console.log = (...args) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        };
        
        console.error = (...args) => {
          logs.push('Error: ' + args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        };
        
        // Execute code (with safety precautions)
        const safeCode = `
          try {
            ${code}
          } catch (error) {
            console.error(error.message);
          }
        `;
        
        // Only allowing certain demos to actually run
        if (activeDemo === 'javascript-array') {
          eval(safeCode);
          setOutput(logs.join('\n'));
        } else if (activeDemo === 'fetch-api') {
          eval(safeCode);
          setOutput(logs.join('\n'));
        } else {
          // For React and TypeScript examples, we can't actually run them
          setOutput('This is just a code example and cannot be executed in this playground.\n\nIn a real environment, this would show the result of running the code.');
        }
        
        // Restore console functions
        console.log = originalConsoleLog;
        console.error = originalConsoleError;
      } catch (error) {
        setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
      }
      
      setIsRunning(false);
    }, 800);
  };
  
  const handleReset = () => {
    const demo = demoExamples.find(d => d.id === activeDemo);
    if (demo) {
      setCode(demo.code);
      setOutput('// Run the code to see the output');
      toast({
        title: "Reset Complete",
        description: "Code has been reset to the original example",
        duration: 2000,
      });
    }
  };
  
  const downloadCode = () => {
    const demo = demoExamples.find(d => d.id === activeDemo);
    if (!demo) return;
    
    const extension = demo.language === 'javascript' ? 'js' : demo.language === 'jsx' ? 'jsx' : demo.language === 'typescript' ? 'ts' : 'txt';
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${demo.id}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: `File saved as ${demo.id}.${extension}`,
      duration: 2000,
    });
  };
  
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
              Interactive Code Demos
            </span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-10">
            Explore code examples, edit them, and see the results in real-time.
          </p>
        </AnimatedSection>
        
        {/* Code Demo Section */}
        <AnimatedSection className="section-container pb-20" animation="fade" delay={200}>
          <Tabs
            value={activeDemo}
            onValueChange={setActiveDemo}
            className="space-y-6"
          >
            <TabsList className="mb-8 w-full justify-start overflow-x-auto">
              {demoExamples.map(demo => (
                <TabsTrigger key={demo.id} value={demo.id}>
                  {demo.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {demoExamples.map(demo => (
              <TabsContent key={demo.id} value={demo.id} className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-foreground/70 mb-6">{demo.description}</p>
                    
                    <div className="grid grid-cols-1 gap-8">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold">Code Editor</h3>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={handleReset}
                              className="h-8 px-2 text-xs flex items-center gap-1"
                            >
                              <RefreshCw size={14} />
                              Reset
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={downloadCode}
                              className="h-8 px-2 text-xs flex items-center gap-1"
                            >
                              <Download size={14} />
                              Download
                            </Button>
                          </div>
                        </div>
                        <CodeEditor
                          code={code}
                          setCode={setCode}
                          language={demo.language}
                        />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold">Output</h3>
                          <Button
                            onClick={handleRunCode}
                            disabled={isRunning}
                            className="h-8 px-3 text-xs flex items-center gap-1"
                          >
                            {isRunning ? (
                              <>
                                <RefreshCw size={14} className="animate-spin" />
                                Running...
                              </>
                            ) : (
                              <>
                                <Play size={14} />
                                Run Code
                              </>
                            )}
                          </Button>
                        </div>
                        <CodeOutput output={output} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Learning Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a 
                      href="#" 
                      className="group block p-4 bg-card/50 rounded-lg border border-border/40 hover:border-primary/20 transition-colors hover:bg-card"
                    >
                      <h4 className="font-medium group-hover:text-primary transition-colors">Official Documentation</h4>
                      <p className="text-sm text-foreground/70">Learn from the source with comprehensive guides and API references.</p>
                    </a>
                    <a 
                      href="#" 
                      className="group block p-4 bg-card/50 rounded-lg border border-border/40 hover:border-primary/20 transition-colors hover:bg-card"
                    >
                      <h4 className="font-medium group-hover:text-primary transition-colors">Interactive Tutorials</h4>
                      <p className="text-sm text-foreground/70">Step-by-step tutorials to master these concepts in depth.</p>
                    </a>
                    <a 
                      href="#" 
                      className="group block p-4 bg-card/50 rounded-lg border border-border/40 hover:border-primary/20 transition-colors hover:bg-card"
                    >
                      <h4 className="font-medium group-hover:text-primary transition-colors">Related Blog Posts</h4>
                      <p className="text-sm text-foreground/70">Check out my blog posts covering these topics in more detail.</p>
                    </a>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
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

export default CodeDemo;
