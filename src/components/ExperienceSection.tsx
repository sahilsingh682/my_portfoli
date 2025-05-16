
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark dark:text-white mb-4 font-heading">Work Experience</h2>
          <div className="w-24 h-1 bg-portfolio-primary dark:bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional experience gained through internships and practical applications of technical skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-l-4 border-portfolio-primary dark:border-portfolio-accent mb-10 overflow-hidden animate-fade-in dark:bg-gray-800 dark:border-l-portfolio-accent">
            <CardHeader className="bg-portfolio-light dark:bg-gray-700 py-6">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-portfolio-dark dark:text-white">Data Analytics Intern</h3>
                  <p className="text-portfolio-primary dark:text-portfolio-accent font-medium">Geeta University</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">June 2024 – August 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Panipat, Haryana</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-portfolio-primary dark:text-portfolio-accent mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Gained hands-on experience in data analysis using Python, working with real-world datasets.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-portfolio-primary dark:text-portfolio-accent mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Utilized Python libraries (Pandas, NumPy, Matplotlib, Seaborn) for data manipulation and visualization.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-portfolio-primary dark:text-portfolio-accent mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Conducted exploratory data analysis (EDA) to extract meaningful insights from complex datasets.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-portfolio-primary dark:text-portfolio-accent mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed data-driven reports and presented findings to enhance decision-making processes.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 italic">
              Currently seeking new opportunities to apply my skills in web development, data analytics, 
              and programming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
