"use client";

import { useState } from "react";
import { PageLayout, PageHero } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE } from "@/lib/site";
import { Mail, MessageSquare, Building2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email.includes("@") || !form.message) return;
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <PageHero eyebrow="Contact" title="Let's talk" description="Questions about the platform, a demo, or enterprise needs? Send us a note and we'll get back to you within one business day." />
      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12 max-w-5xl">
          <div className="space-y-6">
            <div className="flex items-start gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-primary" /></div><div><div className="font-bold">Email us</div><a href={`mailto:${SITE.email}`} className="text-primary hover:underline text-sm">{SITE.email}</a></div></div>
            <div className="flex items-start gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><MessageSquare className="w-5 h-5 text-primary" /></div><div><div className="font-bold">Support</div><a href={`mailto:${SITE.supportEmail}`} className="text-primary hover:underline text-sm">{SITE.supportEmail}</a><p className="text-sm text-muted-foreground mt-1">Existing customer? Our agents (and humans) are here to help.</p></div></div>
            <div className="flex items-start gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Building2 className="w-5 h-5 text-primary" /></div><div><div className="font-bold">Enterprise & agencies</div><p className="text-sm text-muted-foreground mt-1">Ask about white-label, SSO, custom actions, and volume pricing.</p></div></div>
          </div>
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-muted/20 border rounded-2xl"><CheckCircle2 className="w-14 h-14 text-primary mb-4" /><h2 className="text-2xl font-bold font-display mb-2">Thanks, {form.name.split(" ")[0] || "there"}!</h2><p className="text-muted-foreground max-w-sm">We've received your message and will reply to {form.email} within one business day.</p></div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-background border rounded-2xl space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="grid gap-2"><Label htmlFor="name">Name *</Label><Input id="name" value={form.name} onChange={set("name")} required placeholder="Jane Doe" /></div>
                  <div className="grid gap-2"><Label htmlFor="email">Work email *</Label><Input id="email" type="email" value={form.email} onChange={set("email")} required placeholder="jane@company.com" /></div>
                </div>
                <div className="grid gap-2"><Label htmlFor="company">Company</Label><Input id="company" value={form.company} onChange={set("company")} placeholder="Acme Inc." /></div>
                <div className="grid gap-2"><Label htmlFor="message">How can we help? *</Label><Textarea id="message" value={form.message} onChange={set("message")} required rows={5} placeholder="Tell us about your use case, questions, or what you'd like to see in a demo…" /></div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">Send message</Button>
                <p className="text-xs text-muted-foreground">By submitting, you agree to our <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
