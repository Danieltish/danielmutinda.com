export default function FAQ() {
  return (
    <div className="container mx-auto px-6 py-12 md:p-8 max-w-4xl md:pt-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6 mt-6 sm:mt-8">
        <div>
          <h3 className="font-semibold text-base sm:text-lg">What do you do?</h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">I build full-stack web applications and scalable software systems.</p>
        </div>
        <div>
          <h3 className="font-semibold text-base sm:text-lg">Are you available for freelance work?</h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">Currently, I am open to exciting new opportunities and projects. Feel free to reach out via the Contact page.</p>
        </div>
        <div>
          <h3 className="font-semibold text-base sm:text-lg">What is your favorite tech stack?</h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">I specialize in React, Next.js, Node.js, and modern CSS frameworks like Tailwind.</p>
        </div>
      </div>
    </div>
  );
}
