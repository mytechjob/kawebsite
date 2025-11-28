import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Professional",
      desc: "For small teams getting started with AI automation",
      price: "$499",
      period: "per month",
      features: [
        "Up to 5 agents",
        "10,000 documents/month",
        "Basic compliance templates",
        "Email support",
        "API access",
        "Standard integrations",
        "Basic analytics"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Enterprise",
      desc: "For growing teams scaling AI operations",
      price: "$1,499",
      period: "per month",
      features: [
        "Unlimited agents",
        "50,000 documents/month",
        "Advanced compliance library",
        "Priority support",
        "Full API access",
        "All integrations",
        "Advanced analytics",
        "Custom workflows",
        "SSO & SAML"
      ],
      cta: "Request Demo",
      popular: true
    },
    {
      name: "Custom",
      desc: "For large enterprises with specific requirements",
      price: "Custom",
      period: "",
      features: [
        "Unlimited everything",
        "Dedicated infrastructure",
        "Custom compliance rules",
        "24/7 dedicated support",
        "White-label options",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    { q: "How do document limits work?", a: "Document limits refer to the number of unique documents processed per month. If you exceed your plan's limit, you can upgrade or purchase additional capacity." },
    { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle." },
    { q: "Is there a free trial?", a: "We offer a 14-day free trial for the Professional plan. Contact our sales team for Enterprise or Custom plan trials." },
    { q: "Is my data secure?", a: "Yes, we are SOC 2 Type II certified and use enterprise-grade encryption. Your data is encrypted at rest and in transit, and we never train models on customer data." }
  ];

  return (
    <div className="flex flex-col gap-0">
      <section className="relative py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-display">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your team's needs. Scale as you grow.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl border bg-card flex flex-col ${
                  plan.popular ? "border-accent shadow-xl scale-105 z-10" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-6 px-4 py-1 bg-gradient-to-r from-accent to-teal-400 text-white text-xs font-bold uppercase tracking-wide rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-8 h-10">{plan.desc}</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold font-display text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.popular ? (
                  <WaitlistDialog>
                    <Button className="w-full h-12 text-base font-semibold">{plan.cta}</Button>
                  </WaitlistDialog>
                ) : (
                  <Button variant="outline" className="w-full h-12 text-base font-semibold" asChild>
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
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
