
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Globe, 
  Database, 
  LineChart, 
  Terminal, 
  Brackets, 
  Lightbulb,
  Clock 
} from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    {
      icon: <Code className="h-6 w-6 text-portfolio-primary dark:text-portfolio-accent" />,
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'R']
    },
    {
      icon: <Globe className="h-6 w-6 text-portfolio-primary dark:text-portfolio-accent" />,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'WordPress (Front-End & Back-End)']
    },
    {
      icon: <LineChart className="h-6 w-6 text-portfolio-primary dark:text-portfolio-accent" />,
      title: 'Data Analytics',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'R']
    },
    {
      icon: <Database className="h-6 w-6 text-portfolio-primary dark:text-portfolio-accent" />,
      title: 'Databases',
      skills: ['MySQL', 'Oracle']
    },
    {
      icon: <Terminal className="h-6 w-6 text-portfolio-primary dark:text-portfolio-accent" />,
      title: 'Software & Tools',
      skills: ['Git', 'VS Code', 'Jupyter Notebook']
    },
    {
      icon: <Brackets className="h-6 w-6 text-portfolio-primary dark:text-portfolio-accent" />,
      title: 'Concepts',
      skills: ['Object-Oriented Programming (OOPs)', 'Data Structures & Algorithms (DSA)']
    }
  ];

  const softSkills = [
    'Analytical Thinking',
    'Problem-Solving',
    'Team Collaboration',
    'Leadership',
    'Effective Communication',
    'Time Management',
    'Organizational Skills',
    'Critical Thinking'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark dark:text-white mb-4 font-heading">Technical Skills</h2>
          <div className="w-24 h-1 bg-portfolio-primary dark:bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive set of technical and interpersonal skills developed through education, 
            projects, and internship experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technicalSkills.map((skillGroup, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow animate-fade-in overflow-hidden dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="p-0">
                <div className="bg-portfolio-light dark:bg-gray-700 p-4 flex items-center space-x-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    {skillGroup.icon}
                  </div>
                  <h3 className="font-semibold text-portfolio-dark dark:text-white">{skillGroup.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill, i) => (
                      <li key={i} className="flex items-center">
                        <div className="h-2 w-2 bg-portfolio-primary dark:bg-portfolio-accent rounded-full mr-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-10 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark dark:text-white mb-4 font-heading">Interpersonal Skills</h2>
          <div className="w-24 h-1 bg-portfolio-primary dark:bg-portfolio-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow animate-fade-in dark:bg-gray-800 dark:border-gray-700" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-4 flex items-center space-x-3">
                {index % 2 === 0 ? 
                  <Lightbulb className="h-5 w-5 text-portfolio-primary dark:text-portfolio-accent" /> : 
                  <Clock className="h-5 w-5 text-portfolio-primary dark:text-portfolio-accent" />
                }
                <span className="text-gray-700 dark:text-gray-300">{skill}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
