
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Award, Trophy, Code, Zap, Flame, Calendar, BarChart, Star, Medal, Rocket, BadgeCheck, Target, Book } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface LeetCodeBadge {
  id: string;
  name: string;
  description: string;
  tier: 'gold' | 'silver' | 'bronze';
  icon: React.ElementType;
  date: string;
  category?: string;
  isActive?: boolean;
}

// API endpoint for fetching badges (this would be replaced by a real endpoint)
const BADGES_API_URL = 'https://leetcode-api.visheshsanghvi112.workers.dev/badges';

// Fallback mock data including the new badges
const mockBadges: LeetCodeBadge[] = [
  // Annual Medals
  {
    id: '100-days-badge-2024',
    name: '100 Days Badge 2024',
    description: 'Completed 100+ problems in 2024',
    tier: 'gold',
    icon: Trophy,
    date: '2024-11-15',
    category: 'Annual Medals'
  },
  {
    id: '50-days-badge-2024',
    name: '50 Days Badge 2024',
    description: 'Completed 50+ problems in 2024',
    tier: 'silver',
    icon: Trophy,
    date: '2024-07-18',
    category: 'Annual Medals'
  },
  
  // Study Plan Medals
  {
    id: 'intro-to-pandas',
    name: 'Introduction to Pandas',
    description: 'Completed the Pandas study plan',
    tier: 'gold',
    icon: Book,
    date: '2025-04-15',
    category: 'Study Plan Medals'
  },
  {
    id: 'top-sql-50',
    name: 'Top SQL 50',
    description: 'Completed the Top SQL 50 study plan',
    tier: 'silver',
    icon: BarChart,
    date: '2023-10-01',
    category: 'Study Plan Medals'
  },
  {
    id: 'top-interview-150',
    name: 'Top Interview 150',
    description: 'Working on the Top Interview 150 study plan',
    tier: 'bronze',
    icon: Target,
    date: '',
    category: 'Study Plan Medals',
    isActive: true
  },
  
  // Original badges
  {
    id: 'annual-badge-2024',
    name: 'Annual Badge 2024',
    description: 'Completed 100+ problems in 2024',
    tier: 'gold',
    icon: Trophy,
    date: '2024-03-15',
    category: 'Achievement Badges'
  },
  {
    id: 'streak-master',
    name: 'Streak Master',
    description: 'Maintained a 30-day streak',
    tier: 'gold',
    icon: Flame,
    date: '2024-04-01',
    category: 'Achievement Badges'
  },
  {
    id: 'contest-participant',
    name: 'Contest Champion',
    description: 'Ranked in the top 10% in a weekly contest',
    tier: 'silver',
    icon: Medal,
    date: '2024-02-10',
    category: 'Contest Badges'
  },
  {
    id: 'algorithm-expert',
    name: 'Algorithm Expert',
    description: 'Solved 200+ algorithm problems',
    tier: 'gold',
    icon: Code,
    date: '2023-12-05',
    category: 'Achievement Badges'
  },
  {
    id: 'daily-challenger',
    name: 'Daily Challenger',
    description: 'Completed 30 daily challenges',
    tier: 'gold',
    icon: Calendar,
    date: '2024-03-22',
    category: 'Achievement Badges'
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    description: 'Solved a medium problem in under 10 minutes',
    tier: 'silver',
    icon: Zap,
    date: '2024-01-18',
    category: 'Achievement Badges'
  },
  {
    id: 'database-specialist',
    name: 'Database Specialist',
    description: 'Solved 50+ database problems',
    tier: 'bronze',
    icon: BarChart,
    date: '2024-02-28',
    category: 'Topic Badges'
  },
  {
    id: 'hard-problem-solver',
    name: 'Hard Problem Solver',
    description: 'Solved 50+ hard problems',
    tier: 'silver',
    icon: Star,
    date: '2024-01-05',
    category: 'Achievement Badges'
  },
  {
    id: 'premium-member',
    name: 'Premium Member',
    description: 'Subscribed to LeetCode Premium',
    tier: 'gold',
    icon: Award,
    date: '2023-10-15',
    category: 'Account Badges'
  },
  {
    id: 'rising-star',
    name: 'Rising Star',
    description: 'Reached 1000+ reputation points',
    tier: 'bronze',
    icon: Rocket,
    date: '2024-03-10',
    category: 'Achievement Badges'
  },
];

const getBadgeColor = (tier: string) => {
  switch (tier) {
    case 'gold':
      return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
    case 'silver':
      return 'bg-slate-300/20 text-slate-300 border-slate-300/30';
    case 'bronze':
      return 'bg-amber-700/20 text-amber-700 border-amber-700/30';
    default:
      return 'bg-primary/20 text-primary border-primary/30';
  }
};

const fetchBadges = async (): Promise<LeetCodeBadge[]> => {
  try {
    const response = await fetch(BADGES_API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(5000)
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch badges');
    }
    
    const data = await response.json();
    console.log('Badges API response:', data);
    
    // Check if the response has the expected format
    if (!Array.isArray(data)) {
      throw new Error('Invalid API response format');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching badges:', error);
    // Fallback to mock data
    return mockBadges;
  }
};

const LeetCodeBadges: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const { data: badges, isLoading, error } = useQuery({
    queryKey: ['leetcode-badges'],
    queryFn: fetchBadges,
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 2,
    retryDelay: 1000,
  });

  // Show a toast if there was an error fetching the data
  React.useEffect(() => {
    if (error) {
      console.error('LeetCode badges error:', error);
      toast({
        title: t('components.leetcode.badges.error.title'),
        description: t('components.leetcode.badges.error.description'),
        variant: "destructive",
      });
    }
  }, [error, toast, t]);

  if (isLoading) {
    return <BadgesSkeleton />;
  }

  const badgeData = badges || mockBadges;
  
  // Group badges by category
  const groupedBadges = badgeData.reduce((acc, badge) => {
    const category = badge.category || 'Other Badges';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(badge);
    return acc;
  }, {} as Record<string, LeetCodeBadge[]>);

  // Sort categories to ensure consistent order
  const sortedCategories = Object.keys(groupedBadges).sort((a, b) => {
    // Ensure Annual Medals and Study Plan Medals are at the top
    const categoryOrder: Record<string, number> = {
      'Annual Medals': 1,
      'Study Plan Medals': 2,
      'Achievement Badges': 3,
      'Contest Badges': 4,
      'Topic Badges': 5,
      'Account Badges': 6,
      'Other Badges': 7,
    };
    
    return (categoryOrder[a] || 999) - (categoryOrder[b] || 999);
  });
  
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Award className="text-primary" />
              {t('components.leetcode.badges.title')}
            </CardTitle>
            <CardDescription>
              Showcasing achievements and milestones
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-primary/10">
            {badgeData.length} Badges Earned
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-8">
          {sortedCategories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-lg border-b border-border/40 pb-2">{category}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {groupedBadges[category].map((badge) => {
                  const IconComponent = badge.icon;
                  const badgeColor = getBadgeColor(badge.tier);
                  
                  return (
                    <div 
                      key={badge.id}
                      className={cn(
                        "relative overflow-hidden group rounded-lg border transition-all duration-300 hover:shadow-md",
                        badge.isActive
                          ? "border-primary/40 bg-primary/5"
                          : "border-border/40 hover:border-primary/40"
                      )}
                    >
                      <div className={cn(
                        "absolute right-2 top-2 h-6 w-6 rounded-full flex items-center justify-center border",
                        badgeColor
                      )}>
                        {badge.tier === 'gold' && <Star className="h-3 w-3" />}
                        {badge.isActive && <BadgeCheck className="h-3 w-3" />}
                      </div>
                      
                      <div className="p-4 flex flex-col items-center text-center">
                        <div className={cn(
                          "h-16 w-16 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110",
                          badgeColor
                        )}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        
                        <h3 className="font-medium text-sm mb-1">{badge.name}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{badge.description}</p>
                        
                        <div className="mt-auto pt-2 text-xs text-muted-foreground border-t border-border/20 w-full">
                          {badge.isActive ? (
                            <span className="text-primary font-medium">Currently Active</span>
                          ) : (
                            <>Earned on {new Date(badge.date).toLocaleDateString()}</>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const BadgesSkeleton = () => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-5 w-64 mt-1" />
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="rounded-lg border border-border/40 p-4">
              <div className="flex flex-col items-center">
                <Skeleton className="h-16 w-16 rounded-full mb-3" />
                <Skeleton className="h-5 w-24 mb-1" />
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-3 w-full mt-auto" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeetCodeBadges;
