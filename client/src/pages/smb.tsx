import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check, Rocket, Puzzle, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function SMB() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-sky-50 dark:bg-sky-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="flex flex-col gap-6 items-center"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-800 text-sm font-bold mb-2 w-fit">
                For Small & Medium Businesses
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1]">
                Big Company Intelligence <br/><span className="text-sky-600">Small Business Agility</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                You don't need a massive team to have massive knowledge. 
                Organize your growing business and punch above your weight with AI.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12 bg-sky-600 hover:bg-sky-700">Get Started</Button>
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
              <Rocket className="w-12 h-12 text-sky-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Scale Without Chaos</h3>
              <p className="text-muted-foreground">
                As you hire employee #10, #20, or #50, keep everyone aligned. 
                Document processes once and let AI answer questions forever.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <Puzzle className="w-12 h-12 text-sky-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Wear Multiple Hats</h3>
              <p className="text-muted-foreground">
                In SMBs, everyone does everything. Knowledge Agents help your marketing person answer support tickets 
                and your founder handle HR questions.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <DollarSign className="w-12 h-12 text-sky-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Affordable Enterprise Tech</h3>
              <p className="text-muted-foreground">
                Get the same power as the Fortune 500 at a price point built for growth. 
                Zero setup cost, start in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
       {/* CTA */}
       <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-sky-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Start Growing Smarter</h2>
              <p className="text-sky-100 text-lg mb-8">
                The knowledge platform that grows with you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-sky-700 font-semibold h-12 px-8">
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
