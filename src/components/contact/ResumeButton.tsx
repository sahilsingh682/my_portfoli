
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import jsPDF from 'jspdf';

const ResumeButton = () => {
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      // Display toast notification
      toast({
        title: "Resume Download",
        description: "Your resume is being prepared as PDF...",
      });

      // Function to load an image and get it as base64
      const loadImage = (url: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'Anonymous'; // Enable CORS for images
          img.onload = () => resolve(img);
          img.onerror = (e) => reject(e);
          img.src = url;
        });
      };

      // Create new PDF document (A4 format)
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Load first image
      const img1 = await loadImage('/resume-page1.jpg');
      
      // Add first page
      const imgHeight1 = (img1.height * pageWidth) / img1.width;
      pdf.addImage(img1, 'JPEG', 0, 0, pageWidth, imgHeight1);
      
      // Add new page for second image
      pdf.addPage();
      
      // Load and add second image
      const img2 = await loadImage('/resume-page2.jpg');
      const imgHeight2 = (img2.height * pageWidth) / img2.width;
      pdf.addImage(img2, 'JPEG', 0, 0, pageWidth, imgHeight2);
      
      // Save the PDF
      pdf.save('resume.pdf');
      
      // Success notification
      toast({
        title: "Resume Downloaded",
        description: "Your resume has been downloaded successfully as PDF.",
      });
      
    } catch (error) {
      console.error('Error creating PDF:', error);
      toast({
        title: "Download Failed",
        description: "There was an error creating the PDF. Please try again.",
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
