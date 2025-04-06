
import React, { useEffect, useState } from 'react';
import { Calendar, Github, Code, GitBranch, GitPullRequest, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: {
    name: string;
  };
  payload?: any;
}

const username = 'visheshsanghvi'; // Your GitHub username

const GitHubActivitySection: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();
        setRepositories(reposData);
        
        // Fetch activity
        const eventsResponse = await fetch(`https://api.github.com/users/${username}/events?per_page=10`);
        if (!eventsResponse.ok) throw new Error('Failed to fetch events');
        const eventsData = await eventsResponse.json();
        setEvents(eventsData);
        
      } catch (err: any) {
        console.error('Error fetching GitHub data:', err);
        setError(err.message || 'Failed to fetch GitHub data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchGitHubData();
  }, []);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };
  
  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case 'PushEvent':
        return <Code size={18} className="text-green-500" />;
      case 'PullRequestEvent':
        return <GitPullRequest size={18} className="text-purple-500" />;
      case 'CreateEvent':
        return <GitBranch size={18} className="text-blue-500" />;
      case 'WatchEvent':
        return <Star size={18} className="text-yellow-500" />;
      default:
        return <Github size={18} className="text-primary" />;
    }
  };
  
  const getEventDescription = (event: GitHubEvent) => {
    switch (event.type) {
      case 'PushEvent':
        return `Pushed ${event.payload?.commits?.length || 0} commit(s) to ${event.repo.name.split('/')[1]}`;
      case 'PullRequestEvent':
        return `${event.payload?.action} a pull request in ${event.repo.name.split('/')[1]}`;
      case 'CreateEvent':
        return `Created ${event.payload?.ref_type} ${event.payload?.ref || ''} in ${event.repo.name.split('/')[1]}`;
      case 'WatchEvent':
        return `Starred ${event.repo.name.split('/')[1]}`;
      default:
        return `Activity on ${event.repo.name.split('/')[1]}`;
    }
  };

  return (
    <AnimatedSection 
      id="github-activity" 
      className="section-container py-20 bg-gradient-to-b from-background to-secondary/10"
      animation="fade"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/60 bg-clip-text text-transparent">
              GitHub Activity
            </span>
          </h2>
          <p className="text-foreground/70 text-lg">
            See my latest projects and contributions on GitHub
          </p>
        </div>
        
        {error && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-8">
            <p className="font-medium">Error: {error}</p>
            <p className="text-sm mt-2">This could be due to GitHub API rate limits or network issues.</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Repositories */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Github className="mr-2 text-primary" size={20} />
              Recent Repositories
            </h3>
            
            {loading ? (
              Array(3).fill(0).map((_, i) => (
                <Card key={i} className="mb-4">
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-5/6 mb-4" />
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-1/4" />
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : repositories.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                  No public repositories found
                </CardContent>
              </Card>
            ) : (
              repositories.map(repo => (
                <a 
                  key={repo.name} 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mb-4 transition-transform hover:translate-x-1"
                >
                  <Card className="overflow-hidden hover:shadow-md transition-shadow border-primary/10">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-medium mb-2 text-foreground">{repo.name}</h4>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {repo.description || 'No description available'}
                      </p>
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: getLanguageColor(repo.language) }}></div>
                          {repo.language || 'Unknown'}
                        </div>
                        <div className="flex space-x-3">
                          <span className="flex items-center">
                            <Star size={14} className="mr-1" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center">
                            <GitBranch size={14} className="mr-1" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))
            )}
            
            <div className="mt-4 text-center">
              <a 
                href={`https://github.com/${username}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                View all repositories
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </a>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Calendar className="mr-2 text-primary" size={20} />
              Recent Activity
            </h3>
            
            {loading ? (
              Array(5).fill(0).map((_, i) => (
                <div key={i} className="mb-4 flex items-start">
                  <Skeleton className="h-8 w-8 rounded-full mr-3" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-5/6 mb-2" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                </div>
              ))
            ) : events.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                  No recent activity found
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {events.map(event => (
                  <div key={event.id} className="flex items-start p-4 rounded-lg bg-secondary/20 backdrop-blur-sm">
                    <div className="mr-3 mt-1">
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{getEventDescription(event)}</div>
                      <div className="text-xs text-muted-foreground mt-1">{formatDate(event.created_at)}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Helper function to get language color
const getLanguageColor = (language: string): string => {
  const colors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    Java: '#b07219',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Go: '#00ADD8',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Rust: '#DEA584',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
  };
  
  return colors[language] || '#8e8e8e';
};

export default GitHubActivitySection;
