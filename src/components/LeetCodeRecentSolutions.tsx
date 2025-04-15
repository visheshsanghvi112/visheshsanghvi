
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Clock, ExternalLink, Code, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface RecentSolution {
  id: string;
  problemId: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  solvedAt: string;
  language: string;
  runtime: string;
  memory: string;
  url: string;
}

// API endpoint for fetching recent solutions (this would be replaced by a real endpoint)
const RECENT_SOLUTIONS_API_URL = 'https://leetcode-api.visheshsanghvi112.workers.dev/recent-solutions';

// Fallback mock data
const mockRecentSolutions: RecentSolution[] = [
  {
    id: 'sol-1',
    problemId: 1,
    title: 'Two Sum',
    difficulty: 'easy',
    tags: ['Array', 'Hash Table'],
    solvedAt: '2024-04-15T06:30:00Z',
    language: 'TypeScript',
    runtime: '76 ms',
    memory: '42.4 MB',
    url: 'https://leetcode.com/problems/two-sum/solutions/'
  },
  {
    id: 'sol-2',
    problemId: 53,
    title: 'Maximum Subarray',
    difficulty: 'medium',
    tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
    solvedAt: '2024-04-14T12:15:00Z',
    language: 'JavaScript',
    runtime: '68 ms',
    memory: '40.2 MB',
    url: 'https://leetcode.com/problems/maximum-subarray/solutions/'
  },
  {
    id: 'sol-3',
    problemId: 124,
    title: 'Binary Tree Maximum Path Sum',
    difficulty: 'hard',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
    solvedAt: '2024-04-13T15:45:00Z',
    language: 'TypeScript',
    runtime: '82 ms',
    memory: '47.3 MB',
    url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/'
  },
  {
    id: 'sol-4',
    problemId: 20,
    title: 'Valid Parentheses',
    difficulty: 'easy',
    tags: ['String', 'Stack'],
    solvedAt: '2024-04-12T09:20:00Z',
    language: 'JavaScript',
    runtime: '65 ms',
    memory: '38.9 MB',
    url: 'https://leetcode.com/problems/valid-parentheses/solutions/'
  },
  {
    id: 'sol-5',
    problemId: 200,
    title: 'Number of Islands',
    difficulty: 'medium',
    tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Union Find', 'Matrix'],
    solvedAt: '2024-04-11T14:10:00Z',
    language: 'TypeScript',
    runtime: '78 ms',
    memory: '44.1 MB',
    url: 'https://leetcode.com/problems/number-of-islands/solutions/'
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'text-green-500 bg-green-500/10 border-green-500/30';
    case 'medium':
      return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30';
    case 'hard':
      return 'text-red-500 bg-red-500/10 border-red-500/30';
    default:
      return 'text-primary bg-primary/10 border-primary/30';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

const fetchRecentSolutions = async (): Promise<RecentSolution[]> => {
  try {
    const response = await fetch(RECENT_SOLUTIONS_API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(5000)
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch recent solutions');
    }
    
    const data = await response.json();
    console.log('Recent solutions API response:', data);
    
    // Check if the response has the expected format
    if (!Array.isArray(data)) {
      throw new Error('Invalid API response format');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching recent solutions:', error);
    // Fallback to mock data
    return mockRecentSolutions;
  }
};

const LeetCodeRecentSolutions: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const { data: solutions, isLoading, error } = useQuery({
    queryKey: ['leetcode-recent-solutions'],
    queryFn: fetchRecentSolutions,
    staleTime: 1000 * 60 * 15, // 15 minutes
    retry: 2,
    retryDelay: 1000,
  });

  // Show a toast if there was an error fetching the data
  React.useEffect(() => {
    if (error) {
      console.error('LeetCode recent solutions error:', error);
      toast({
        title: t('components.leetcode.recentSolutions.error.title', 'Error'),
        description: t('components.leetcode.recentSolutions.error.description', 'Failed to fetch recent solutions'),
        variant: "destructive",
      });
    }
  }, [error, toast, t]);

  if (isLoading) {
    return <RecentSolutionsSkeleton />;
  }

  const solutionsData = solutions || mockRecentSolutions;
  
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Code className="text-primary" />
              {t('components.leetcode.recentSolutions.title', 'Recent Solutions')}
            </CardTitle>
            <CardDescription>
              {t('components.leetcode.recentSolutions.subtitle', 'Problems solved by visheshsanghvi112')}
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-primary/10 flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {t('components.leetcode.recentSolutions.lastUpdated', 'Updated Today')}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          {solutionsData.map((solution) => (
            <div 
              key={solution.id}
              className="p-4 rounded-lg border border-border/40 hover:border-primary/40 transition-all bg-card/30 hover:bg-card/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-sm">#{solution.problemId}</span>
                  <h3 className="font-medium text-base">{solution.title}</h3>
                  <Badge variant="outline" className={cn(
                    "text-xs capitalize",
                    getDifficultyColor(solution.difficulty)
                  )}>
                    {solution.difficulty}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    {t('components.leetcode.recentSolutions.solved', 'Solved')}
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
                    {solution.language}
                  </Badge>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-muted-foreground">
                <div className="flex flex-wrap gap-2">
                  {solution.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-0.5 bg-secondary/20 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1 text-xs">
                    <Clock className="h-3 w-3" />
                    {solution.runtime}
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <div className="h-3 w-3">💾</div>
                    {solution.memory}
                  </div>
                  <div className="text-xs">{formatDate(solution.solvedAt)}</div>
                </div>
              </div>
              
              <div className="mt-3 flex justify-end">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs text-primary flex items-center gap-1"
                  onClick={() => window.open(solution.url, '_blank')}
                >
                  {t('components.leetcode.recentSolutions.viewSolution', 'View Solution')}
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const RecentSolutionsSkeleton = () => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-5 w-64 mt-1" />
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-4 rounded-lg border border-border/40">
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-5 w-40" />
                    <Skeleton className="h-4 w-16 rounded-full" />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-20 rounded-full" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, j) => (
                      <Skeleton key={j} className="h-4 w-16 rounded-full" />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeetCodeRecentSolutions;
