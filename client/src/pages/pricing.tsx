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

  const plans = [
    {
      name: "Free",
      desc: "Try Knowledge Agents with no commitment",
      price: "$0",
      period: "forever",
      agents: "1 Agent",
      credits: "100 Credits/month",
      cta: "Get Started",
      popular: false,
      isContact: false
    },
    {
      name: "Solo",
      desc: "Perfect for individual experts and consultants",
      price: "$29",
      period: "per month",
      agents: "3 Agents",
      credits: "1,000 Credits/month",
      cta: "Get Started",
      popular: false,
      isContact: false
    },
    {
      name: "Team",
      desc: "For small teams collaborating on knowledge",
      price: "$59",
      period: "per month",
      agents: "10 Agents",
      credits: "5,000 Credits/month",
      cta: "Get Started",
      popular: true,
      isContact: false
    },
    {
      name: "Multi-Team",
      desc: "For organizations with multiple departments",
      price: "$129",
      period: "per month",
      agents: "25 Agents",
      credits: "15,000 Credits/month",
      cta: "Get Started",
      popular: false,
      isContact: false
    },
    {
      name: "Enterprise",
      desc: "Custom solutions for large organizations",
      price: "Custom",
      period: "",
      agents: "Unlimited Agents",
      credits: "Unlimited Credits",
      cta: "Contact Us",
      popular: false,
      isContact: true
    }
  ];

  const faqs = [
    { q: "What are credits?", a: "Credits are used each time your agents process queries, analyze documents, or generate responses. Different actions consume different amounts of credits based on complexity." },
    { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. Unused credits do not roll over." },
    { q: "What happens if I run out of credits?", a: "When you reach your credit limit, you can either upgrade to a higher plan or purchase additional credit packs. Your agents will pause until credits are available." },
    { q: "Is my data secure?", a: "Yes, we use enterprise-grade encryption. Your data is encrypted at rest and in transit, and we never train models on customer data. Enterprise plans include SOC 2 compliance." },
    { q: "Can I add more agents without upgrading?", a: "Agent limits are tied to your plan. If you need more agents, you'll need to upgrade to a higher tier. Enterprise customers can customize their agent limits." }
  ];

  return (
    <div className="flex flex-col gap-0">
      <section className="relative py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-display">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">
            All plans include every feature. Only pay for what you use.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl border bg-card flex flex-col ${
                  plan.popular ? "border-accent shadow-xl ring-2 ring-accent/20" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-accent to-teal-400 text-white text-xs font-bold uppercase tracking-wide rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-xs mb-4 min-h-[32px]">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold font-display text-primary">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-sm">/{plan.period.replace("per ", "")}</span>}
                </div>
                
                <div className="space-y-2 mb-6 p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="font-semibold">{plan.agents}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="font-semibold">{plan.credits}</span>
                  </div>
                </div>

                {plan.isContact ? (
                  <Button variant="outline" className="w-full h-10 text-sm font-semibold" asChild>
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                ) : plan.popular ? (
                  <WaitlistDialog>
                    <Button className="w-full h-10 text-sm font-semibold">{plan.cta}</Button>
                  </WaitlistDialog>
                ) : (
                  <WaitlistDialog>
                    <Button variant="outline" className="w-full h-10 text-sm font-semibold">{plan.cta}</Button>
                  </WaitlistDialog>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">All Plans Include Every Feature</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't gate features behind expensive plans. Every user gets access to the full power of Knowledge Agents.
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
