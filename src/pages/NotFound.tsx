import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
    document.title = "Page Not Found — Sahil Singh";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "The page you're looking for doesn't exist. Return to Sahil Singh's portfolio home."
    );
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    return () => {
      document.title = prevTitle;
      if (prevDesc) {
        document.querySelector('meta[name="description"]')?.setAttribute('content', prevDesc);
      }
    };
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="text-primary hover:underline">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
