import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./contact/ContactForm";
import ContactCard from "./contact/ContactCard";
import SocialLinks from "./contact/SocialLinks";
import ResumeButton from "./contact/ResumeButton";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { socialProfiles } from "@/data/portfolio";

const ContactSection = () => {
  return (
    <section id="contact" className="section-shell relative overflow-hidden border-t">
      <div className="ambient-glow pointer-events-none absolute -left-64 bottom-0 h-[34rem] w-[34rem]" aria-hidden="true" />
      <div className="container relative">
        <Reveal><SectionHeading eyebrow="07 / Contact" title="Have a meaningful problem? Let's talk." description="I'm open to internships, collaborations and full-stack projects where thoughtful engineering can create real impact." /></Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border bg-card p-6 sm:p-8">
              <p className="max-w-md font-heading text-2xl font-medium leading-snug">The best projects start with a clear conversation.</p>
              <div className="mt-8 space-y-3">
                <ContactCard icon={<Mail className="h-5 w-5" />} title="Email" value={socialProfiles.email} link={`mailto:${socialProfiles.email}`} />
                <ContactCard icon={<Phone className="h-5 w-5" />} title="Phone" value={socialProfiles.phone} link="tel:+919812019772" />
                <ContactCard icon={<MapPin className="h-5 w-5" />} title="Location" value="Panipat, Haryana, India" link={null} />
              </div>
              <div className="mt-8"><SocialLinks /></div>
              <div className="mt-auto pt-8"><ResumeButton /></div>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7"><ContactForm /></Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
