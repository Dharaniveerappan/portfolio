import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 gradient-hero"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-primary font-semibold">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Dharani V
              </h1>
              <h3 className="text-2xl md:text-3xl text-muted-foreground">
                UI/UX Designer
              </h3>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              Passionate about blending creativity with technology, I craft intuitive
              and engaging digital experiences. I integrate AI-driven insights into
              user-centric designs to enhance accessibility and efficiency.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="rounded-full shadow-medium hover:shadow-glow transition-smooth"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://www.behance.net/dharanidharu5/editor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Portfolio
                </a>
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:dharaniveerappan18@gmail.com"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-smooth"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="tel:+919025692017"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-smooth"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm">Phone</span>
              </a>
              <a
                href="https://rb.gy/ta2lti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Dharaniveerappan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-smooth"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-float">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 gradient-primary rounded-[3rem] opacity-20 blur-3xl"></div>
              <img
                src={heroImage}
                alt="Dharani V - UI/UX Designer"
                className="relative w-full h-full object-cover rounded-[3rem] shadow-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
