export default function Projects() {
  return (
    <div className="container mx-auto p-8 max-w-4xl pt-20">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
        Projects
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Here are some of the things I've built.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Placeholder for project cards */}
        <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow bg-card">
          <h2 className="font-semibold text-xl mb-2">Project One</h2>
          <p className="text-muted-foreground">A brief description of this awesome project and what it does.</p>
        </div>
        <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow bg-card">
          <h2 className="font-semibold text-xl mb-2">Project Two</h2>
          <p className="text-muted-foreground">Another cool thing I created using modern web technologies.</p>
        </div>
      </div>
    </div>
  );
}
