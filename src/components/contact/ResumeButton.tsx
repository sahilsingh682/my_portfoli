
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ResumeButton = () => {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    // Open resume in a new tab instead of downloading directly
    window.open('/resume.pdf', '_blank');
    
    // Show toast notification
    toast({
      title: "Resume Opened",
      description: "Your resume is opening in a new tab.",
    });
  };

  return (
    <Button 
      onClick={handleDownloadResume}
      className="bg-portfolio-primary hover:bg-portfolio-secondary transition-colors"
    >
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </Button>
  );
};

export default ResumeButton;
