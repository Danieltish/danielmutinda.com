"use client";

import { FormEvent } from "react";
import { Mail } from "lucide-react";

export default function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("This generic form is currently unworkable, please use the WhatsApp button to reach me!");
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-12 md:py-20 lg:py-24 max-w-5xl scroll-mt-20">
      <div className="max-w-2xl mx-auto mb-12 lg:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
          Get in Touch
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Have a question, a project in mind, or just want to chat? Pick your preferred way to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start text-left w-full mx-auto">
        {/* Left Side: Standard Form */}
        <div className="order-2 lg:order-1 bg-card p-6 sm:p-10 rounded-3xl border shadow-sm w-full mx-auto max-w-xl lg:max-w-none">
          <h3 className="text-xl sm:text-2xl font-bold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold">Name</label>
              <input type="text" id="name" name="name" required className="flex h-12 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold">Email</label>
              <input type="email" id="email" name="email" required className="flex h-12 w-full rounded-lg border border-input bg-background/50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold">Message</label>
              <textarea id="message" name="message" required className="flex min-h-[150px] w-full rounded-lg border border-input bg-background/50 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors resize-none" placeholder="What's on your mind?..." />
            </div>
            <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold tracking-wide ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] h-12 px-8 py-2 w-full sm:w-auto shadow-md">
              Submit Message
            </button>
          </form>
        </div>

        {/* Right Side: Direct Contact Methods */}
        <div className="order-1 lg:order-2 space-y-8 lg:sticky top-32 w-full mx-auto max-w-xl lg:max-w-none">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Direct Contact</h3>
            <div className="flex flex-col gap-4">
              
              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/254717376964?text=Hi%20Daniel,%20I'm%20reaching%20out%20from%20your%20website!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative overflow-hidden rounded-2xl border bg-card p-5 sm:p-6 flex items-center gap-5 transition-all duration-300 hover:border-[#25D366]/50 hover:shadow-xl hover:shadow-[#25D366]/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-14 w-14 shrink-0 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                </div>
                <div className="flex-1 relative z-10 w-full text-left">
                  <h4 className="font-extrabold text-lg group-hover:text-[#25D366] transition-colors duration-300">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">+254 717 376 964</p>
                </div>
              </a>

              {/* Gmail Card */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Danieltmutinda@gmail.com&su=Reaching%20out%20from%20your%20portfolio!&body=Hi%20Daniel,%0A%0AI%20was%20looking%20at%20your%20website%20and%20wanted%20to%20get%20in%20touch%20about..." 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border bg-card p-5 sm:p-6 flex items-center gap-5 transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-14 w-14 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-500">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="flex-1 relative z-10 w-full text-left">
                  <h4 className="font-extrabold text-lg group-hover:text-red-500 transition-colors duration-300">Email Me</h4>
                  <p className="text-sm text-muted-foreground truncate max-w-[200px] sm:max-w-none">Danieltmutinda@gmail.com</p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                {/* LinkedIn Card */}
                <a 
                  href="https://linkedin.com/in/daniel-titus-684186401" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative overflow-hidden rounded-2xl border bg-card p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:border-[#0077B5]/50 hover:shadow-xl hover:shadow-[#0077B5]/10 hover:-translate-y-1 text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-[#0077B5]/10 flex items-center justify-center text-[#0077B5] group-hover:scale-110 group-hover:bg-[#0077B5] group-hover:text-white transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base group-hover:text-[#0077B5] transition-colors duration-300">LinkedIn</h4>
                </a>

                {/* GitHub Card */}
                <a 
                  href="https://github.com/Danieltish" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative overflow-hidden rounded-2xl border bg-card p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:border-foreground/50 hover:shadow-xl hover:-translate-y-1 text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground group-hover:scale-110 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base transition-colors duration-300">GitHub</h4>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
