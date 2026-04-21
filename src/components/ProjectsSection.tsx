import Image from "next/image";

const projects = [
  {
    name: "CallHub360",
    description: (
      <>
        A comprehensive calling platform engineered specifically for terminating international calls. 
        Built with a highly scalable microservice architecture, it seamlessly handles cross-border communication 
        and is functioning perfectly with crystal-clear <strong>WebRTC</strong> audio integration.
      </>
    ),
    techStack: [
      "Next.js", "FastAPI", "Go (Microservices)", "Flutter", 
      "Docker", "FreePBX", "WebRTC", "Digital Ocean"
    ],
    logo: "/callhub360-logo.png",
    link: "https://dev.callhub360.com/"
  },
  {
    name: "FarmMall",
    description: (
      <>
        A leading digital farming platform designed specifically for potato farmers helping them track costs, 
        manage production and maximize profits. Integrated with Supabase to securely safeguard clients' data.
      </>
    ),
    techStack: ["Next.js", "Django (Backend)", "Supabase", "React"],
    logo: "/farmmall-logo.png",
    link: "https://farmmall.co.ke/"
  },
  {
    name: "Dacafovy",
    description: (
      <>
        A custom-made landing page for an organization specializing in professional networking, CCTV, 
        and electrical installation services across Nairobi and nearby areas.
      </>
    ),
    techStack: ["React", "JavaScript", "Tailwind CSS", "shadcn/ui", "Vercel", "Truehost"],
    logo: "/dacafovy-logo.png",
    link: "https://dacafovy.com/"
  },
  {
    name: "Mseewa ServiceNow",
    description: (
      <>
        A service platform that connects small businesses and entrepreneurs with local service providers.
      </>
    ),
    techStack: ["FastAPI", "Vue.js", "React", "shadcn/ui", "Tailwind CSS"],
    logo: "/mseewa-logo.png",
    link: "https://mseewa-service-now.vercel.app/"
  },
  {
    name: "Kahustle",
    description: (
      <>
        A dynamic platform built to empower individuals and businesses by connecting them with opportunities and services.
      </>
    ),
    techStack: ["WordPress", "PHP"],
    logo: "/kahustle-logo.png",
    link: "https://kahustle.co.ke/"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-6 py-12 md:py-20 lg:py-24 max-w-6xl scroll-mt-20">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          Featured Work
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          These are some of the projects that I have build and currently maintain
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        {projects.map((project, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-[2rem] border border-zinc-800 bg-black shadow-2xl transition-all duration-500 hover:shadow-blue-500/20">
            <div className="flex flex-col w-full">
              
              {/* Project Details */}
              <div className="p-8 sm:p-12 md:p-16 flex flex-col items-center text-center justify-center w-full">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white/5 p-3 border border-zinc-800 flex items-center justify-center shrink-0 shadow-lg">
                    <Image 
                      src={project.logo} 
                      alt={`${project.name} Logo`} 
                      width={80}
                      height={80}
                      className="object-contain" 
                    />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    {project.name}
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-zinc-400 mb-6 leading-relaxed max-w-2xl mx-auto">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs sm:text-sm font-semibold text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-8 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-500 hover:scale-105"
                  >
                    View Live Project
                    <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
