import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-foreground/70">
            Designed & Built by{" "}
            <span className="font-semibold text-primary">Dharani V</span>
          </p>
          <p className="text-sm text-foreground/60 flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-secondary fill-secondary" /> using
            React & Tailwind CSS
          </p>
          <p className="text-sm text-foreground/50">
            © {currentYear} Dharani V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
