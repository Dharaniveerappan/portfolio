import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  development: string[];
  link: string;
  color: string;
}

export const ProjectCard = ({
  title,
  description,
  tools,
  development,
  link,
  color,
}: ProjectCardProps) => {
  return (
    <div className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-2">
      {/* Color accent bar */}
      <div className={`w-16 h-1 ${color} rounded-full mb-6`}></div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
        {title}
      </h3>

      <p className="text-foreground/70 leading-relaxed mb-6">{description}</p>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-sm font-semibold text-primary mb-2">Design Tools</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-secondary mb-2">
            Development
          </h4>
          <div className="flex flex-wrap gap-2">
            {development.map((dev) => (
              <span
                key={dev}
                className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
              >
                {dev}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Button
        asChild
        className="w-full rounded-full group-hover:shadow-glow transition-smooth"
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-4 w-4" />
          View on GitHub
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};
