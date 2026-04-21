"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Disabled form functionality as requested
    alert("This generic form is currently unworkable, please use the WhatsApp button to reach me!");
  };

  return (
    <div className="container mx-auto p-8 max-w-6xl pt-20">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground">
          Have a question, a project in mind, or just want to chat? Pick your preferred way to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Side: Standard Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input type="text" id="name" name="name" required className="flex h-11 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input type="email" id="email" name="email" required className="flex h-11 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" name="message" required className="flex min-h-[150px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-none" placeholder="What's on your mind?..." />
            </div>
            <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] h-11 px-8 py-2 w-full sm:w-auto">
              Submit Message
            </button>
          </form>
        </div>

        {/* Right Side: Direct Contact Methods */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Direct Contact</h2>
            <div className="grid gap-4">
              <a 
                href="https://wa.me/254717376964?text=Hi%20Daniel,%20I'm%20reaching%20out%20from%20your%20website!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative overflow-hidden rounded-2xl border bg-card p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left transition-all hover:border-[#25D366]/50 hover:shadow-xl hover:shadow-[#25D366]/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="h-16 w-16 shrink-0 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                </div>
                
                <div className="flex-1 relative z-10">
                  <h3 className="font-semibold text-xl mb-1 group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Fastest way to get a response. Hit me up anytime!</p>
                  <span className="inline-flex items-center text-sm font-medium text-[#25D366]">
                    Start conversation
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
