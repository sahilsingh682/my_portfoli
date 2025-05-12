
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { School } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "BTech CSE (AI & ML)",
      institution: "Geeta University",
      period: "2023 – 2027",
      current: true
    },
    {
      degree: "12th",
      institution: "Sunrise Senior Secondary School",
      period: "2022-2023",
      current: false
    },
    {
      degree: "10th",
      institution: "Amar Jyoti Public School",
      period: "2020-2021",
      current: false
    }
  ];

  const achievements = [
    "Web Development Certification – Octanet",
    "AI & Machine Learning Certification – Octanet",
    "Data Analytics using Python Internship Certificate – Geeta University",
    "Successfully developed a COVID-19 Case Analysis project using Python libraries (Pandas, NumPy, Matplotlib, Seaborn).",
    "Designed and launched a clothing website for S S Fabric using WordPress – ssfabrics.000.pe.",
    "Coordinated various university programs and received recognition certificates from Geeta University."
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4 font-heading">Education & Achievements</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-dark mb-8 flex items-center font-heading">
              <School className="mr-3 text-portfolio-primary" /> Education Timeline
            </h3>
            <div className="space-y-8 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-portfolio-light"></div>
              
              {education.map((item, index) => (
                <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="absolute left-4 top-6 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-portfolio-light bg-white"></div>
                  <div className={`pl-12 ${index === 0 ? 'pt-2' : ''}`}>
                    <Card className={`shadow-md overflow-hidden border-l-4 ${item.current ? 'border-portfolio-primary' : 'border-gray-300'}`}>
                      <CardContent className="p-6">
                        <h4 className="font-bold text-lg text-portfolio-dark">{item.degree}</h4>
                        <p className="text-portfolio-primary">{item.institution}</p>
                        <p className="text-gray-600 text-sm mt-1">{item.period}</p>
                        {item.current && (
                          <div className="mt-2">
                            <span className="inline-block bg-portfolio-light text-portfolio-primary text-xs px-2 py-1 rounded-full">
                              Current
                            </span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-dark mb-8 font-heading">Achievements & Certifications</h3>
            <Card className="shadow-lg border-t-4 border-portfolio-primary animate-fade-in">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-portfolio-light flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-portfolio-primary"></div>
                      </div>
                      <p className="text-gray-700">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-portfolio-dark mb-4 font-heading">Interests</h3>
              <div className="flex flex-wrap gap-3 animate-fade-in">
                {[
                  "Web Development", 
                  "Artificial Intelligence & Machine Learning", 
                  "Data Analytics", 
                  "Financial Analysis", 
                  "Problem Solving & Logical Thinking", 
                  "Technology & Innovation", 
                  "Programming & Software Development"
                ].map((interest, index) => (
                  <span 
                    key={index} 
                    className="bg-portfolio-light text-portfolio-primary px-3 py-1 rounded-full text-sm"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
