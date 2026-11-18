import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

const ResumeButton = () => {
  return (
    <Button asChild size="lg" className="rounded-xl font-semibold">
      <a
        href="/resume.pdf"
        download="Sahil-Singh-Resume.pdf"
        onClick={() => toast.success("Resume download started", { description: "Your updated PDF is ready to save." })}
      >
        <Download className="h-4 w-4" />
        Download résumé
      </a>
    </Button>
  );
};

export default ResumeButton;
