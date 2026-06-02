import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    // In production this would POST to your email/CRM provider.
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-muted/30 border-y">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-3">
            The AI customer experience newsletter
          </h2>
          <p className="text-muted-foreground mb-6">
            Practical playbooks on AI support, agents, and automation — plus product updates.
            Join 6,000+ operators. No spam, unsubscribe anytime.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <CheckCircle2 className="w-5 h-5" /> You're in! Check your inbox to confirm.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Email address"
                className="h-11"
              />
              <Button type="submit" className="h-11 px-6 whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
