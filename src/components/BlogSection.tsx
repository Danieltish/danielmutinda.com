export default function BlogSection() {
  const posts = [
    {
      title: "Shipping Product Features Faster with AI Pair Programming",
      excerpt:
        "A practical workflow for planning, coding, and reviewing features with AI while keeping quality high.",
      date: "May 10, 2026",
      href: "#",
    },
    {
      title: "From Idea to MVP: Building SaaS Products That Users Actually Want",
      excerpt:
        "How to validate assumptions early, scope ruthlessly, and launch faster without overengineering.",
      date: "April 21, 2026",
      href: "#",
    },
    {
      title: "Designing Scalable Next.js Architectures for Growing Teams",
      excerpt:
        "Lessons from structuring app routes, components, and data boundaries for long-term maintainability.",
      date: "March 30, 2026",
      href: "#",
    },
    {
      title: "Improving Developer Experience with Better Tooling and CI",
      excerpt:
        "Small DX improvements that cut feedback loops and help teams ship confidently every sprint.",
      date: "March 8, 2026",
      href: "#",
    },
  ];

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
        {posts.map((post) => (
          <article key={post.title} className="group relative flex flex-col space-y-3 border-b border-border/60 pb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
              <a href={post.href}>{post.title}</a>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <time className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">{post.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
}
