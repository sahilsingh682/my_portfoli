
import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4 font-heading">About Me</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-primary font-heading">Career Summary</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A highly motivated and detail-oriented Computer Science Engineering (AI & ML) student with a strong 
              foundation in Web Development, Data Analytics, and Programming. Experienced in Front-End and Back-End Development, 
              with expertise in HTML, CSS, Python, Java, C, and C++ with OOPs Concepts.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Passionate about leveraging AI and Machine Learning to solve real-world problems. Holds multiple certifications in Web 
              Development, AI & ML, and Data Analytics. A proactive learner with hands-on internship experience and a 
              track record of coordinating university programs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Seeking opportunities to apply technical skills and problem-solving abilities in a challenging environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in">
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-light p-3 rounded-lg">
                  <MapPin className="text-portfolio-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-dark mb-2">Location</h4>
                  <p className="text-gray-600">Hisar, Haryana</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-light p-3 rounded-lg">
                  <Mail className="text-portfolio-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-dark mb-2">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:sahilsingh19772@gmail.com" className="hover:text-portfolio-primary transition-colors">
                      sahilsingh19772@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-light p-3 rounded-lg">
                  <Phone className="text-portfolio-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-dark mb-2">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:9812019772" className="hover:text-portfolio-primary transition-colors">
                      +91 9812019772
                    </a>
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-light p-3 rounded-lg">
                  <Calendar className="text-portfolio-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-dark mb-2">Education</h4>
                  <p className="text-gray-600">BTech CSE (AI & ML)</p>
                  <p className="text-gray-600">2023 - 2027</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
