
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Shield, Award, Brain, Code, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

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

// This proxy URL is needed to bypass CORS issues with the LeetCode API
// In a production application, you would use a backend service for this
const LEETCODE_API_URL = 'https://leetcode-stats-api.herokuapp.com/visheshsanghvi112';

const fetchLeetCodeProfile = async (): Promise<LeetCodeProfile> => {
  const response = await fetch(LEETCODE_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch LeetCode profile');
  }
  const data = await response.json();
  
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
};

const LeetCodeStats: React.FC = () => {
  const { t } = useTranslation();
  
  const { data: leetcodeProfile, isLoading, error } = useQuery({
    queryKey: ['leetcode-profile'],
    queryFn: fetchLeetCodeProfile,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (isLoading) {
    return <LeetCodeStatsSkeleton />;
  }

  if (error || !leetcodeProfile) {
    return (
      <Card className="bg-card/50 backdrop-blur-sm border border-border/40">
        <CardHeader>
          <CardTitle>{t('components.leetcode.title')}</CardTitle>
          <CardDescription>{t('components.leetcode.error')}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const totalProgress = (leetcodeProfile.totalSolved / leetcodeProfile.totalQuestions) * 100;
  const easyProgress = (leetcodeProfile.easySolved / leetcodeProfile.totalEasy) * 100;
  const mediumProgress = (leetcodeProfile.mediumSolved / leetcodeProfile.totalMedium) * 100;
  const hardProgress = (leetcodeProfile.hardSolved / leetcodeProfile.totalHard) * 100;

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
              {t('components.leetcode.rank')}: {leetcodeProfile.ranking.toLocaleString()}
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
                    {leetcodeProfile.totalSolved} / {leetcodeProfile.totalQuestions}
                  </span>
                </div>
                <Progress value={totalProgress} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-green-500">{t('components.leetcode.easy')}</span>
                  <span className="text-sm text-foreground/70">
                    {leetcodeProfile.easySolved} / {leetcodeProfile.totalEasy}
                  </span>
                </div>
                <Progress value={easyProgress} className={cn("h-2 bg-secondary/30")} />
                <div className="h-2 -mt-2 bg-transparent">
                  <div className="h-full bg-green-500" style={{ width: `${easyProgress}%` }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-yellow-500">{t('components.leetcode.medium')}</span>
                  <span className="text-sm text-foreground/70">
                    {leetcodeProfile.mediumSolved} / {leetcodeProfile.totalMedium}
                  </span>
                </div>
                <Progress value={mediumProgress} className={cn("h-2 bg-secondary/30")} />
                <div className="h-2 -mt-2 bg-transparent">
                  <div className="h-full bg-yellow-500" style={{ width: `${mediumProgress}%` }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-red-500">{t('components.leetcode.hard')}</span>
                  <span className="text-sm text-foreground/70">
                    {leetcodeProfile.hardSolved} / {leetcodeProfile.totalHard}
                  </span>
                </div>
                <Progress value={hardProgress} className={cn("h-2 bg-secondary/30")} />
                <div className="h-2 -mt-2 bg-transparent">
                  <div className="h-full bg-red-500" style={{ width: `${hardProgress}%` }} />
                </div>
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
                <div className="text-xl font-bold">{leetcodeProfile.acceptanceRate.toFixed(1)}%</div>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">{t('components.leetcode.contributions')}</span>
                </div>
                <div className="text-xl font-bold">{leetcodeProfile.contributionPoints}</div>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="text-sm">{t('components.leetcode.streakDays')}</span>
                </div>
                <div className="text-xl font-bold">
                  {Object.keys(leetcodeProfile.submissionCalendar).length}
                </div>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm">{t('components.leetcode.reputation')}</span>
                </div>
                <div className="text-xl font-bold">{leetcodeProfile.reputation}</div>
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
