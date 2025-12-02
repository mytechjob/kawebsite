import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check } from "lucide-react";

export default function Pricing() {
  const allFeatures = [
    "Multi-Model AI (GPT-4, Claude, Gemini)",
    "Knowledge Base / Wiki",
    "Document Upload (PDF, DOCX, PPTX)",
    "Chat Interface",
    "Power Search",
    "Incident to SOP Automation",
    "Analytics Dashboard",
    "User Feedback Tracking",
    "API Access",
    "Slack & Teams Integration",
    "SharePoint & Google Drive Sync",
    "Custom Agent Configuration",
    "Portal Customization",
    "Role-Based Access Control",
    "Audit Logs",
    "Email Support"
  ];

  const faqs = [
    { q: "What's included in Early Access?", a: "During Early Access, you get full access to all Knowledge Agents features completely free. This includes unlimited agents, all integrations, and priority support." },
    { q: "How long does Early Access last?", a: "Early Access will continue until we launch our paid plans. We'll give you plenty of notice before any changes, and early users will receive special pricing." },
    { q: "Is my data secure?", a: "Yes, we use enterprise-grade encryption. Your data is encrypted at rest and in transit, and we never train models on customer data." },
    { q: "What happens after Early Access?", a: "When we launch paid plans, you'll have the option to continue on a free tier or upgrade to Team or Enterprise plans for additional capacity and support." }
  ];

  return (
    <div className="flex flex-col gap-0">
      <section className="relative py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Early Access
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-display">Start Free During Early Access</h1>
          <p className="text-xl text-muted-foreground">
            Get full access to all features at no cost. Team and Enterprise plans coming soon.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative p-8 rounded-2xl border-2 border-accent bg-card shadow-xl ring-2 ring-accent/20"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent to-teal-400 text-white text-xs font-bold uppercase tracking-wide rounded-full whitespace-nowrap">
                Available Now
              </div>
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-muted-foreground text-sm mb-6">Full access during Early Access</p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold font-display text-primary">$0</span>
                <span className="text-muted-foreground">/forever</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  All features included
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  Unlimited agents
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  Priority support
                </div>
              </div>

              <WaitlistDialog>
                <Button className="w-full h-12 text-base font-semibold">Get Started Free</Button>
              </WaitlistDialog>
            </motion.div>

            {/* Team Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative p-8 rounded-2xl border border-border bg-card"
            >
              <h3 className="text-2xl font-bold mb-2">Team</h3>
              <p className="text-muted-foreground text-sm mb-6">For growing teams and departments</p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-bold font-display text-muted-foreground">Coming Soon</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-secondary text-muted-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  Everything in Free
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-secondary text-muted-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  Team collaboration
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-secondary text-muted-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  Advanced analytics
                </div>
              </div>

              <Button variant="outline" className="w-full h-12 text-base font-semibold" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative p-8 rounded-2xl border border-border bg-card"
            >
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted-foreground text-sm mb-6">Custom solutions for large orgs</p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-bold font-display text-muted-foreground">Custom</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-secondary text-muted-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  Everything in Team
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-secondary text-muted-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  SSO & SAML
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-secondary text-muted-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  Dedicated support
                </div>
              </div>

              <Button variant="outline" className="w-full h-12 text-base font-semibold" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">All Features Included Free During Early Access</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get the full power of Knowledge Agents at no cost while we're in Early Access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {allFeatures.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-semibold text-primary mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
