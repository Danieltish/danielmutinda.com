import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-8">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Hi, I'm Daniel Mutinda
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Software Engineer & Creative Developer building digital experiences that matter.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link 
            href="/projects" 
            className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors bg-foreground text-background hover:bg-foreground/90 h-12 px-8 py-2"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 py-2"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
