import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check, Brain, FileText, Shield, BarChart, Users, Zap } from "lucide-react";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full hero-bg-gradient -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeIn}>
                <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">
                  The First AI-Native Knowledge Orchestrator
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-display font-bold leading-[1.1]">
                Turn Documents & Incidents into <span className="text-gradient">Living Knowledge</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Your organization's AI brain—orchestrating knowledge across people, processes, and systems. 
                Transform scattered PDFs, SOPs, and tribal knowledge into intelligent, self-improving agents.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12">Request a Demo</Button>
                </WaitlistDialog>
                <Button variant="outline" size="lg" className="text-base px-8 h-12" asChild>
                  <Link href="/product">Explore Platform</Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeIn} className="flex gap-8 pt-8 border-t border-border mt-4">
                <div>
                  <div className="text-3xl font-display font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground mt-1">AI Models Compared</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">Minutes</div>
                  <div className="text-sm text-muted-foreground mt-1">To Deploy Agent</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Knowledge Visibility</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/30" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/30" />
                    <div className="w-3 h-3 rounded-full bg-green-400/30" />
                  </div>
                  <div className="text-xs font-medium text-muted-foreground ml-2">Knowledge Agent Dashboard</div>
                </div>
                
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-accent/20 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-accent" />
                    <div className="p-2 bg-accent/10 rounded-lg text-xl">🧠</div>
                    <div className="flex-1">
                      <div className="font-semibold text-primary">Multi-Model Orchestrator</div>
                      <div className="text-xs text-muted-foreground">Active • Comparing 3 AI models</div>
                    </div>
                    <div className="w-24 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-accent to-teal-400 w-[73%] animate-pulse" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                    <div className="p-2 bg-secondary rounded-lg text-xl">📋</div>
                    <div className="flex-1">
                      <div className="font-semibold text-primary">Incident → SOP Agent</div>
                      <div className="text-xs text-muted-foreground">Monitoring • 12 procedures updated</div>
                    </div>
                    <div className="w-24 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 w-full" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                    <div className="p-2 bg-secondary rounded-lg text-xl">📊</div>
                    <div className="flex-1">
                      <div className="font-semibold text-primary">Knowledge Analytics</div>
                      <div className="text-xs text-muted-foreground">Tracking • 247 user queries</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">Trusted by leading enterprises</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Enterprise A', 'Company B', 'Corporation C', 'Business D', 'Firm E'].map((company) => (
              <div key={company} className="text-xl font-bold text-primary/40">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">The Knowledge Orchestration Layer</h2>
            <p className="text-lg text-muted-foreground">A unified platform that ingests, understands, synthesizes, creates, improves, and automates</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Ingest & Understand",
                desc: "Connect SOPs, PDFs, policies, project docs, SharePoint, and web content. Process through multiple best-in-class LLMs simultaneously.",
                icon: <FileText className="w-8 h-8 text-accent" />
              },
              {
                step: "02",
                title: "Synthesize & Create",
                desc: "Generate answers, summaries, and insights. Automatically create structured wiki articles, SOP updates, and best practices.",
                icon: <Brain className="w-8 h-8 text-accent" />
              },
              {
                step: "03",
                title: "Improve & Automate",
                desc: "Turn real-world incidents into updated procedures. Track analytics on user queries. Automate SLA/invoice validation.",
                icon: <Zap className="w-8 h-8 text-accent" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="font-mono text-sm font-bold text-accent mb-6">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{item.desc}</p>
                <div className="h-20 bg-secondary/50 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why We Win — Unique Differentiators</h2>
            <p className="text-lg text-muted-foreground">The capabilities that set Knowledge Agents apart</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Model Intelligence",
                desc: "Compare Gemini vs Claude vs OpenAI side-by-side on every query. Get the best answer from the best model.",
                icon: "🧠"
              },
              {
                title: "Incident → SOP Loop",
                desc: "Turn real-world incidents into updated, governed procedures automatically. Close the loop from problem to prevention.",
                icon: "🔄"
              },
              {
                title: "Democratized Knowledge",
                desc: "Convert AI answers directly into approved wiki content. Transform chat responses into organizational knowledge.",
                icon: "📝"
              },
              {
                title: "Built-In Observability",
                desc: "Analytics on what users ask, where knowledge breaks, sentiment trends, and stale SOPs.",
                icon: "📊"
              },
              {
                title: "Shared Team Knowledge",
                desc: "Answers become organizational knowledge—not lost in personal chat windows.",
                icon: "🤝"
              },
              {
                title: "SLA & Invoice Validation",
                desc: "Automate contract compliance checks with Pass/Fail/Review logic via API.",
                icon: "✓"
              }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Us in Transforming Enterprise Knowledge Work</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Talk to our team to learn how Knowledge Agents can help your organization
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-primary font-semibold h-12 px-8">
                    Request a Demo
                  </Button>
                </WaitlistDialog>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
