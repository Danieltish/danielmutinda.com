import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold inline-block">danielmutinda.com</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium">
              About
            </Link>
            <Link href="/projects" className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium">
              Projects
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium">
              Blog
            </Link>
            <Link href="/faq" className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
        </div>
      </div>
    </nav>
  );
}
