
// Simple analytics utility
class Analytics {
  private static instance: Analytics;
  private isEnabled: boolean = false;

  private constructor() {
    this.isEnabled = process.env.NODE_ENV === 'production';
  }

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  public trackPageView(path: string) {
    if (!this.isEnabled) return;
    
    console.log('Page view:', path);
    // Integration point for Google Analytics, Mixpanel, etc.
  }

  public trackEvent(event: string, properties?: Record<string, any>) {
    if (!this.isEnabled) return;
    
    console.log('Event:', event, properties);
    // Integration point for analytics providers
  }

  public trackError(error: Error, context?: string) {
    console.error('Error tracked:', error, context);
    // Integration point for error tracking (Sentry, etc.)
  }
}

export const analytics = Analytics.getInstance();
