import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check, User, Brain, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SoloExperts() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-pink-50 dark:bg-pink-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="flex flex-col gap-6 items-center"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-800 text-sm font-bold mb-2 w-fit">
                For Solo Experts & Creators
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1]">
                Clone Yourself <br/><span className="text-pink-600">Scale Your Genius</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                You are the bottleneck. Turn your content, courses, and expertise into an AI agent 
                that can serve your audience 24/7 while you sleep.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12 bg-pink-600 hover:bg-pink-700">Get Started</Button>
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
              <User className="w-12 h-12 text-pink-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Personal Brand AI</h3>
              <p className="text-muted-foreground">
                Create an "Ask [Name]" bot that answers questions in your voice, using your specific philosophy and content.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <Brain className="w-12 h-12 text-pink-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Monetize Knowledge</h3>
              <p className="text-muted-foreground">
                Offer premium AI access as an upsell to your coaching clients or course students. Value add without time cost.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <Share2 className="w-12 h-12 text-pink-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Content Repurposing</h3>
              <p className="text-muted-foreground">
                Use your agent to find connections between your old blog posts and generate ideas for new newsletters.
              </p>
            </div>
          </div>
        </div>
      </section>
      
       {/* CTA */}
       <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-pink-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Be Everywhere at Once</h2>
              <p className="text-pink-100 text-lg mb-8">
                Your time is finite. Your impact doesn't have to be.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-pink-700 font-semibold h-12 px-8">
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
