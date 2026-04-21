export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Danieltish", icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    )},
    { name: "LinkedIn", url: "https://linkedin.com/in/daniel-titus-684186401", icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    )},
    { name: "Instagram", url: "https://www.instagram.com/danielmutindadev/", icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    )},
    { name: "TikTok", url: "https://www.tiktok.com/@danielmutinda288", icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
    )},
  ];

  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-950 text-zinc-100 pt-16 pb-12 mt-12">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h3 className="text-xl font-bold mb-8 text-white">Daniel Mutinda</h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white hover:-translate-y-1 transition-all duration-300 p-3 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm hover:shadow-md"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
        <p className="text-center text-sm text-zinc-500 font-medium">
          © {currentYear} Daniel Mutinda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
