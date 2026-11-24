import { NextSection } from "@/components/NextSection";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";

const milestones = [
  {
    period: "2026 — Present",
    title: "Full-Stack Developer · Independent Products",
    organization: "Drishti Security System & Seva-Setu",
    description: "Designing and shipping production platforms with role-based access, live payments, geolocation, AI voice workflows and installable experiences.",
    tags: ["Product architecture", "TypeScript", "Supabase", "AI integration"],
  },
  {
    period: "Ongoing",
    title: "Contributor",
    organization: "AgroTech Smart Farming Solutions",
    description: "Contributing to an organization-level smart farming platform and collaborating across a modern TypeScript product stack.",
    tags: ["Collaboration", "AgriTech", "Next.js"],
  },
  {
    period: "Jun 2024 — Aug 2024",
    title: "Data Analytics Intern",
    organization: "Geeta University · Panipat, Haryana",
    description: "Analyzed real-world datasets with Python, performed exploratory data analysis and presented decision-ready reports using Pandas, NumPy, Matplotlib and Seaborn.",
    tags: ["Python", "EDA", "Data visualization"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-shell border-t">
      <div className="container">
        <Reveal><SectionHeading eyebrow="05 / Journey" title="Learning by shipping." description="A timeline of practical product work, collaboration and analytical experience." /></Reveal>
        <div className="mt-12 max-w-5xl">
          {milestones.map((milestone, index) => (
            <Reveal key={milestone.title} delay={index * 80}>
              <article className="relative grid gap-5 border-l pb-12 pl-7 last:pb-0 sm:pl-10 md:grid-cols-[180px_1fr] md:gap-10">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                <div className="flex items-center gap-2 font-mono text-xs text-primary md:pt-1"><CalendarDays className="h-4 w-4" />{milestone.period}</div>
                <div>
                  <div className="flex items-start gap-4">
                    <span className="mt-1 hidden h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground sm:grid"><BriefcaseBusiness className="h-4 w-4" /></span>
                    <div><h3 className="font-heading text-xl font-semibold sm:text-2xl">{milestone.title}</h3><p className="mt-2 text-sm font-medium text-muted-foreground">{milestone.organization}</p></div>
                  </div>
                  <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{milestone.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{milestone.tags.map((tag) => <span key={tag} className="rounded-md bg-secondary px-3 py-1.5 font-mono text-[10px] text-secondary-foreground">{tag}</span>)}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <NextSection href="#education" label="Education & credentials" />
      </div>
    </section>
  );
};

export default ExperienceSection;
