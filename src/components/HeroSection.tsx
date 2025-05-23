
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-portfolio-light to-white py-20 px-4 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000&blur=10')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-dark dark:text-white font-heading">
              Hi, I'm <span className="text-portfolio-primary">Sahil Singh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
              Full Stack Web Developer
            </p>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-lg">
              A highly motivated Computer Science Engineering (AI & ML) student with expertise in Web Development, 
              Data Analytics, and Programming.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="bg-portfolio-primary hover:bg-portfolio-secondary">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-light dark:border-white dark:text-white">
                <a href="#about">Learn More</a>
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/sahilsingh0521/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-primary transition-colors dark:text-gray-300 dark:hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/sahilsingh682" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-primary transition-colors dark:text-gray-300 dark:hover:text-white">
                <Github size={24} />
              </a>
              <a href="mailto:sahilsingh19772@gmail.com" className="text-gray-600 hover:text-portfolio-primary transition-colors dark:text-gray-300 dark:hover:text-white">
                <Mail size={24} />
              </a>
              <a href="tel:9812019772" className="text-gray-600 hover:text-portfolio-primary transition-colors dark:text-gray-300 dark:hover:text-white">
                <Phone size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-primary shadow-xl">
                <img 
                  src="/lovable-uploads/6fd8b17f-1d86-4c8b-94ca-553899f606ad.png"
                  alt="Sahil Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                <div className="bg-portfolio-primary text-white p-2 rounded-full">
                  <code className="text-sm">{'{ developer }'}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-portfolio-primary">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
