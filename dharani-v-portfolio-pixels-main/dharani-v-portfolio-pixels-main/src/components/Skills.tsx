import { Palette, Code2, Sparkles } from "lucide-react";

export const Skills = () => {
  const designTools = [
    "Figma",
    "Adobe XD",
    "Canva",
    "Photoshop",
    "ProtoPie",
    "FigJam",
    "Adobe Illustrator",
    "Notion",
  ];

  const technicalSkills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "Python",
    "C",
    "Java",
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Design Tools */}
          <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-smooth">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Design Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {designTools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-muted hover:bg-primary/10 rounded-full text-sm font-medium transition-smooth cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-smooth">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-2xl">
                <Code2 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted hover:bg-secondary/10 rounded-full text-sm font-medium transition-smooth cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Highlight */}
        <div className="mt-8 bg-gradient-primary rounded-3xl p-8 text-center text-primary-foreground shadow-medium">
          <Sparkles className="h-8 w-8 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">AI-Driven Design Integration</h3>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Specializing in integrating AI-driven insights to create user-centric
            designs that enhance accessibility and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};
