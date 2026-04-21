export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12 md:p-8 max-w-4xl md:pt-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
        Projects
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground mb-8">
        Here are some of the things I've built.
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {/* Placeholder for project cards */}
        <div className="border rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow bg-card">
          <h2 className="font-semibold text-lg sm:text-xl mb-2">Project One</h2>
          <p className="text-sm sm:text-base text-muted-foreground">A brief description of this awesome project and what it does.</p>
        </div>
        <div className="border rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow bg-card">
          <h2 className="font-semibold text-lg sm:text-xl mb-2">Project Two</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Another cool thing I created using modern web technologies.</p>
        </div>
      </div>
    </div>
  );
}
