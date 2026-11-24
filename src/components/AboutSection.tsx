import { NextSection } from "@/components/NextSection";
import { BrainCircuit, GraduationCap, MapPin, Rocket, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";

const AboutSection = () => {
  return (
    <section id="about" className="section-shell border-t">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="01 / Profile" title="Engineering beyond the interface." />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="max-w-3xl font-heading text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
              I turn real-world problems into shipped products—not just prototypes.
            </p>
            <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                I’m a full-stack developer and B.Tech Computer Science student at Geeta University. My work sits where thoughtful interfaces, secure application architecture and applied AI meet.
              </p>
              <p>
                From four-tier access control and live payment flows to multilingual voice assistance and ML predictions, I care about the complete system: how it works, how it scales and how useful it feels to the person using it.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Security & surveillance", "HealthTech", "AgriTech", "E-commerce", "Applied AI"].map((domain) => (
                <span key={domain} className="rounded-full border bg-card px-4 py-2 text-xs font-medium text-secondary-foreground">{domain}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border bg-card">
              <div className="border-b bg-secondary/40 p-6">
                <div className="flex items-center justify-between">
                  <p className="mono-label">Current focus</p>
                  <span className="status-dot" />
                </div>
                <div className="mt-7 space-y-6">
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><ShieldCheck className="h-5 w-5" /></span>
                    <div><p className="font-semibold">Building Drishti</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Secure commerce, RBAC and live operations.</p></div>
                  </div>
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><BrainCircuit className="h-5 w-5" /></span>
                    <div><p className="font-semibold">Building Seva-Setu</p><p className="mt-1 text-sm leading-6 text-muted-foreground">AI-powered healthcare access for rural India.</p></div>
                  </div>
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Rocket className="h-5 w-5" /></span>
                    <div><p className="font-semibold">Learning system design</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Scale, reliability and ML-driven automation.</p></div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /><div><p className="text-xs text-muted-foreground">Based in</p><p className="mt-1 text-sm font-medium">Panipat, Haryana</p></div></div>
                <div className="flex items-start gap-3"><GraduationCap className="mt-0.5 h-4 w-4 text-primary" /><div><p className="text-xs text-muted-foreground">Studying</p><p className="mt-1 text-sm font-medium">B.Tech CSE · 2023—Present</p></div></div>
              </div>
            </div>
          </Reveal>
        </div>
        <NextSection href="#projects" label="See the flagship work" />
      </div>
    </section>
  );
};

export default AboutSection;
