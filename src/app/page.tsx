import Link from "next/link";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A full-stack software engineer crafting robust digital experiences. 
            I build fast, beautiful, and scalable applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center w-full">
            <Link 
              href="#projects" 
              className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 py-2 text-sm font-bold text-background shadow transition-colors hover:bg-foreground/90 w-full sm:w-auto hover:scale-105 duration-300"
            >
              View My Work
            </Link>
            <Link 
              href="#contact" 
              className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 py-2 text-sm font-bold shadow-sm transition-colors hover:bg-muted hover:text-foreground w-full sm:w-auto hover:scale-105 duration-300"
            >
              Contact Me
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
      
      {/* Global Footer */}
      <Footer />
    </div>
  );
}
