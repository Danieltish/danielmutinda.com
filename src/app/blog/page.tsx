export default function Blog() {
  return (
    <div className="container mx-auto px-6 py-12 md:p-8 max-w-4xl md:pt-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
        Blog
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground mb-8">
        Writing about software development, tech, and life.
      </p>
      <div className="space-y-8">
        {/* Placeholder for blog posts */}
        <article className="group relative flex flex-col space-y-2 border-b pb-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
            <a href="#">Getting Started with Next.js App Router</a>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">Learn how to build modern React applications with Next.js 14+.</p>
          <time className="text-xs sm:text-sm text-muted-foreground">April 21, 2026</time>
        </article>
      </div>
    </div>
  );
}
