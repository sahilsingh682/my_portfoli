
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronRight, BarChart2, ShoppingBag, Music } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Emotion-Driven Music Playlist Generator",
      description: "Web app that generates personalized music playlists based on user emotions using AI.",
      organization: "Genmix",
      icon: <Music className="h-10 w-10 text-portfolio-primary" />,
      points: [
        "Developed a React-based web application that curates personalized music playlists based on user emotions.",
        "Integrated OpenAI API for intelligent song recommendations and creative playlist title generation.",
        "Implemented full CRUD functionality for playlist management with toast notifications.",
        "Created an interactive emotion selection interface with responsive design and modern animations."
      ],
      link: "https://genmix-seven.vercel.app/"
    },
    {
      title: "COVID-19 Case Analysis",
      description: "Data analytics project analyzing COVID-19 cases using Python libraries.",
      organization: "Geeta University",
      icon: <BarChart2 className="h-10 w-10 text-portfolio-primary" />,
      points: [
        "Developed a data analytics project to analyze COVID-19 cases using Python.",
        "Utilized Pandas, NumPy, Matplotlib, and Seaborn for data cleaning, manipulation, and visualization.",
        "Conducted trend analysis to identify patterns in infection rates, recoveries, and fatalities.",
        "Created interactive visualizations to present insights effectively."
      ],
      link: "#"
    },
    {
      title: "Clothing Website for S S Fabric",
      description: "Fully functional e-commerce website for S S Fabric using WordPress.",
      organization: "S S Fabric",
      icon: <ShoppingBag className="h-10 w-10 text-portfolio-primary" />,
      points: [
        "Designed and developed a fully functional e-commerce website for S S Fabric using WordPress.",
        "Implemented user-friendly navigation, product catalog, and secure payment integration.",
        "Hosted the website online: ssfabrics.000.pe for real-time customer access.",
        "Enhanced website performance and responsiveness for a seamless shopping experience."
      ],
      link: "https://ssfabrics.000.pe"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4 font-heading">Projects</h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my technical skills through real-world projects and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow animate-fade-in overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-portfolio-dark mb-1">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600">{project.organization}</CardDescription>
                  </div>
                  <div className="p-3 bg-portfolio-light rounded-lg">
                    {project.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="mb-4 text-gray-700">{project.description}</p>
                <ul className="space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-portfolio-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{point}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              {project.link !== "#" && (
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="text-portfolio-primary border-portfolio-primary hover:bg-portfolio-light">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <span>Visit Project</span>
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
