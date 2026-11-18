import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Work", href: "#projects", id: "projects" },
  { name: "Live stats", href: "#live-stats", id: "live-stats" },
  { name: "Stack", href: "#skills", id: "skills" },
  { name: "Journey", href: "#experience", id: "experience" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", ...navLinks.map((link) => link.id), "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Primary navigation"
        className={cn(
          "container relative flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300",
          scrolled || isMenuOpen ? "border-border bg-background/90 shadow-lg backdrop-blur-xl" : "border-transparent bg-background/55 backdrop-blur-md",
        )}
      >
        <a href="#home" className="flex items-center gap-3 font-heading text-lg font-semibold tracking-tight" aria-label="Sahil Singh, home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary font-mono text-xs font-bold text-primary-foreground">SS</span>
          <span>sahil<span className="text-primary">.dev</span></span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                activeSection === link.id ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden rounded-xl sm:inline-flex" size="sm">
            <a href="#contact">Let's talk <ArrowUpRight /></a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-2xl border bg-popover p-3 shadow-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="mt-2 rounded-xl">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Start a conversation <ArrowUpRight /></a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
