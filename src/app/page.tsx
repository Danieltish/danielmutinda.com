import Link from "next/link";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center pt-24 pb-12 px-6 sm:px-8 md:pt-32 md:pb-16 lg:px-12 w-full min-h-[85vh]">
        <div className="max-w-3xl text-center space-y-6 md:space-y-8 flex flex-col items-center">
          
          {/* Profile Avatar */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-2 md:mb-4 rounded-full overflow-hidden shadow-2xl ring-4 ring-background outline outline-2 outline-border/50">
            <Image 
              src="/profile.jpg" 
              alt="Daniel Mutinda" 
              fill 
              className="object-cover transform hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Hi, I'm Daniel Mutinda
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
            Software Engineer & Creative Developer building digital experiences that matter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 md:pt-4 w-full px-4 sm:px-0">
            <Link 
              href="#projects" 
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors bg-foreground text-background hover:bg-foreground/90 h-12 md:h-14 px-8 py-2 md:text-base border border-transparent shadow-sm"
            >
              View Projects
            </Link>
            <Link 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 md:h-14 px-8 py-2 md:text-base shadow-sm"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Single Page Sections */}
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      
      {/* Footer padding */}
      <div className="pb-24"></div>
    </div>
  );
}
