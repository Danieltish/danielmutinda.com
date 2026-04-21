"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Blog", path: "#blog" },
    { name: "FAQ", path: "#faq" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6 md:gap-10 w-full justify-between md:justify-start">
            <Link href="/" className="flex items-center space-x-2 z-50">
              <span className="font-bold inline-block">danielmutinda.com</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path} className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden z-50 p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-5 flex flex-col justify-around">
                <span className={`block w-full h-[2px] bg-foreground transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-full h-[2px] bg-foreground transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block w-full h-[2px] bg-foreground transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 bottom-0 top-14 z-[45] bg-background shadow-xl border-t border-border/40">
          <div className="flex flex-col px-6 py-8 gap-8 h-full overflow-y-auto w-full pb-24">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className="text-foreground text-xl sm:text-2xl font-bold tracking-wide w-full block hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
