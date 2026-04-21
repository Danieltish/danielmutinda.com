export default function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-6 py-12 md:py-20 lg:py-24 max-w-5xl scroll-mt-20 bg-muted/30 rounded-3xl">
      <div className="text-center w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
          Projects
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-12">
          Here are some of the things I've built.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 text-left relative z-10 w-full max-w-4xl mx-auto">
        <div className="border rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow bg-card h-full">
          <h3 className="font-bold text-xl sm:text-2xl mb-3">Project One</h3>
          <p className="text-muted-foreground leading-relaxed">A brief description of this awesome project and what it does.</p>
        </div>
        <div className="border rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow bg-card h-full">
          <h3 className="font-bold text-xl sm:text-2xl mb-3">Project Two</h3>
          <p className="text-muted-foreground leading-relaxed">Another cool thing I created using modern web technologies.</p>
        </div>
      </div>
    </section>
  );
}
