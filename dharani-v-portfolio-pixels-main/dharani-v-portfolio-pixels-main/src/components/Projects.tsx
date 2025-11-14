import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "StudyMate AI – Smart Study Planner Website",
      description:
        "A study planner website helping students manage time and tasks easily, including AI-powered smart study tips. Clean UI and simple navigation.",
      tools: ["Figma", "FigJam", "Adobe Illustrator", "Notion"],
      development: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/Dharaniveerappan/Study_ai_planner",
      color: "bg-primary",
    },
    {
      title: "FoodieFi – Restaurant Ordering App",
      description:
        "Mobile app for ordering food, tracking delivery, and rating dishes. Designed for smooth user experience and intuitive navigation.",
      tools: ["Figma", "FigJam", "ProtoPie"],
      development: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Dharaniveerappan/online_food_application",
      color: "bg-secondary",
    },
    {
      title: "HealthConnect – Telemedicine App",
      description:
        "Telemedicine app connecting patients and doctors for online consultations, appointment booking, and health tracking.",
      tools: ["Figma", "ProtoPie", "Adobe XD"],
      development: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      link: "https://github.com/Dharaniveerappan/Health_care",
      color: "bg-primary",
    },
    {
      title: "EventHub – Event Booking Website",
      description:
        "A website for booking events and tickets with interactive calendars, filters, and modern UI elements.",
      tools: ["Figma", "Adobe XD", "Canva"],
      development: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/Dharaniveerappan/event_hub",
      color: "bg-secondary",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore my portfolio of design and development projects, showcasing
            user-centric solutions across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
