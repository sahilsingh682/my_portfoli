import { ArrowRight, ArrowUpRight, BrainCircuit, Check, Github, HeartPulse, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { projects, type ProjectKind } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const projectIcons = {
  security: ShieldCheck,
  health: HeartPulse,
  ml: BrainCircuit,
};

function ArchitectureVisual({ kind, flow, index }: { kind: ProjectKind; flow: string[]; index: number }) {
  const Icon = projectIcons[kind];
  return (
    <div className="relative min-h-[310px] overflow-hidden rounded-2xl border bg-code p-5 text-code-foreground sm:p-7">
      <div className="technical-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="animate-scan absolute inset-x-0 top-0 h-px bg-primary/50" aria-hidden="true" />
      <div className="relative flex h-full min-h-[258px] flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-code-foreground/60">System architecture</span>
          <span className="font-mono text-xs text-primary">0{index + 1}</span>
        </div>
        <div className="my-7 grid grid-cols-2 gap-3">
          {flow.map((step, stepIndex) => (
            <div key={step} className="group rounded-xl border border-code-foreground/10 bg-code-foreground/[0.04] p-4 transition-colors hover:border-primary/50">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-primary">0{stepIndex + 1}</span>
                {stepIndex < flow.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-code-foreground/30" />}
              </div>
              <p className="mt-3 font-heading text-sm font-medium sm:text-base">{step}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 border-t border-code-foreground/10 pt-5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
          <div><p className="text-sm font-semibold">Designed as a complete system</p><p className="mt-0.5 text-xs text-code-foreground/60">Interface · logic · data · delivery</p></div>
        </div>
      </div>
    </div>
  );
}

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-shell border-t bg-secondary/25">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="02 / Flagship work"
            title="Products with a job to do."
            description="Three end-to-end builds across secure commerce, accessible healthcare and predictive intelligence. Each one is live and open to explore."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={80}>
              <article className="grid gap-8 rounded-3xl border bg-card p-5 shadow-sm sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-9">
                <div className={cn("lg:col-span-6", index % 2 === 1 && "lg:order-2")}>
                  <ArchitectureVisual kind={project.kind} flow={project.flow} index={index} />
                </div>
                <div className={cn("flex flex-col lg:col-span-6", index % 2 === 1 && "lg:order-1")}>
                  <p className="mono-label">{project.label}</p>
                  <h3 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{project.title}</h3>
                  <p className="mt-3 font-heading text-lg text-primary">{project.tagline}</p>
                  <p className="mt-5 leading-7 text-muted-foreground">{project.description}</p>
                  <ul className="mt-6 space-y-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => <span key={tech} className="rounded-md bg-secondary px-2.5 py-1.5 font-mono text-[10px] text-secondary-foreground">{tech}</span>)}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3 pt-2">
                    <Button asChild className="rounded-xl">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">Open live product <ArrowUpRight /></a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-xl bg-transparent hover:bg-secondary hover:text-foreground">
                      <a href={project.repo} target="_blank" rel="noopener noreferrer"><Github /> Source code</a>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col gap-5 rounded-2xl border border-dashed p-6 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="mono-label">Also contributing</p><p className="mt-2 text-sm text-muted-foreground">AgroTech Smart Farming · Growtix EdTech documentation</p></div>
            <a href="https://github.com/AgroTech-Smart-Farming-Solutions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">View collaboration <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
