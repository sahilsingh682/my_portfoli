import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page Not Found — Sahil Singh";
    return () => { document.title = previousTitle; };
  }, [location.pathname]);

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-background px-6 text-center">
      <div className="technical-grid absolute inset-0" aria-hidden="true" />
      <div className="relative">
        <p className="mono-label">Error / 404</p>
        <h1 className="mt-5 font-heading text-7xl font-semibold tracking-[-0.06em] text-foreground sm:text-9xl">Lost in the stack.</h1>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">This route doesn't exist, but the portfolio is one click away.</p>
        <Button asChild size="lg" className="mt-8 rounded-xl"><a href="/"><ArrowLeft /> Return home</a></Button>
      </div>
    </main>
  );
};

export default NotFound;
