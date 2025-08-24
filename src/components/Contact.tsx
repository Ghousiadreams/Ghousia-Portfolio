import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ghousia@example.com",
      link: "mailto:ghousia@example.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Available Worldwide",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-0 shadow-elegant">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background/50 border-muted focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background/50 border-muted focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  className="bg-background/50 border-muted focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="bg-background/50 border-muted focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <img
                  src={profileImage}
                  alt="Ghousia"
                  className="w-32 h-32 rounded-full shadow-elegant mx-auto lg:mx-0"
                />
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.label}
                  className="p-4 bg-gradient-card border-0 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;