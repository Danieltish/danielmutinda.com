import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-6 py-12 md:py-20 lg:py-24 max-w-6xl scroll-mt-20">
      <div className="text-center md:text-left flex flex-col items-center md:items-start mb-8 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Text Context */}
        <div className="prose dark:prose-invert max-w-none text-base sm:text-lg text-center md:text-left order-2 md:order-1">
          <p className="leading-7 sm:leading-8 text-muted-foreground font-medium">
            Hello! I'm Daniel Mutinda. Welcome to my personal slice of the internet where logic meets creativity.
          </p>
          <p className="leading-7 sm:leading-8 mt-6 text-muted-foreground">
            I specialize in crafting high-performance, full-stack applications. My sweet spot lies at the intersection of robust backend infrastructure and breathtaking frontend aesthetics. I don't just write code; I strive to engineer experiences that people actually love using.
          </p>
          <p className="leading-7 sm:leading-8 mt-6 text-muted-foreground">
            Whether it's deploying scalable microservices, spinning up pixel-perfect UI, or diving deep into database optimization, I am constantly learning and refining my craft to build the very best solutions possible.
          </p>
        </div>

        {/* Right Side: Coding Image */}
        <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-800/50 group order-1 md:order-2">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10 mix-blend-overlay pointer-events-none" />
          <Image 
            src="/coding-setup.jpg" 
            alt="Daniel coding on laptop" 
            fill 
            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
            priority
          />
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] z-20 pointer-events-none rounded-[2rem]" />
        </div>
      </div>
    </section>
  );
}

