
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Trophy, Code, Zap, Flame, Calendar, BarChart, Star, Medal, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Mocked badges data since we don't have real API data
const mockBadges = [
  {
    id: 'annual-badge-2024',
    name: 'Annual Badge 2024',
    description: 'Completed 100+ problems in 2024',
    tier: 'gold', // gold, silver, bronze
    icon: Trophy,
    date: '2024-03-15',
  },
  {
    id: 'streak-master',
    name: 'Streak Master',
    description: 'Maintained a 30-day streak',
    tier: 'gold',
    icon: Flame,
    date: '2024-04-01',
  },
  {
    id: 'contest-participant',
    name: 'Contest Champion',
    description: 'Ranked in the top 10% in a weekly contest',
    tier: 'silver',
    icon: Medal,
    date: '2024-02-10',
  },
  {
    id: 'algorithm-expert',
    name: 'Algorithm Expert',
    description: 'Solved 200+ algorithm problems',
    tier: 'gold',
    icon: Code,
    date: '2023-12-05',
  },
  {
    id: 'daily-challenger',
    name: 'Daily Challenger',
    description: 'Completed 30 daily challenges',
    tier: 'gold',
    icon: Calendar,
    date: '2024-03-22',
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    description: 'Solved a medium problem in under 10 minutes',
    tier: 'silver',
    icon: Zap,
    date: '2024-01-18',
  },
  {
    id: 'database-specialist',
    name: 'Database Specialist',
    description: 'Solved 50+ database problems',
    tier: 'bronze',
    icon: BarChart,
    date: '2024-02-28',
  },
  {
    id: 'hard-problem-solver',
    name: 'Hard Problem Solver',
    description: 'Solved 50+ hard problems',
    tier: 'silver',
    icon: Star,
    date: '2024-01-05',
  },
  {
    id: 'premium-member',
    name: 'Premium Member',
    description: 'Subscribed to LeetCode Premium',
    tier: 'gold',
    icon: Award,
    date: '2023-10-15',
  },
  {
    id: 'rising-star',
    name: 'Rising Star',
    description: 'Reached 1000+ reputation points',
    tier: 'bronze',
    icon: Rocket,
    date: '2024-03-10',
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

const LeetCodeBadges: React.FC = () => {
  const { t } = useTranslation();
  
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
            {mockBadges.length} Badges Earned
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockBadges.map((badge) => {
            const IconComponent = badge.icon;
            const badgeColor = getBadgeColor(badge.tier);
            
            return (
              <div 
                key={badge.id}
                className="relative overflow-hidden group rounded-lg border border-border/40 transition-all duration-300 hover:shadow-md hover:border-primary/40"
              >
                <div className={cn(
                  "absolute right-2 top-2 h-6 w-6 rounded-full flex items-center justify-center border",
                  badgeColor
                )}>
                  {badge.tier === 'gold' && <Star className="h-3 w-3" />}
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
                    Earned on {new Date(badge.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeetCodeBadges;
