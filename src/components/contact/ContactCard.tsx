import React from "react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string | null;
  animationDelay?: string;
}

const ContactCard = ({ icon, title, value, link }: ContactCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border bg-secondary/30 p-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{title}</p>
        {link ? <a href={link} className="mt-1 block break-words text-sm font-medium hover:text-primary">{value}</a> : <p className="mt-1 text-sm font-medium">{value}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
