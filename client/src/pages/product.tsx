import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check, Brain, RotateCw, FileText, BarChart, Shield, Users } from "lucide-react";

export default function Product() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const modules = [
    {
      icon: <Brain className="w-8 h-8 text-accent" />,
      title: "Multi-Model Intelligence",
      desc: "Compare OpenAI, Claude, and Gemini side-by-side on every query. Get the best answer from the best model—no vendor lock-in.",
      features: [
        "Simultaneous 3-model comparison",
        "Model performance analytics",
        "Cost optimization by model",
        "Custom model routing rules",
        "Consensus-based answers"
      ]
    },
    {
      icon: <RotateCw className="w-8 h-8 text-accent" />,
      title: "Incident → SOP → Mitigation Loop",
      desc: "Turn real-world incidents (text or voice) into updated, governed procedures automatically. Close the loop from problem to prevention.",
      features: [
        "Voice & text incident capture",
        "Automatic SOP updates",
        "Approval workflows",
        "Version control & governance",
        "Impact tracking"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "Democratized Knowledge Creation",
      desc: "Convert AI answers directly into approved wiki content. One-click transformation from chat to organizational knowledge asset.",
      features: [
        "Chat-to-wiki conversion",
        "Structured content generation",
        "Editorial review workflows",
        "Knowledge categorization",
        "Auto-linking related content"
      ]
    },
    {
      icon: <BarChart className="w-8 h-8 text-accent" />,
      title: "Built-In Observability",
      desc: "Analytics on what users ask, where knowledge breaks, sentiment trends, and stale SOPs. See exactly what your organization needs to know.",
      features: [
        "Query analytics dashboard",
        "Knowledge gap detection",
        "Sentiment analysis",
        "Stale content alerts",
        "Usage heatmaps"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "API-Based SLA & Invoice Validation",
      desc: "Automate contract compliance checks with Pass/Fail/Review logic. Validate invoices and SLAs programmatically through our API.",
      features: [
        "RESTful validation API",
        "Contract rule engine",
        "Pass/Fail/Review logic",
        "Webhook notifications",
        "Audit trail generation"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Shared Team Knowledge",
      desc: "Answers become organizational knowledge—not lost in personal chat windows. Break down silos and democratize expertise.",
      features: [
        "Team knowledge repositories",
        "Cross-functional visibility",
        "Knowledge ownership",
        "Collaborative editing",
        "Permission-based access"
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-0">
      <section className="relative py-24 overflow-hidden bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1 
            initial="initial" animate="animate" variants={fadeIn}
            className="text-4xl lg:text-5xl font-bold mb-6 font-display"
          >
            The Knowledge Orchestration Platform
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Ingest, understand, synthesize, create, improve, and automate—all in one unified engine.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Button size="lg" className="mb-8" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <h2 className="text-3xl font-bold mb-4">Platform Capabilities</h2>
            <p className="text-lg text-muted-foreground">Everything you need to orchestrate enterprise knowledge</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-teal-400/20 flex items-center justify-center mb-6">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{module.desc}</p>
                <ul className="space-y-3">
                  {module.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Stub */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-12 text-muted-foreground">Seamlessly integrates with your stack</h2>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-60">
            {['SharePoint', 'Google Drive', 'Confluence', 'Slack', 'Microsoft Teams', 'Salesforce'].map((tool) => (
              <div key={tool} className="text-xl font-semibold text-primary/50">{tool}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to transform your knowledge?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-primary font-semibold h-12 px-8">
                    Request a Demo
                  </Button>
                </WaitlistDialog>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
