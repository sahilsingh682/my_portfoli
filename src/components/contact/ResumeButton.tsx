
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ResumeButton = () => {
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      // Display toast notification
      toast({
        title: "Resume Download",
        description: "Your resume is being downloaded.",
      });

      // Create a function to download each image
      const downloadImage = async (url: string, filename: string) => {
        const response = await fetch(url);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = objectUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up the object URL
        URL.revokeObjectURL(objectUrl);
      };

      // Download both resume images
      await downloadImage('/resume-page1.jpg', 'resume-page1.jpg');
      
      // Add slight delay between downloads to avoid browser issues
      setTimeout(async () => {
        await downloadImage('/resume-page2.jpg', 'resume-page2.jpg');
      }, 300);
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast({
        title: "Download Failed",
        description: "There was an error downloading the resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button 
      onClick={handleDownloadResume}
      className="bg-portfolio-primary hover:bg-portfolio-secondary dark:bg-portfolio-accent dark:hover:bg-blue-500 transition-colors"
    >
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </Button>
  );
};

export default ResumeButton;
