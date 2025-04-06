
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, ExternalLink, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

interface ContactSubmission {
  id: number;
  created_at: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Admin: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false }) as { data: ContactSubmission[], error: any };

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error: any) {
      console.error('Error fetching submissions:', error.message);
      toast({
        title: "Error",
        description: "Failed to load contact submissions",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteSubmission = async (id: number) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Submission deleted successfully",
        variant: "default"
      });
      
      // Update the local state to remove the deleted submission
      setSubmissions(submissions.filter(submission => submission.id !== id));
    } catch (error: any) {
      console.error('Error deleting submission:', error.message);
      toast({
        title: "Error",
        description: "Failed to delete submission",
        variant: "destructive"
      });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors mr-4">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground flex-1">Contact Submissions</h1>
          <button 
            onClick={fetchSubmissions} 
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : submissions.length === 0 ? (
          <div className="bg-secondary/30 rounded-lg p-8 text-center">
            <p className="text-foreground/70 text-lg">No contact submissions yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 mb-8">
            {submissions.map((submission) => (
              <div key={submission.id} className="bg-secondary/20 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-semibold text-foreground">{submission.subject}</h2>
                  <div className="flex space-x-2">
                    <a 
                      href={`mailto:${submission.email}`} 
                      className="p-2 text-primary hover:text-primary/80 transition-colors"
                      title="Reply via email"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <button 
                      onClick={() => deleteSubmission(submission.id)} 
                      className="p-2 text-destructive hover:text-destructive/80 transition-colors"
                      title="Delete submission"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  From: <span className="font-medium text-foreground">{submission.name} ({submission.email})</span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  Received: <span className="font-medium text-foreground">{formatDate(submission.created_at)}</span>
                </div>
                <p className="text-foreground/90 bg-background/50 p-4 rounded-md border border-border/30">{submission.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
