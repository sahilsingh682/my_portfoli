import { ArrowDown } from "lucide-react";

export function NextSection({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-16 flex justify-center">
      <a href={href} className="group inline-flex items-center gap-3 rounded-full border bg-card/70 px-5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur transition-all hover:border-primary hover:text-foreground">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Next</span>
        {label}
        <ArrowDown className="h-4 w-4 animate-bounce text-primary" />
      </a>
    </div>
  );
}
