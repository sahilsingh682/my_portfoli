import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { AlertCircle, ExternalLink, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socialProfiles } from "@/data/portfolio";

const EMAILJS_SERVICE_ID = "service_crd67ws";
const EMAILJS_TEMPLATE_ID = "template_diwlsaj";
const EMAILJS_USER_ID = "Z_45w2D9qObqX3uew";

const initialForm = { name: "", email: "", subject: "", message: "" };

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deliveryFailed, setDeliveryFailed] = useState(false);

  const mailtoLink = useMemo(() => {
    const subject = formData.subject || `Portfolio enquiry from ${formData.name || "a visitor"}`;
    const body = `Hi Sahil,\n\n${formData.message}\n\nFrom: ${formData.name}\nReply to: ${formData.email}`;
    return `mailto:${socialProfiles.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [formData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setDeliveryFailed(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setDeliveryFailed(false);
    const loadingToast = toast.loading("Sending your message…");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Sahil Singh",
          to_email: socialProfiles.email,
          name: formData.name,
          email: formData.email,
          reply_to: formData.email,
        },
        EMAILJS_USER_ID,
      );
      toast.success("Message sent successfully", { id: loadingToast, description: "Thanks for reaching out. Your message was delivered." });
      setFormData(initialForm);
    } catch (error) {
      console.error("Email delivery failed:", error);
      setDeliveryFailed(true);
      toast.error("Message was not delivered", { id: loadingToast, description: "Your text is safe. Please use the email-app fallback below." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border bg-card">
      <div className="border-b bg-secondary/35 p-6 sm:p-8">
        <p className="mono-label">Direct message</p>
        <h3 className="mt-3 font-heading text-2xl font-semibold">Tell me what you're building.</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Your message goes to {socialProfiles.email}. Success is shown only after delivery is confirmed.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2"><label htmlFor="contact-name" className="text-sm font-medium">Name</label><Input id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} placeholder="Your name" required maxLength={80} className="h-12 rounded-xl bg-background" /></div>
          <div className="space-y-2"><label htmlFor="contact-email" className="text-sm font-medium">Email</label><Input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required maxLength={120} className="h-12 rounded-xl bg-background" /></div>
        </div>
        <div className="space-y-2"><label htmlFor="contact-subject" className="text-sm font-medium">Subject</label><Input id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Internship, collaboration or project" required maxLength={140} className="h-12 rounded-xl bg-background" /></div>
        <div className="space-y-2"><label htmlFor="contact-message" className="text-sm font-medium">Message</label><Textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="A little about your idea, timeline and how I can help…" required minLength={10} maxLength={3000} className="min-h-[160px] resize-y rounded-xl bg-background" /></div>

        {deliveryFailed && (
          <div role="alert" className="flex gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-foreground">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <div><p className="font-semibold">Direct delivery did not work.</p><p className="mt-1 text-muted-foreground">Nothing was cleared. Open the pre-filled email below and press send in your email app.</p></div>
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" size="lg" className="rounded-xl" disabled={isSubmitting}>
            {isSubmitting ? <><Loader2 className="animate-spin" /> Sending…</> : <><Send /> Send message</>}
          </Button>
          <Button asChild type="button" size="lg" variant="outline" className="rounded-xl bg-transparent hover:bg-secondary hover:text-foreground">
            <a href={mailtoLink}>Open in email app <ExternalLink /></a>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
