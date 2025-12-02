import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check, Headset, MessageSquare, Zap, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function CustomerSupport() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-orange-50/50 dark:bg-orange-950/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="flex flex-col gap-6"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-bold mb-2 w-fit">
                For Support Teams
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[1.1]">
                24/7 Expert Support <span className="text-orange-600">Without the Headcount</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Scale your support capacity instantly. Knowledge Agents resolve 60% of tickets automatically 
                and give your human agents superpowers for the rest.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12 bg-orange-600 hover:bg-orange-700">Get Started</Button>
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
                  <div className="text-xs font-medium text-muted-foreground ml-2">Live Chat Widget</div>
                </div>
                
                <div className="p-6 flex flex-col gap-6 h-[400px] justify-end bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex gap-3">
                     <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-xs font-bold text-orange-700">
                        C
                     </div>
                     <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm max-w-[80%] border border-slate-100 dark:border-slate-700">
                        <p>I'm getting a 403 error when trying to access the dashboard. Can you help?</p>
                     </div>
                  </div>

                  <div className="flex gap-3 flex-row-reverse">
                     <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white">
                        <Zap className="w-4 h-4" />
                     </div>
                     <div className="bg-slate-900 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[80%]">
                        <p>I can help with that! A 403 error usually means a permissions issue.</p>
                        <p className="mt-2">Could you please verify if you're logged in with your Admin credentials? I've also reset your session cache just in case.</p>
                     </div>
                  </div>
                  
                  <div className="flex justify-center my-2">
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                        Resolved automatically in 45s
                    </span>
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
            <h2 className="text-3xl font-bold mb-4">Support is Broken</h2>
            <p className="text-lg text-muted-foreground">
              Customers demand instant answers, but scaling human teams is expensive and slow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-red-500" />,
                title: "Long Wait Times",
                desc: "Customers hate waiting hours for a simple answer. 75% will leave if they don't get help in 5 minutes."
              },
              {
                icon: <Zap className="w-8 h-8 text-amber-500" />,
                title: "Repetitive Questions",
                desc: "Your skilled agents are burnt out answering 'how do I reset my password?' for the 100th time today."
              },
              {
                icon: <Heart className="w-8 h-8 text-orange-500" />,
                title: "Inconsistent Quality",
                desc: "Different agents give different answers, leading to confusion and mistrust in your brand."
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
          <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
             <div className="order-2 lg:order-1 relative">
               <div className="aspect-square rounded-xl bg-white dark:bg-slate-900 border shadow-xl flex flex-col overflow-hidden">
                  <div className="p-4 border-b bg-secondary/20 flex justify-between items-center">
                     <span className="font-bold">Agent Copilot</span>
                     <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Online</span>
                  </div>
                  <div className="p-6 space-y-6">
                     <div className="p-4 border border-orange-200 bg-orange-50 dark:bg-orange-900/10 rounded-lg">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Suggested Reply</h4>
                        <p className="text-sm text-muted-foreground mb-3">Based on <span className="font-medium">Refund Policy Section 4.2</span></p>
                        <p className="text-sm bg-white dark:bg-slate-800 p-3 rounded border border-border">
                           "I can certainly process that refund for you. Since your purchase was made within the last 30 days, you qualify for a full refund to your original payment method."
                        </p>
                        <div className="flex gap-2 mt-3">
                           <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700">Use this Reply</Button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Supercharge Your Human Agents
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                It's not just about deflection. For complex issues, Knowledge Agents sit alongside your human team, 
                drafting replies, finding documentation, and suggesting next steps instantly.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Instant draft replies based on past successful tickets",
                  "Automatic policy checking before sending",
                  "Tone adjustment (Professional, Friendly, Apologetic)",
                  "Seamless handoff from bot to human with full context"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-orange-100 text-orange-600 rounded-full p-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-orange-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Delight Your Customers Today</h2>
              <p className="text-orange-100 text-lg mb-8">
                Join the support teams resolving 50%+ of tickets instantly with Knowledge Agents.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-orange-700 font-semibold h-12 px-8">
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
