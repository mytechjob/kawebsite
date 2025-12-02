import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check, Users, Search, Clock, FileText, Brain, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function EmployeeSupport() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="flex flex-col gap-6"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-bold mb-2 w-fit">
                For Internal Teams
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[1.1]">
                Empower Your Workforce with <span className="text-blue-600">Instant Knowledge</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Stop your team from wasting hours searching for documents. 
                Give every employee an AI assistant that knows your entire internal knowledge base.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12 bg-blue-600 hover:bg-blue-700">Get Started</Button>
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
                  <div className="text-xs font-medium text-muted-foreground ml-2">Employee Knowledge Hub</div>
                </div>
                
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="bg-secondary p-4 rounded-2xl rounded-tl-none text-sm">
                        <p>How do I submit a travel expense reimbursement for my client dinner last night?</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 border border-blue-200">
                      <Brain className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl rounded-tr-none text-sm shadow-sm">
                        <p className="mb-3 font-medium text-blue-900">I found the policy in "2024 Employee Handbook" and "Expense Guidelines".</p>
                        <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-3">
                          <li>Log into Concur via the Okta dashboard</li>
                          <li>Select "New Expense Report"</li>
                          <li>Choose category "Client Entertainment"</li>
                          <li>Attach photo of receipt (required for &gt;$50)</li>
                        </ol>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline" className="h-8 text-xs bg-white">Open Concur</Button>
                          <Button size="sm" variant="outline" className="h-8 text-xs bg-white">Read Policy</Button>
                        </div>
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
            <h2 className="text-3xl font-bold mb-4">The Hidden Cost of "Where is that file?"</h2>
            <p className="text-lg text-muted-foreground">
              Your team is spending more time searching for information than actually doing their work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-red-500" />,
                title: "20% Time Wasted",
                desc: "The average employee spends nearly one day a week searching for internal information."
              },
              {
                icon: <Users className="w-8 h-8 text-amber-500" />,
                title: "Slow Onboarding",
                desc: "New hires take months to become fully productive because knowledge is tribal, not documented."
              },
              {
                icon: <FileText className="w-8 h-8 text-orange-500" />,
                title: "Outdated Answers",
                desc: "Employees rely on old documents or 'what Jim said last year', leading to errors and compliance risks."
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
                Onboard 3x Faster
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                New employees shouldn't have to tap a colleague on the shoulder for every question. 
                Knowledge Agents give them an instant, accurate mentor from Day 1.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Instant answers to 'How do I...?' questions",
                  "Interactive walkthroughs of internal tools",
                  "Automatic surfacing of relevant docs based on role",
                  "Slack & Teams integration for in-flow support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 text-green-600 rounded-full p-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
               <div className="aspect-video rounded-xl bg-white dark:bg-slate-900 border shadow-xl flex items-center justify-center p-8">
                  <div className="space-y-6 w-full max-w-md">
                    <div className="space-y-2">
                      <div className="h-4 w-3/4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                      <div className="h-4 w-1/2 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">AI</div>
                        <div className="font-semibold text-blue-900 dark:text-blue-100">Onboarding Assistant</div>
                      </div>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        Welcome to the team! Based on your role as Senior Designer, I've prepared these 5 documents you should read first.
                      </p>
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
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Unblock Your Team?</h2>
              <p className="text-blue-100 text-lg mb-8">
                See how Knowledge Agents can reclaim thousands of hours of productivity.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-blue-700 font-semibold h-12 px-8">
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
