
import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center py-20">
          <AlertCircle className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/projects">
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
