import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile-image.png";

const About = () => {
  const skills = [
    { name: "Frontend", technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { name: "Backend", technologies: ["Node.js", "Express", "Python", "MongoDB"] },
    { name: "Tools", technologies: ["Git", "Docker", "AWS", "Figma"] },
    { name: "Learning", technologies: ["Vue.js", "GraphQL", "Microservices", "DevOps"] }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src={profileImage}
              alt="Ghousia"
              className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As an aspiring full-stack developer, I'm on an exciting journey of continuous learning and growth. 
              My passion lies in creating web applications that not only look beautiful but also provide 
              exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and staying updated with the latest technologies. 
              Every project is an opportunity to learn something new and push the boundaries of what's possible.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillCategory, index) => (
            <Card 
              key={skillCategory.name}
              className="p-6 bg-gradient-card border-0 hover:shadow-soft transition-all duration-300 hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <h4 className="text-lg font-semibold mb-4 text-primary">{skillCategory.name}</h4>
              <ul className="space-y-2">
                {skillCategory.technologies.map((tech) => (
                  <li key={tech} className="text-muted-foreground text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;