
import React, { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

// Replace these with your EmailJS details
const EMAILJS_SERVICE_ID = "service_id"; // You'll need to replace this
const EMAILJS_TEMPLATE_ID = "template_id"; // You'll need to replace this
const EMAILJS_USER_ID = "public_key"; // You'll need to replace this

const ContactSection = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
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
        description: "Email service is not properly configured. Please configure your EmailJS details.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Use EmailJS to send the form
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current!,
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

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9812019772",
      link: "tel:9812019772"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "sahilsingh19772@gmail.com",
      link: "mailto:sahilsingh19772@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Hisar, Haryana",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4 font-heading">Get In Touch</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm open to job opportunities, collaboration, and networking. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="shadow-lg animate-fade-in overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-portfolio-primary p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Send Me a Message</h3>
                  <p className="text-sm opacity-90">
                    I'm always interested in hearing about new opportunities and projects!
                  </p>
                </div>
                <div className="p-6">
                  <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-gray-700 font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-gray-700 font-medium">
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
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-gray-700 font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Job Opportunity"
                        required
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-gray-700 font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        required
                        className="min-h-[150px] border-gray-300"
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
          </div>
          
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-portfolio-light rounded-lg text-portfolio-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-portfolio-dark">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-portfolio-primary hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="shadow-md overflow-hidden animate-fade-in" style={{animationDelay: "0.3s"}}>
              <CardContent className="p-6">
                <h4 className="font-semibold text-portfolio-dark mb-4">Let's Connect</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-portfolio-light text-portfolio-primary p-2 rounded-full hover:bg-portfolio-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-portfolio-light text-portfolio-primary p-2 rounded-full hover:bg-portfolio-primary hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
