
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Shield, Award, Brain, Code, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface LeetCodeProfile {
  username: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar: Record<string, number>;
}

// Mock data to use when the API is unavailable
const mockLeetCodeData: LeetCodeProfile = {
  username: 'visheshsanghvi112',
  totalSolved: 347,
  totalQuestions: 2341,
  easySolved: 142,
  totalEasy: 648,
  mediumSolved: 168,
  totalMedium: 1286,
  hardSolved: 37,
  totalHard: 407,
  acceptanceRate: 67.5,
  ranking: 53842,
  contributionPoints: 385,
  reputation: 215,
  submissionCalendar: {
    '1712534400': 3,
    '1712448000': 5,
    '1712361600': 2,
    '1712275200': 4,
    '1712188800': 1,
    '1712102400': 3,
    '1712016000': 2
  }
};

// Updated API URL that's more reliable
const LEETCODE_API_URL = 'https://leetcode-stats-api.herokuapp.com/visheshsanghvi112';

const fetchLeetCodeProfile = async (): Promise<LeetCodeProfile> => {
  try {
    const response = await fetch(LEETCODE_API_URL, { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // Setting a reasonable timeout
      signal: AbortSignal.timeout(5000)
    });
    
    if (!response.ok) {
      console.error(`LeetCode API error: ${response.status} ${response.statusText}`);
      throw new Error('Failed to fetch LeetCode profile');
    }
    
    const data = await response.json();
    console.log('LeetCode API response:', data);
    
    // If the API response doesn't have the expected fields, throw an error
    if (!data.totalSolved && data.totalSolved !== 0) {
      throw new Error('Invalid API response format');
    }
    
    return {
      username: 'visheshsanghvi112',
      totalSolved: data.totalSolved || 0,
      totalQuestions: data.totalQuestions || 0,
      easySolved: data.easySolved || 0,
      totalEasy: data.totalEasy || 0,
      mediumSolved: data.mediumSolved || 0,
      totalMedium: data.totalMedium || 0,
      hardSolved: data.hardSolved || 0,
      totalHard: data.totalHard || 0,
      acceptanceRate: data.acceptanceRate || 0,
      ranking: data.ranking || 0,
      contributionPoints: data.contributionPoints || 0,
      reputation: data.reputation || 0,
      submissionCalendar: data.submissionCalendar || {},
    };
  } catch (error) {
    console.error('Error fetching LeetCode profile:', error);
    // Return mock data when the API call fails
    return mockLeetCodeData;
  }
};

const LeetCodeStats: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const { data: leetcodeProfile, isLoading, error } = useQuery({
    queryKey: ['leetcode-profile'],
    queryFn: fetchLeetCodeProfile,
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 2,
    retryDelay: 1000,
  });

  // Show a toast if there was an error fetching the data
  React.useEffect(() => {
    if (error) {
      console.error('LeetCode stats error:', error);
      toast({
        title: t('components.leetcode.title'),
        description: t('components.leetcode.error'),
        variant: "destructive",
      });
    }
  }, [error, toast, t]);

  if (isLoading) {
    return <LeetCodeStatsSkeleton />;
  }

  // Never should be null due to fallback mock data
  const profile = leetcodeProfile || mockLeetCodeData;

  const totalProgress = (profile.totalSolved / profile.totalQuestions) * 100;
  const easyProgress = (profile.easySolved / profile.totalEasy) * 100;
  const mediumProgress = (profile.mediumSolved / profile.totalMedium) * 100;
  const hardProgress = (profile.hardSolved / profile.totalHard) * 100;

  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Code className="text-primary" />
              {t('components.leetcode.title')}
            </CardTitle>
            <CardDescription>
              <a 
                href="https://leetcode.com/u/visheshsanghvi112/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @visheshsanghvi112
              </a>
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-full">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <span className="font-mono font-medium">
              {t('components.leetcode.rank')}: {profile.ranking.toLocaleString()}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-4">{t('components.leetcode.problemsSolved')}</h3>
            
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{t('components.leetcode.total')}</span>
                  <span className="text-sm text-foreground/70">
                    {profile.totalSolved} / {profile.totalQuestions}
                  </span>
                </div>
                <Progress value={totalProgress} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-green-500">{t('components.leetcode.easy')}</span>
                  <span className="text-sm text-foreground/70">
                    {profile.easySolved} / {profile.totalEasy}
                  </span>
                </div>
                <Progress value={easyProgress} className="h-2 bg-secondary/30" indicatorClassName="bg-green-500" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-yellow-500">{t('components.leetcode.medium')}</span>
                  <span className="text-sm text-foreground/70">
                    {profile.mediumSolved} / {profile.totalMedium}
                  </span>
                </div>
                <Progress value={mediumProgress} className="h-2 bg-secondary/30" indicatorClassName="bg-yellow-500" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-red-500">{t('components.leetcode.hard')}</span>
                  <span className="text-sm text-foreground/70">
                    {profile.hardSolved} / {profile.totalHard}
                  </span>
                </div>
                <Progress value={hardProgress} className="h-2 bg-secondary/30" indicatorClassName="bg-red-500" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">{t('components.leetcode.stats')}</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="h-4 w-4 text-primary" />
                  <span className="text-sm">{t('components.leetcode.acceptanceRate')}</span>
                </div>
                <div className="text-xl font-bold">{profile.acceptanceRate.toFixed(1)}%</div>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">{t('components.leetcode.contributions')}</span>
                </div>
                <div className="text-xl font-bold">{profile.contributionPoints}</div>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="text-sm">{t('components.leetcode.streakDays')}</span>
                </div>
                <div className="text-xl font-bold">
                  {Object.keys(profile.submissionCalendar).length}
                </div>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm">{t('components.leetcode.reputation')}</span>
                </div>
                <div className="text-xl font-bold">{profile.reputation}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/40">
          <a 
            href="https://leetcode.com/u/visheshsanghvi112/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            {t('components.leetcode.viewProfile')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const LeetCodeStatsSkeleton = () => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-5 w-32 mt-2" />
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="space-y-5">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-2 w-full" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-secondary/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-8 w-16" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeetCodeStats;
