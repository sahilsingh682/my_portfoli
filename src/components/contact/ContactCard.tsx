
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string | null;
  animationDelay?: string;
}

const ContactCard = ({ icon, title, value, link, animationDelay }: ContactCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow animate-fade-in" 
          style={animationDelay ? {animationDelay} : undefined}>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-portfolio-light rounded-lg text-portfolio-primary dark:bg-gray-800 dark:text-blue-300">
            {icon}
          </div>
          <div>
            <h4 className="font-semibold text-portfolio-dark dark:text-white">{title}</h4>
            {link ? (
              <a 
                href={link} 
                className="text-portfolio-primary hover:underline dark:text-blue-300"
              >
                {value}
              </a>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">{value}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
