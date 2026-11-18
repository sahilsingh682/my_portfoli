import { ArrowUp, Github, Linkedin } from "lucide-react";
import { socialProfiles } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t bg-code text-code-foreground">
      <div className="container py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#home" className="font-heading text-xl font-semibold">sahil<span className="text-primary">.dev</span></a>
            <p className="mt-2 text-sm text-code-foreground/60">Build systems that protect, empower and scale.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={socialProfiles.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-xl border border-code-foreground/15 text-code-foreground/70 hover:border-primary hover:text-primary"><Github className="h-4 w-4" /></a>
            <a href={socialProfiles.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-xl border border-code-foreground/15 text-code-foreground/70 hover:border-primary hover:text-primary"><Linkedin className="h-4 w-4" /></a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="ml-2 grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground transition-transform hover:-translate-y-1" aria-label="Scroll to top"><ArrowUp className="h-4 w-4" /></button>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-code-foreground/10 pt-6 font-mono text-[10px] uppercase tracking-wider text-code-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sahil Singh</p>
          <p>Designed & engineered with intent</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
