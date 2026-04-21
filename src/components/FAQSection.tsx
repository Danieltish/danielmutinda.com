export default function FAQSection() {
  return (
    <section id="faq" className="container mx-auto px-6 py-12 md:py-20 lg:py-24 max-w-5xl scroll-mt-20 bg-muted/30 rounded-3xl">
      <div className="text-center w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-8">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="space-y-8 mt-6 sm:mt-8 w-full max-w-3xl mx-auto text-left">
        <div className="bg-card p-6 rounded-2xl border">
          <h3 className="font-bold text-lg sm:text-xl">What do you do?</h3>
          <p className="text-base text-muted-foreground mt-2 leading-relaxed">I build full-stack web applications and scalable software systems.</p>
        </div>
        <div className="bg-card p-6 rounded-2xl border">
          <h3 className="font-bold text-lg sm:text-xl">Are you available for freelance work?</h3>
          <p className="text-base text-muted-foreground mt-2 leading-relaxed">Currently, I am open to exciting new opportunities and projects. Feel free to reach out via the Contact form below.</p>
        </div>
        <div className="bg-card p-6 rounded-2xl border">
          <h3 className="font-bold text-lg sm:text-xl">What is your favorite tech stack?</h3>
          <p className="text-base text-muted-foreground mt-2 leading-relaxed">I specialize in React, Next.js, Node.js, and modern CSS frameworks like Tailwind.</p>
        </div>
      </div>
    </section>
  );
}
