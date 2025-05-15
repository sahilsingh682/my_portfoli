
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './contact/ContactForm';
import ContactCard from './contact/ContactCard';
import SocialLinks from './contact/SocialLinks';
import ResumeButton from './contact/ResumeButton';

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark dark:text-white mb-4 font-heading">Get In Touch</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm open to job opportunities, collaboration, and networking. Feel free to reach out!
          </p>
          
          <div className="mt-6">
            <ResumeButton />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <ContactCard 
                key={index}
                icon={info.icon}
                title={info.title}
                value={info.value}
                link={info.link}
                animationDelay={`${index * 0.1}s`}
              />
            ))}
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
