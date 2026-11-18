import { Bot, Braces, CloudCog, Database, PenTool, Rocket, ScanSearch, Workflow } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/data/portfolio";

const groupIcons = [Braces, Database, Bot, CloudCog];
const processSteps = [
  { icon: ScanSearch, label: "Understand", text: "Start with the real user and operational problem." },
  { icon: PenTool, label: "Design", text: "Make complex workflows clear and accessible." },
  { icon: Workflow, label: "Engineer", text: "Connect interface, APIs, data and intelligence." },
  { icon: Rocket, label: "Ship", text: "Deploy, observe and improve the complete product." },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-shell border-t bg-secondary/25">
      <div className="container">
        <Reveal><SectionHeading eyebrow="04 / Technical stack" title="Tools chosen for the outcome." description="A practical full-stack toolkit for building responsive interfaces, secure systems and AI-assisted products." /></Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[index];
            return (
              <Reveal key={group.title} delay={index * 70}>
                <article className="group h-full rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-semibold tracking-tight">{group.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => <span key={skill} className="rounded-lg border bg-secondary/35 px-3 py-2 font-mono text-xs text-secondary-foreground transition-colors group-hover:border-primary/20">{skill}</span>)}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12">
          <div className="rounded-3xl border bg-code p-6 text-code-foreground sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="mono-label">How I build</p><h3 className="mt-3 font-heading text-2xl font-semibold">From ambiguity to a working product.</h3></div><p className="font-mono text-xs text-code-foreground/50">no skill percentages. just process.</p></div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.label} className="relative border-t border-code-foreground/15 pt-5">
                  <span className="absolute -top-px left-0 h-px w-10 bg-primary" />
                  <step.icon className="h-5 w-5 text-primary" />
                  <p className="mt-4 font-heading font-semibold"><span className="mr-2 font-mono text-xs text-code-foreground/40">0{index + 1}</span>{step.label}</p>
                  <p className="mt-2 text-sm leading-6 text-code-foreground/65">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsSection;
