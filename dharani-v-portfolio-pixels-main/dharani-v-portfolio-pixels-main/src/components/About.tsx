export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft">
          <p className="text-lg leading-relaxed text-foreground/80 text-center">
            Passionate about blending creativity with technology, I craft intuitive
            and engaging digital experiences as a UI/UX Designer. I integrate
            AI-driven insights into user-centric designs to enhance accessibility and
            efficiency. I love collaborating, innovating, and creating impactful
            digital solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Languages</h3>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                  Tamil
                </span>
                <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                  English
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Location</h3>
              <p className="text-foreground/70">Based in India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
