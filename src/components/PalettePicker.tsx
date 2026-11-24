import { Palette as PaletteIcon, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { palettes, useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export function PalettePicker() {
  const { palette, setPalette } = useTheme();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change color theme" title="Change color theme" className="rounded-xl border border-transparent text-muted-foreground hover:border-border hover:bg-secondary hover:text-foreground">
          <PaletteIcon className="h-[18px] w-[18px] text-primary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto rounded-2xl p-3">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Accent color</p>
        <div className="flex gap-2">
          {palettes.map((p) => (
            <button
              key={p.id}
              data-palette={p.id}
              onClick={() => setPalette(p.id)}
              aria-label={`${p.label} color theme`}
              title={p.label}
              className={cn("swatch grid h-8 w-8 place-items-center rounded-full ring-offset-2 ring-offset-popover transition-transform hover:scale-110", palette === p.id && "ring-2 ring-foreground")}
            >
              {palette === p.id && <Check className="h-4 w-4 text-primary-foreground" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
