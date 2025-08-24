import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-rose-light rounded-full animate-float opacity-20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary rounded-full animate-float opacity-15" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent rounded-full animate-float opacity-10" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Hi
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Ghousia</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
                Aspiring Full Stack Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-fade-in" style={{animationDelay: '0.8s'}}>
              Building seamless, efficient, and user-friendly web experiences. 💻 Turning ideas into reality with clean code and modern technologies. 📚 Constantly evolving, learning, and staying ahead in the tech world. ⚡ Passionate about problem-solving and creating intuitive digital solutions.
            </p>
            
            <div className="animate-fade-in" style={{animationDelay: '1s'}}>
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-3 text-lg font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow"></div>
              <img
                src={profileImage}
                alt="Ghousia - Full Stack Developer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-elegant border-4 border-card animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;