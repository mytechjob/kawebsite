import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check, Settings, ShieldCheck, AlertTriangle, Activity, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function OperationsSupport() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-purple-50/50 dark:bg-purple-950/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="flex flex-col gap-6"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-bold mb-2 w-fit">
                For Operations & Compliance
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[1.1]">
                Operational Excellence <br/><span className="text-purple-600">on Autopilot</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Ensure procedures are followed, compliance is met, and risks are mitigated. 
                Turn static SOPs into active agents that monitor and guide your operations.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12 bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </WaitlistDialog>
                <Button variant="outline" size="lg" className="text-base px-8 h-12" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                   <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/50" />
                    <div className="w-3 h-3 rounded-full bg-green-400/50" />
                  </div>
                  <div className="text-xs font-medium text-muted-foreground ml-2">Ops Control Center</div>
                </div>
                
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-2">
                     <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Live Monitoring</h3>
                     <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                  </div>
                  
                  <div className="space-y-3">
                     <div className="p-4 rounded-lg border border-red-200 bg-red-50 dark:bg-red-900/10 flex gap-4 items-start">
                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                        <div>
                           <h4 className="font-bold text-red-900 dark:text-red-200 text-sm">Compliance Risk Detected</h4>
                           <p className="text-xs text-red-800 dark:text-red-300 mt-1">
                              Vendor Contract #4921 missing "Data Processing Addendum". 
                           </p>
                           <div className="mt-2 flex gap-2">
                              <span className="text-[10px] font-bold bg-white/50 px-2 py-1 rounded text-red-800">Action Required</span>
                           </div>
                        </div>
                     </div>

                     <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/10 flex gap-4 items-start">
                        <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                           <h4 className="font-bold text-green-900 dark:text-green-200 text-sm">SOP Adherence Verified</h4>
                           <p className="text-xs text-green-800 dark:text-green-300 mt-1">
                              Q3 Financial Close procedure completed 100% by Finance Team.
                           </p>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Static SOPs Don't Work</h2>
            <p className="text-lg text-muted-foreground">
              Documents sitting in a folder don't prevent mistakes. You need active intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8 text-purple-500" />,
                title: "Ignored Procedures",
                desc: "Employees skip steps or use outdated processes because looking up the SOP takes too long."
              },
              {
                icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
                title: "Compliance Gaps",
                desc: "Manual checks miss details. A single contract missing a clause can cause massive liability."
              },
              {
                icon: <Activity className="w-8 h-8 text-blue-500" />,
                title: "Reactive Firefighting",
                desc: "You only find out about operational failures after they happen, when it's too late to fix them easily."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-secondary/20 rounded-xl border border-border text-center hover:bg-secondary/40 transition-colors">
                <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Static Docs to Living Agents
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Knowledge Agents don't just read your SOPs; they execute them. They monitor workflows, 
                validate documents, and alert you to deviations in real-time.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Automated document review against policy checklists",
                  "Real-time alerts for process deviations",
                  "Interactive checklists that guide employees step-by-step",
                  "Automatic updates to SOPs based on new incidents"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-purple-100 text-purple-600 rounded-full p-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
               <div className="aspect-square md:aspect-video rounded-xl bg-white dark:bg-slate-900 border shadow-xl p-6 overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <div className="font-bold text-lg">Procurement Process</div>
                    <div className="text-xs text-muted-foreground">Step 3 of 5</div>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 opacity-50">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                        <span className="line-through">Vendor Selected</span>
                     </div>
                     <div className="flex items-center gap-3 opacity-50">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                        <span className="line-through">Budget Approved</span>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs animate-pulse">3</div>
                        <div className="flex-1">
                           <span className="font-bold text-purple-900 dark:text-purple-100">Security Review</span>
                           <p className="text-xs text-muted-foreground mt-1">Agent is scanning vendor SOC2 report...</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 opacity-40">
                        <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-xs">4</div>
                        <span>Contract Signing</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Secure Your Operations</h2>
              <p className="text-purple-100 text-lg mb-8">
                Reduce risk and ensure 100% compliance with automated Knowledge Agents.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-purple-700 font-semibold h-12 px-8">
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
