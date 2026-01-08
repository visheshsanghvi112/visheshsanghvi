
import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingSpinner from "@/components/LoadingSpinner";
import { analytics } from "@/utils/analytics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import Setup from "./pages/Setup";
import CodeDemo from "./pages/CodeDemo";
import LeetCode from "./pages/LeetCode";
import LinkedIn from "./pages/LinkedIn";
import Projects from "./pages/Projects";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

// Analytics tracker component
const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    analytics.trackPageView(location.pathname);
  }, [location]);

  return null;
};

// PWA registration
const registerSW = async () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered');
    } catch (error) {
      console.log('SW registration failed');
    }
  }
};

const App = () => {
  React.useEffect(() => {
    registerSW();
  }, []);

  return (
    <React.StrictMode>
      <HelmetProvider>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <AnalyticsTracker />
                <Suspense
                  fallback={
                    <div className="min-h-screen flex items-center justify-center">
                      <LoadingSpinner size="lg" />
                    </div>
                  }
                >
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/case-studies/:id" element={<CaseStudies />} />
                    <Route path="/setup" element={<Setup />} />
                    <Route path="/code-demo" element={<CodeDemo />} />
                    <Route path="/leetcode" element={<LeetCode />} />
                    <Route path="/linkedin" element={<LinkedIn />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </TooltipProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
