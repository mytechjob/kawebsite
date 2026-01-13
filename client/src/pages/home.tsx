import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageSquare, Table, ClipboardCheck, BookOpen, Settings, Shield, FileText, Receipt, Scale, Briefcase, RefreshCw } from "lucide-react";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="flex flex-col gap-6 items-center"
            >
              <motion.div variants={fadeIn}>
                <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">
                  A new Knowledge Management system for decisioning
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-display font-bold leading-[1.1]">
                AI-powered digital analysts for <span className="text-gradient">document-heavy work</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Knowledge Agents redefine Knowledge Management. Instead of just storing and searching information, they let you create decisions and actions across all knowledge sets. Automate expert review, standardize outcomes, and operate with evidence at scale.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12" data-testid="button-get-early-access">
                    Get Early Access
                  </Button>
                </WaitlistDialog>
                <Button variant="outline" size="lg" className="text-base px-8 h-12" asChild>
                  <a href="#use-cases">View Use Cases</a>
                </Button>
                <Button variant="ghost" size="lg" className="text-base px-8 h-12" asChild>
                  <a href="#how-it-works">How the Product Works</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-3 pt-8">
                {['Finance', 'Legal', 'Compliance', 'Internal Audit', 'M&A / Private Equity'].map((audience) => (
                  <span key={audience} className="px-3 py-1.5 rounded-full bg-secondary/50 text-sm text-muted-foreground border border-border">
                    {audience}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Why it matters</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Information is growing faster than teams can act on it</h2>
            <p className="text-lg text-muted-foreground">
              Most tools help you store or find knowledge. Knowledge Agents help you operate on knowledge—turning documents into decisions, actions, and evidence-backed outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automate expert review",
                desc: "Agents handle first-pass review so experts focus on judgment and strategy.",
                icon: <ClipboardCheck className="w-8 h-8 text-accent" />
              },
              {
                title: "Standardize decisions",
                desc: "Apply consistent rules and outputs across teams, regions, and vendors.",
                icon: <Settings className="w-8 h-8 text-accent" />
              },
              {
                title: "Increase confidence",
                desc: "Every outcome ties back to evidence—ready for audit and leadership review.",
                icon: <Shield className="w-8 h-8 text-accent" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors shadow-sm hover:shadow-md text-center"
              >
                <div className="w-16 h-16 bg-secondary/50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Knowledge Management */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">New Knowledge Management</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">From knowledge storage → to knowledge execution</h2>
            <p className="text-lg text-muted-foreground">
              Traditional KM helps teams capture and find information (wikis, search, portals). Knowledge Agents go further: they turn knowledge into operational decisions and actions—consistently, at scale, and with evidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Knowledge → Structured outputs",
                desc: "Convert documents into fields, tables, and datasets teams can use in workflows.",
                icon: <Table className="w-8 h-8 text-accent" />
              },
              {
                title: "Knowledge → Decisions",
                desc: "Apply rules to generate pass/fail, completeness indicators, and risk flags.",
                icon: <ClipboardCheck className="w-8 h-8 text-accent" />
              },
              {
                title: "Knowledge → Actioning",
                desc: "Route exceptions, trigger reviews, and generate evidence packs automatically.",
                icon: <ArrowRight className="w-8 h-8 text-accent" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors shadow-sm"
              >
                <div className="w-14 h-14 bg-secondary/50 rounded-lg flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">Decisioning on your knowledge, not just searching it</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Join Early Access and we'll map your knowledge sets to workflows and decision rules.
            </p>
            <WaitlistDialog>
              <Button size="lg" variant="secondary" className="text-primary font-semibold" data-testid="button-early-access-km">
                Get Early Access
              </Button>
            </WaitlistDialog>
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Product</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">One platform. Governed intelligence.</h2>
            <p className="text-lg text-muted-foreground">
              Knowledge Agents combine structured extraction, rules-based evaluation, and explainable outputs—so teams can operate with speed and governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Conversation Agents",
                desc: "Ask questions across your sources and get executive-ready answers with traceability.",
                icon: <MessageSquare className="w-6 h-6" />
              },
              {
                title: "Extraction Agents",
                desc: "Convert documents into structured rows for dashboards, exports, and reconciliation.",
                icon: <Table className="w-6 h-6" />
              },
              {
                title: "Evaluation Agents",
                desc: "Apply business rules to produce pass/fail outcomes, completeness, and risk flags.",
                icon: <ClipboardCheck className="w-6 h-6" />
              },
              {
                title: "Knowledge Cards",
                desc: "Correct mistakes once and keep the system aligned—without retraining models.",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                title: "Rules Engine",
                desc: "Define schemas, thresholds, and policy checks to standardize decisions.",
                icon: <Settings className="w-6 h-6" />
              },
              {
                title: "Audit & Evidence",
                desc: "Outputs tie back to sources for audit trails, approvals, and compliance confidence.",
                icon: <Shield className="w-6 h-6" />
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 text-accent">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Use Cases</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Four high-ROI use cases</h2>
            <p className="text-lg text-muted-foreground">
              Click a use case to see what the agent produces: structured outputs, pass/fail rules, and evidence-backed summaries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                category: "Finance",
                icon: <Receipt className="w-6 h-6" />,
                title: "Invoice validation & exceptions",
                desc: "Extract invoice fields, reconcile against PO/policy rules, and flag exceptions with evidence before they hit close.",
                bullets: [
                  "Automated extraction: Invoice #, vendor, date, line items, tax, totals, payment terms",
                  "Rules & reconciliation: Match against PO/GRN or policy thresholds (duplicates, tolerances)",
                  "Exception workflow: Flag missing fields, mismatches, duplicates, or out-of-policy spend",
                  "Audit-ready evidence: Tie every exception back to exact supporting source content"
                ],
                example: {
                  fields: ["invoice_id", "vendor", "invoice_date", "amount_total", "payment_terms"],
                  checks: "checks array with pass/fail",
                  status: "REVIEW_REQUIRED"
                }
              },
              {
                category: "Legal / Compliance",
                icon: <Scale className="w-6 h-6" />,
                title: "Contract clause & policy checks",
                desc: "Standardize contract review by detecting required clauses and flagging deviations from playbooks and policies.",
                bullets: [
                  "Clause detection: Termination, indemnity, liability caps, confidentiality, renewals",
                  "Policy compliance: Check against standard language and risk thresholds",
                  "Deviation summaries: Highlight what changed and why it matters for approval",
                  "Evidence-linked outputs: Provide citations to exact sections for counsel and audit trails"
                ],
                example: {
                  fields: ["required_clauses with present true/false"],
                  checks: "risk_flags with severity and evidence",
                  status: "NON_STANDARD_REVIEW"
                }
              },
              {
                category: "M&A / Private Equity",
                icon: <Briefcase className="w-6 h-6" />,
                title: "Diligence red flags & readiness scoring",
                desc: "Review large deal rooms quickly and surface what matters: risks, gaps, and a readiness score with evidence packs.",
                bullets: [
                  "Red-flag detection: Customer concentration, unfavorable terms, litigation, covenants",
                  "Completeness scoring: Identify missing documents and unanswered diligence requests",
                  "Executive summaries: Board-ready briefs: key risks, mitigation, and next steps",
                  "Evidence packs: Auto-assemble citations and excerpts for advisors and IC memos"
                ],
                example: {
                  fields: ["readiness_score"],
                  checks: "top_risks list with severity and evidence",
                  status: "gaps list of missing items"
                }
              },
              {
                category: "Knowledge Management / Productivity",
                icon: <RefreshCw className="w-6 h-6" />,
                title: "Auto-updating Knowledge Base (with decisioning + actioning)",
                desc: "Keep institutional knowledge continuously current by automatically ingesting new content, normalizing it, resolving duplicates, and publishing a 'single source of truth' that teams can trust—while also triggering decisions and actions when knowledge changes.",
                bullets: [
                  "Continuously ingests knowledge from docs, tickets, emails, wikis, meeting notes, and shared drives",
                  "Normalizes and deduplicates concepts (one canonical answer, linked to evidence)",
                  "Detects changes and conflicts (new policy vs old policy, two versions of 'truth')",
                  "Auto-updates knowledge pages with a clear 'last updated' and 'what changed' log",
                  "Notifies the right teams when critical knowledge changes (policy updates, product changes, pricing changes)",
                  "Triggers actioning/decisioning: routing approvals, updating downstream docs/templates, creating tasks, or flagging impacted workflows"
                ],
                example: {
                  fields: ["Support enablement", "Sales enablement", "Finance/HR ops", "Engineering/product"],
                  checks: "Updated troubleshooting, pricing notes, policies, release notes",
                  status: "AUTO-DISTRIBUTED"
                }
              }
            ].map((useCase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    {useCase.icon}
                  </div>
                  <span className="text-sm font-medium text-accent">{useCase.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.desc}</p>
                
                <ul className="space-y-2 mb-6">
                  {useCase.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Example output (simplified):</p>
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-primary">{Array.isArray(useCase.example.fields) ? useCase.example.fields.join(", ") : useCase.example.fields}</div>
                    <div className="text-muted-foreground">{useCase.example.checks}</div>
                    <div className="text-accent">status: {useCase.example.status}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-secondary/50 rounded-2xl p-8 text-center border border-border">
            <h3 className="text-xl font-bold mb-3">Want a different use case?</h3>
            <p className="text-muted-foreground mb-6">Tell us your workflow in Early Access and we'll tailor a demo.</p>
            <WaitlistDialog>
              <Button size="lg" data-testid="button-join-use-case">Join</Button>
            </WaitlistDialog>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">How it works</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Connect → Configure → Operate</h2>
            <p className="text-lg text-muted-foreground">
              Get from document piles to governed decisions in three steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "01",
                title: "Connect your sources",
                desc: "Docs, PDFs, exports, and systems. Organize by data source and document type.",
                icon: <FileText className="w-8 h-8 text-accent" />
              },
              {
                step: "02",
                title: "Configure outputs",
                desc: "Define extraction schemas and evaluation rules to produce consistent results.",
                icon: <Settings className="w-8 h-8 text-accent" />
              },
              {
                step: "03",
                title: "Run with evidence",
                desc: "Agents generate structured tables, pass/fail outcomes, and citations for every decision.",
                icon: <ClipboardCheck className="w-8 h-8 text-accent" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors shadow-sm"
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

          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">See it on your documents</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Early Access includes guided setup and a tailored workflow demo.
            </p>
            <WaitlistDialog>
              <Button size="lg" variant="secondary" className="text-primary font-semibold" data-testid="button-request-early-access">
                Request Early Access
              </Button>
            </WaitlistDialog>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Common questions</h2>
            <p className="text-lg text-muted-foreground">
              If you want, we can tailor an Early Access demo to your exact workflow.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "What is a Knowledge Agent?",
                  a: "A Knowledge Agent is an AI-powered digital analyst that reads documents, extracts key facts into structured outputs, evaluates against business rules, and explains results with evidence."
                },
                {
                  q: "How is this different from AI search or a chatbot?",
                  a: "Search helps you find information. Knowledge Agents produce operational outputs (tables, pass/fail decisions, risk flags) with repeatability and traceability—so teams can act confidently."
                },
                {
                  q: "How does this relate to Knowledge Management?",
                  a: "Traditional KM focuses on storing and retrieving knowledge. Knowledge Agents add decisioning and actioning: they apply rules to knowledge sets and produce governed outcomes you can operationalize."
                },
                {
                  q: "How do we correct wrong outputs?",
                  a: "Use Knowledge Cards to fix a fact once and keep future results aligned—without retraining models. Corrections become part of your governed knowledge layer."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6" data-testid={`faq-trigger-${i}`}>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to replace manual review with scalable decisions?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Join Early Access to get priority onboarding and a tailored demo.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-primary font-semibold h-12 px-8" data-testid="button-final-cta-early-access">
                    Get Early Access
                  </Button>
                </WaitlistDialog>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8" asChild>
                  <a href="#use-cases">Explore Use Cases</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
