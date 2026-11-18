import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialProfiles } from "@/data/portfolio";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32 md:pt-36">
      <div className="technical-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="ambient-glow pointer-events-none absolute -right-40 top-10 h-[36rem] w-[36rem]" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border bg-card/70 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="status-dot" />
              Open to internships & impactful collaborations
            </div>

            <p className="mono-label mb-5">Sahil Singh · Full-stack developer</p>
            <h1 className="max-w-4xl font-heading text-[clamp(3.2rem,7vw,6.7rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
              Full-stack systems.
              <span className="mt-2 block text-primary">AI with purpose.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              I design and ship production-grade platforms across security, healthcare and machine learning—turning complex workflows into useful, accessible products.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl px-6 font-semibold">
                <a href="#projects">Explore flagship work <ArrowUpRight /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-border bg-card/60 px-6 hover:bg-secondary hover:text-foreground">
                <a href="#contact">Build something together</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Haryana, India</span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <a href={socialProfiles.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary" aria-label="Sahil's GitHub profile"><Github className="h-4 w-4" /> GitHub</a>
              <a href={socialProfiles.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary" aria-label="Sahil's LinkedIn profile"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="absolute -inset-8 -z-10 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
            <div className="glass-panel animate-float-soft relative overflow-hidden rounded-3xl">
              <div className="flex items-center justify-between border-b px-5 py-4">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">developer.config.ts</span>
              </div>

              <div className="relative p-5 sm:p-7">
                <div className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-primary/40" aria-hidden="true" />
                <div className="mb-7 flex items-center gap-4 rounded-2xl border bg-secondary/45 p-4">
                  <img src="/lovable-uploads/6fd8b17f-1d86-4c8b-94ca-553899f606ad.png" alt="Sahil Singh" className="h-16 w-16 rounded-2xl border object-cover" />
                  <div>
                    <p className="font-heading text-lg font-semibold">Sahil Singh</p>
                    <p className="mt-1 font-mono text-xs text-primary">Full-stack · AI/ML · Systems</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-code p-5 font-mono text-xs leading-7 text-code-foreground sm:text-sm">
                  <p><span className="text-primary">const</span> developer = {"{"}</p>
                  <p className="pl-4">focus: <span className="text-accent">"useful intelligence"</span>,</p>
                  <p className="pl-4">stack: [<span className="text-accent">"React"</span>, <span className="text-accent">"Node"</span>, <span className="text-accent">"AI"</span>],</p>
                  <p className="pl-4">approach: <span className="text-accent">"design → build → ship"</span>,</p>
                  <p className="pl-4">status: <span className="text-accent">"always learning"</span><span className="animate-caret text-primary">_</span></p>
                  <p>{"}"};</p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border bg-secondary/35 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Now building</p>
                    <p className="mt-2 text-sm font-semibold">Drishti + Seva-Setu</p>
                  </div>
                  <div className="rounded-xl border bg-secondary/35 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Learning</p>
                    <p className="mt-2 text-sm font-semibold">Systems at scale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 divide-x border-y py-6 md:mt-20">
          {[['03', 'Flagship products'], ['4-tier', 'RBAC architecture'], ['AI + ML', 'Applied to real problems']].map(([value, label]) => (
            <div key={label} className="px-3 text-center sm:px-6 md:text-left">
              <p className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">{value}</p>
              <p className="mt-1 text-[11px] leading-4 text-muted-foreground sm:text-sm">{label}</p>
            </div>
          ))}
        </div>

        <a href="#about" aria-label="Scroll to about section" className="absolute bottom-4 right-5 hidden h-10 w-10 place-items-center rounded-full border text-muted-foreground transition-colors hover:border-primary hover:text-primary md:grid">
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
