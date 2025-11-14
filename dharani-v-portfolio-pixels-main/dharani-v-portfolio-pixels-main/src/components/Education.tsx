import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "B.Tech – Artificial Intelligence & Data Science",
      institution: "C.K. College of Engineering & Technology",
      period: "2022-2026",
      grade: "CGPA: 8.2",
    },
    {
      degree: "HSC",
      institution: "Sri Arunachala Matric Hr.Sec School",
      period: "2021-2022",
      grade: "79.5%",
    },
  ];

  const certifications = [
    "Data Analytics with Python – NPTEL",
    "Data Science – Infosys",
    "Google UX Design Certificate – Coursera",
    "Modern Python Challenge – Infosys",
    "Basics of Business Communication – Infosys",
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-6 shadow-soft hover:shadow-medium transition-smooth"
              >
                <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                <p className="text-primary font-medium mb-1">{edu.institution}</p>
                <div className="flex items-center justify-between text-sm text-foreground/70">
                  <span>{edu.period}</span>
                  <span className="font-semibold text-secondary">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-2xl">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-soft hover:shadow-medium transition-smooth">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
