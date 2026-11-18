import { Code2, Fingerprint, Github, Linkedin } from "lucide-react";
import { socialProfiles } from "@/data/portfolio";

const links = [
  { label: "LinkedIn", href: socialProfiles.linkedin, icon: Linkedin },
  { label: "GitHub", href: socialProfiles.github, icon: Github },
  { label: "LeetCode", href: socialProfiles.leetcode, icon: Code2 },
  { label: "ORCID", href: socialProfiles.orcid, icon: Fingerprint },
];

const SocialLinks = () => {
  return (
    <div>
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Find me online</p>
      <div className="flex flex-wrap gap-2">
        {links.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="grid h-11 w-11 place-items-center rounded-xl border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary">
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
