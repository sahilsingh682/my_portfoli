
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

// EmailJS configuration details
const EMAILJS_SERVICE_ID = "service_crd67ws";
const EMAILJS_TEMPLATE_ID = "template_1rp4oj9";
const EMAILJS_USER_ID = "Z_45w2D9qObqX3uew";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!EMAILJS_USER_ID || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Create an object with proper template variables for EmailJS
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      to_name: "Sahil Singh",
      subject: formData.subject,
      message: formData.message
    };

    // Use EmailJS to send the form
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_USER_ID
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    });
  };

  return (
    <Card className="shadow-lg animate-fade-in overflow-hidden dark:bg-gray-800">
      <CardContent className="p-0">
        <div className="bg-portfolio-primary p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Send Me a Message</h3>
          <p className="text-sm opacity-90">
            I'm always interested in hearing about new opportunities and projects!
          </p>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-gray-700 dark:text-gray-300 font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Job Opportunity"
                required
                className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="min-h-[150px] border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <Button 
              type="submit" 
              className="bg-portfolio-primary hover:bg-portfolio-secondary w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <span className="mr-2">Sending...</span>
                  <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                </span>
              ) : (
                <span className="flex items-center">
                  <span className="mr-2">Send Message</span>
                  <Send className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
