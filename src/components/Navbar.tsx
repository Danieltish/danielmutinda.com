"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Blog", path: "#blog" },
    { name: "FAQ", path: "#faq" },
    { name: "Contact", path: "#contact" },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.path.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust 100px so early sections trigger correctly before hitting absolute 0
          if (rect.top <= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll(); // Trigger on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md text-zinc-100">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6 md:gap-10 w-full justify-between md:justify-start">
            <Link href="/" className="flex items-center space-x-2 z-50">
              <span className="font-bold inline-block text-white">danielmutinda.com</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.path.substring(1);
                return (
                  <Link 
                    key={link.name} 
                    href={link.path} 
                    className={`transition-all text-sm ${isActive ? 'text-white font-extrabold' : 'text-zinc-400 font-medium hover:text-zinc-200'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden z-50 p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-5 flex flex-col justify-around">
                <span className={`block w-full h-[2px] bg-zinc-100 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-full h-[2px] bg-zinc-100 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block w-full h-[2px] bg-zinc-100 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 bottom-0 top-14 z-[45] bg-zinc-950 text-zinc-100 shadow-2xl border-t border-zinc-800">
          <div className="flex flex-col px-6 py-8 gap-8 h-full overflow-y-auto w-full pb-24">
            {navLinks.map((link) => {
              const isActive = activeSection === link.path.substring(1);
              return (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className={`text-xl sm:text-2xl tracking-wide w-full block transition-colors py-2 ${isActive ? 'text-white font-extrabold' : 'text-zinc-400 font-bold hover:text-zinc-200'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
