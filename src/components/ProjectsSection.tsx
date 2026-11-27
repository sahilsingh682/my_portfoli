import { NextSection } from "@/components/NextSection";
import { ArrowRight, ArrowUpRight, BrainCircuit, Check, Github, GraduationCap, HeartPulse, ShieldCheck, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { archivedProjects, projects, type ProjectKind } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const projectIcons = {
  security: ShieldCheck,
  health: HeartPulse,
  ml: BrainCircuit,
  agriculture: Sprout,
  education: GraduationCap,
};

function ProjectVisual({ kind, flow, index, image, title, live }: { kind: ProjectKind; flow: string[]; index: number; image: string; title: string; live: string }) {
  const Icon = projectIcons[kind];
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-code text-code-foreground">
      <div className="flex items-center gap-3 border-b border-code-foreground/10 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        </div>
        <span className="min-w-0 flex-1 truncate rounded-md bg-code-foreground/[0.06] px-3 py-1 font-mono text-[10px] text-code-foreground/60">{live.replace(/^https?:\/\//, "").replace(/\/.*$/, "")}</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent"><span className="status-dot" /> Live</span>
      </div>
      <a href={live} target="_blank" rel="noopener noreferrer" className="relative block aspect-[16/10] overflow-hidden" aria-label={`Open ${title} live`}>
        <img src={image} alt={`${title} live homepage`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-code via-code/10 to-transparent opacity-80" />
        <span className="absolute right-4 top-4 font-mono text-xs text-primary">0{index + 1}</span>
      </a>
      <div className="flex flex-wrap items-center gap-2 p-4">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span>
        {flow.map((step, i) => (
          <span key={step} className="inline-flex items-center gap-2 font-mono text-[10px] text-code-foreground/70">
            {step}{i < flow.length - 1 && <ArrowRight className="h-3 w-3 text-primary/60" />}
          </span>
        ))}
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
            description="Full-stack products and collaborative work across security, healthcare, machine learning, smart farming and developer education."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={80}>
              <article className="grid gap-8 rounded-3xl border bg-card p-5 shadow-sm sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-9">
                <div className={cn("lg:col-span-6", index % 2 === 1 && "lg:order-2")}>
                  <ProjectVisual kind={project.kind} flow={project.flow} index={index} image={project.image} title={project.title} live={project.live} />
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

        <Reveal className="mt-16 border-t pt-10">
          <p className="mono-label">Earlier work</p>
          <h3 className="mt-3 font-heading text-2xl font-semibold">Project archive</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {archivedProjects.map((project) => (
              <article key={project.id} className="flex flex-col rounded-lg border bg-card p-5">
                <p className="font-mono text-[10px] text-primary">{project.category}</p>
                <h4 className="mt-3 font-heading text-xl font-semibold">{project.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => <span key={tech} className="rounded-md bg-secondary px-2 py-1 font-mono text-[10px] text-secondary-foreground">{tech}</span>)}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.live && <Button asChild size="sm" variant="outline"><a href={project.live} target="_blank" rel="noopener noreferrer">Visit project <ArrowUpRight /></a></Button>}
                  {project.repo && <Button asChild size="sm" variant="ghost"><a href={project.repo} target="_blank" rel="noopener noreferrer"><Github /> Source</a></Button>}
                  {!project.live && !project.repo && <span className="text-xs text-muted-foreground">University project · No public demo</span>}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
        <NextSection href="#live-stats" label="Watch live coding stats" />
      </div>
    </section>
  );
};

export default ProjectsSection;
