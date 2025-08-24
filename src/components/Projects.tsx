import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that provides detailed weather information with interactive charts and location-based forecasts.",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills, built with modern web technologies and smooth animations.",
      technologies: ["React", "Tailwind", "Framer Motion", "Vercel"],
      github: "#",
      live: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-accent/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`p-6 bg-gradient-card border-0 hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                {project.featured && (
                  <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github size={16} />
                  Code
                </Button>
                <Button size="sm" className="flex items-center gap-2 bg-gradient-primary">
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;