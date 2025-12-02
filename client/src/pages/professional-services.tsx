import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check, Briefcase, Clock, FileText, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfessionalServices() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="flex flex-col gap-6 items-center"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-bold mb-2 w-fit">
                For Consultants, Agencies & Firms
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1]">
                Your Firm's Collective Brain <br/><span className="text-slate-600">Instantly Accessible</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Stop reinventing the wheel. Turn past project deliverables, methodologies, and case studies 
                into an active knowledge base that helps you win more business and deliver faster.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12 bg-slate-900 text-white hover:bg-slate-800">Get Started</Button>
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
              <Briefcase className="w-12 h-12 text-slate-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Win More RFPs</h3>
              <p className="text-muted-foreground">
                Instantly retrieve relevant case studies, team bios, and methodology slides from past proposals. 
                Draft responses 5x faster.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <Clock className="w-12 h-12 text-slate-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Faster Onboarding</h3>
              <p className="text-muted-foreground">
                New consultants get up to speed on client context instantly. 
                "What did we do for Client X in 2022?" is answered in seconds.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <Shield className="w-12 h-12 text-slate-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Methodology Consistency</h3>
              <p className="text-muted-foreground">
                Ensure every deliverable follows your firm's latest standards and templates. 
                Review work automatically against best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Placeholder */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 "Do we have a slide on Digital Transformation?"
               </h2>
               <p className="text-lg text-muted-foreground mb-8">
                 Instead of emailing the all-company listserv, just ask your Knowledge Agent. 
                 It searches across SharePoint, Google Drive, and Slack to find the exact slide you need.
               </p>
               <ul className="space-y-4">
                 {["Search inside PPTX, PDF, and DOCX files", "Find experts based on past project experience", "Generate first drafts of deliverables", "Summarize client meetings automatically"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <Check className="w-5 h-5 text-green-600" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="relative">
               <div className="aspect-video bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden">
                 <div className="bg-slate-100 dark:bg-slate-900 p-3 border-b flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"/>
                   <div className="w-3 h-3 rounded-full bg-amber-400"/>
                   <div className="w-3 h-3 rounded-full bg-green-400"/>
                 </div>
                 <div className="p-6 flex-1 flex flex-col justify-center items-center text-center space-y-4">
                   <FileText className="w-16 h-16 text-slate-300" />
                   <div>
                     <h4 className="font-bold text-lg">Found 12 relevant slides</h4>
                     <p className="text-sm text-muted-foreground">From "Q3 Strategy Deck" and "Tech Implementation 2023"</p>
                   </div>
                   <Button size="sm">Download Selection</Button>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>
      
       {/* CTA */}
       <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Scale Your Expertise</h2>
              <p className="text-slate-300 text-lg mb-8">
                Make your firm's knowledge your competitive advantage.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-slate-900 font-semibold h-12 px-8">
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
