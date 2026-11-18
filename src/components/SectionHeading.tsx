import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="mono-label mb-4">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
}
