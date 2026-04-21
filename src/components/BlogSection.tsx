export default function BlogSection() {
  return (
    <section id="blog" className="container mx-auto px-6 py-12 md:py-20 lg:py-24 max-w-4xl scroll-mt-20">
      <div className="text-center w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
          Blog
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-12">
          Writing about software development, tech, and life.
        </p>
      </div>
      <div className="space-y-10 w-full max-w-3xl mx-auto text-left">
        <article className="group relative flex flex-col space-y-3 border-b border-border/60 pb-8">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
            <a href="#">Getting Started with Next.js App Router</a>
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Learn how to build modern React applications with Next.js 14+.</p>
          <time className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">April 21, 2026</time>
        </article>
      </div>
    </section>
  );
}
