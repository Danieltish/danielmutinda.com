export default function Blog() {
  return (
    <div className="container mx-auto p-8 max-w-4xl pt-20">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
        Blog
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Writing about software development, tech, and life.
      </p>
      <div className="space-y-8">
        {/* Placeholder for blog posts */}
        <article className="group relative flex flex-col space-y-2 border-b pb-6">
          <h2 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
            <a href="#">Getting Started with Next.js App Router</a>
          </h2>
          <p className="text-muted-foreground">Learn how to build modern React applications with Next.js 14+.</p>
          <time className="text-sm text-muted-foreground">April 21, 2026</time>
        </article>
      </div>
    </div>
  );
}
