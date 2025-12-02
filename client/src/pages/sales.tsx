import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check, Target, TrendingUp, MessageCircle, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Sales() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-emerald-50 dark:bg-emerald-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="flex flex-col gap-6 items-center"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-2 w-fit">
                For Sales Teams
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1]">
                Close Deals Faster with <br/><span className="text-emerald-600">Instant Answers</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Equip your sales reps with a genius assistant that knows every product detail, 
                competitive differentiator, and pricing rule. Never say "let me check on that" again.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12 bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
                </WaitlistDialog>
                <Button variant="outline" size="lg" className="text-base px-8 h-12" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <Target className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Battle Cards on Demand</h3>
              <p className="text-muted-foreground">
                "How do we compare to Competitor X?" Get a bulleted list of winning arguments instantly during the call.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <MessageCircle className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Objection Handling</h3>
              <p className="text-muted-foreground">
                Real-time coaching on how to overcome pricing objections, security concerns, and feature gaps.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <TrendingUp className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Faster Ramp Time</h3>
              <p className="text-muted-foreground">
                New reps start selling in weeks, not months, with the collective knowledge of your top performers at their fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Placeholder */}
      <section className="py-24 bg-emerald-50 dark:bg-emerald-900/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="flex-1">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 Your Best Sales Engineer is AI
               </h2>
               <p className="text-lg text-muted-foreground mb-8">
                 Technical questions kill deal momentum. Knowledge Agents answer complex technical queries instantly, 
                 keeping the conversation moving towards the close.
               </p>
               <ul className="space-y-4">
                 {["Instant technical specs retrieval", "Pricing calculator assistance", "Case study matching by industry", "RFP automation"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <Check className="w-4 h-4" />
                     </div>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="flex-1 relative">
               <div className="aspect-square md:aspect-video bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-emerald-100 dark:border-emerald-900 p-6 flex flex-col">
                 <div className="flex items-center gap-3 mb-6 border-b pb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                       <div className="font-bold">Prospect Call</div>
                       <div className="text-xs text-green-600 flex items-center gap-1">● Live Transcription</div>
                    </div>
                 </div>
                 <div className="space-y-4 flex-1 overflow-hidden">
                    <p className="text-gray-500 text-sm">Prospect: "We're concerned about data residency. Can you host in Germany?"</p>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 p-4 rounded-lg animate-pulse">
                       <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-emerald-600" />
                          <span className="font-bold text-emerald-800 dark:text-emerald-200 text-sm">Winning Answer Detected</span>
                       </div>
                       <p className="text-sm text-emerald-900 dark:text-emerald-100">
                          "Yes! We have a dedicated EU region hosted in Frankfurt (AWS eu-central-1) that is fully GDPR compliant. I can send you our compliance one-pager after the call."
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
          <div className="bg-emerald-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hit Your Quota</h2>
              <p className="text-emerald-100 text-lg mb-8">
                Give your sales team the unfair advantage they deserve.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-emerald-700 font-semibold h-12 px-8">
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
