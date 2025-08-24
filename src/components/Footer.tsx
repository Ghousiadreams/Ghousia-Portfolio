import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Ghousia
            </h3>
            <p className="text-muted-foreground">
              Aspiring Full Stack Developer
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                asChild
              >
                <a 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-primary animate-pulse" /> by Ghousia
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;