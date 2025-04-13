
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, CheckCircle2, Clock, ArrowUpRight, BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Mock data for recent submissions
const mockSubmissions = [
  {
    id: 's1',
    problem: {
      id: 'p1',
      title: 'Two Sum',
      difficulty: 'easy',
      tags: ['Array', 'Hash Table'],
      number: 1,
    },
    status: 'accepted',
    language: 'TypeScript',
    runtime: '76 ms',
    memory: '42.4 MB',
    date: '2024-04-12T14:30:00Z',
  },
  {
    id: 's2',
    problem: {
      id: 'p2',
      title: 'Add Two Numbers',
      difficulty: 'medium',
      tags: ['Linked List', 'Math', 'Recursion'],
      number: 2,
    },
    status: 'accepted',
    language: 'JavaScript',
    runtime: '108 ms',
    memory: '46.7 MB',
    date: '2024-04-10T09:15:00Z',
  },
  {
    id: 's3',
    problem: {
      id: 'p3',
      title: 'Median of Two Sorted Arrays',
      difficulty: 'hard',
      tags: ['Array', 'Binary Search', 'Divide and Conquer'],
      number: 4,
    },
    status: 'accepted',
    language: 'TypeScript',
    runtime: '120 ms',
    memory: '48.3 MB',
    date: '2024-04-08T18:45:00Z',
  },
  {
    id: 's4',
    problem: {
      id: 'p4',
      title: 'Longest Palindromic Substring',
      difficulty: 'medium',
      tags: ['String', 'Dynamic Programming'],
      number: 5,
    },
    status: 'accepted',
    language: 'JavaScript',
    runtime: '83 ms',
    memory: '44.9 MB',
    date: '2024-04-05T11:20:00Z',
  },
  {
    id: 's5',
    problem: {
      id: 'p5',
      title: 'Container With Most Water',
      difficulty: 'medium',
      tags: ['Array', 'Two Pointers', 'Greedy'],
      number: 11,
    },
    status: 'accepted',
    language: 'TypeScript',
    runtime: '68 ms',
    memory: '50.2 MB',
    date: '2024-04-02T16:10:00Z',
  },
  {
    id: 's6',
    problem: {
      id: 'p6',
      title: 'Binary Tree Level Order Traversal',
      difficulty: 'medium',
      tags: ['Tree', 'BFS', 'Binary Tree'],
      number: 102,
    },
    status: 'accepted',
    language: 'JavaScript',
    runtime: '91 ms',
    memory: '44.3 MB',
    date: '2024-03-30T13:25:00Z',
  },
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

const LeetCodeSubmissions: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Code className="text-primary" />
              {t('components.leetcode.submissions.title')}
            </CardTitle>
            <CardDescription>
              Recent problem solutions
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-primary/10 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            100% Acceptance Rate
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          {mockSubmissions.map((submission) => (
            <div 
              key={submission.id}
              className="p-4 rounded-lg border border-border/40 hover:border-primary/40 transition-all bg-card/30 hover:bg-card/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-sm">#{submission.problem.number}</span>
                  <h3 className="font-medium text-base">{submission.problem.title}</h3>
                  <Badge variant="outline" className={cn(
                    "text-xs capitalize",
                    getDifficultyColor(submission.problem.difficulty)
                  )}>
                    {submission.problem.difficulty}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <BadgeCheck className="h-3 w-3 text-green-500" />
                    {submission.status}
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
                    {submission.language}
                  </Badge>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-muted-foreground">
                <div className="flex flex-wrap gap-2">
                  {submission.problem.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-0.5 bg-secondary/20 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1 text-xs">
                    <Clock className="h-3 w-3" />
                    {submission.runtime}
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <div className="h-3 w-3">💾</div>
                    {submission.memory}
                  </div>
                  <div className="text-xs">{formatDate(submission.date)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-center">
          <Button variant="outline" className="gap-2">
            View All Submissions
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeetCodeSubmissions;
