import { NextSection } from "@/components/NextSection";
import { ArrowUpRight, BookOpen, GraduationCap, Lightbulb, Medal } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { socialProfiles } from "@/data/portfolio";

const EducationSection = () => {
  return (
    <section id="education" className="section-shell border-t bg-secondary/25">
      <div className="container">
        <Reveal><SectionHeading eyebrow="06 / Foundation" title="Computer science, applied." /></Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className="relative h-full overflow-hidden rounded-3xl border bg-card p-7 sm:p-9">
              <div className="absolute right-0 top-0 p-7 font-heading text-8xl font-semibold leading-none text-secondary" aria-hidden="true">GU</div>
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><GraduationCap className="h-6 w-6" /></span>
                <p className="mono-label mt-8">2023 — Present</p>
                <h3 className="mt-4 font-heading text-3xl font-semibold tracking-tight">B.Tech in Computer Science & Engineering</h3>
                <p className="mt-3 text-lg text-muted-foreground">Geeta University · Panipat, Haryana</p>
                <p className="mt-7 max-w-xl leading-7 text-muted-foreground">Building a strong base in programming, data structures, databases and machine learning while applying those concepts to live, full-stack products.</p>
                <div className="mt-7 flex flex-wrap gap-2">{["DSA", "OOP", "Databases", "AI & ML", "Software engineering"].map((subject) => <span key={subject} className="rounded-full border px-3 py-1.5 text-xs text-secondary-foreground">{subject}</span>)}</div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={80}>
              <article className="rounded-3xl border bg-card p-7">
                <div className="flex items-center gap-3"><Medal className="h-5 w-5 text-primary" /><h3 className="font-heading text-xl font-semibold">Beyond coursework</h3></div>
                <ul className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
                  <li className="flex gap-3"><BookOpen className="mt-1 h-4 w-4 shrink-0 text-primary" />Authored technical documentation for the Growtix EdTech platform.</li>
                  <li className="flex gap-3"><Lightbulb className="mt-1 h-4 w-4 shrink-0 text-primary" />Coordinated university programs and earned recognition certificates.</li>
                </ul>
              </article>
            </Reveal>
            <Reveal delay={140}>
              <a href={socialProfiles.orcid} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-3xl border bg-card p-7 transition-colors hover:border-primary/40">
                <div><p className="mono-label">Research identity</p><p className="mt-2 font-heading text-lg font-semibold">ORCID · 0009-0003-6549-6449</p></div><ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </Reveal>
          </div>
        </div>
        <NextSection href="#contact" label="Let's build together" />
      </div>
    </section>
  );
};

export default EducationSection;
