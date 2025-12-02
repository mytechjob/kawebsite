import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check, Building2, Zap, BarChart, Handshake } from "lucide-react";
import { motion } from "framer-motion";

export default function B2B() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-indigo-50 dark:bg-indigo-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="flex flex-col gap-6 items-center"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-bold mb-2 w-fit">
                For B2B Companies
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1]">
                Accelerate B2B Growth with <span className="text-indigo-600">Intelligent Answers</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Shorten sales cycles, automate vendor questionnaires, and empower your partners. 
                The all-in-one knowledge platform for modern B2B organizations.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12 bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
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
              <Handshake className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Partner Enablement</h3>
              <p className="text-muted-foreground">
                Give your channel partners a branded AI expert that answers their technical questions instantly. 
                Stop drowning your partner managers in emails.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <FileText className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Automated RFPs</h3>
              <p className="text-muted-foreground">
                Upload a security questionnaire or RFP and let the agent draft 90% of the answers based on your security docs.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <Zap className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Sales Velocity</h3>
              <p className="text-muted-foreground">
                Reps can ask "Do we integrate with Salesforce?" and get the answer + the documentation link instantly while on a demo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 bg-indigo-50 dark:bg-indigo-900/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-8 border border-indigo-100 dark:border-indigo-900">
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">Q</div>
                      <div className="flex-1 bg-indigo-50 p-4 rounded-lg rounded-tl-none">
                        <p className="font-medium text-indigo-900">Does your API support rate limiting?</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 flex-row-reverse">
                      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">A</div>
                      <div className="flex-1 bg-indigo-600 text-white p-4 rounded-lg rounded-tr-none shadow-lg">
                        <p>Yes, our API enforces rate limits to ensure stability.</p>
                        <ul className="list-disc ml-4 mt-2 text-indigo-100 text-sm">
                          <li>Standard Tier: 1,000 req/min</li>
                          <li>Enterprise Tier: 10,000 req/min</li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-indigo-500/50 text-xs text-indigo-200">
                          Source: API Documentation v2.4
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The End of "I'll Get Back to You"
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In B2B, speed wins deals. Equip your team with the answers they need to handle objections live, 
                without waiting for a product manager to reply on Slack.
              </p>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                See It In Action
              </Button>
            </div>
          </div>
        </div>
      </section>

       {/* CTA */}
       <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Grow?</h2>
              <p className="text-indigo-100 text-lg mb-8">
                Join hundreds of B2B leaders transforming their sales and support operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-indigo-700 font-semibold h-12 px-8">
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

function FileText({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}
