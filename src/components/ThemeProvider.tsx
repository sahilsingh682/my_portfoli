import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
export type Palette = "cyan" | "violet" | "emerald" | "amber" | "rose";
export const palettes: { id: Palette; label: string }[] = [
  { id: "cyan", label: "Cyan" },
  { id: "violet", label: "Violet" },
  { id: "emerald", label: "Emerald" },
  { id: "amber", label: "Amber" },
  { id: "rose", label: "Rose" },
];

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  palette: Palette;
  setPalette: (p: Palette) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "dark";
  });
  const [palette, setPalette] = useState<Palette>(() => {
    const saved = localStorage.getItem("palette") as Palette | null;
    return saved && palettes.some((p) => p.id === saved) ? saved : "cyan";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("palette", palette);
    document.documentElement.dataset.palette = palette;
  }, [palette]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme((c) => (c === "light" ? "dark" : "light")), palette, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
