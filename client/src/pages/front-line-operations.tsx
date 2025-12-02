import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check, HardHat, AlertTriangle, ClipboardCheck, Radio } from "lucide-react";
import { motion } from "framer-motion";

export default function FrontLineOperations() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-orange-50 dark:bg-orange-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="flex flex-col gap-6 items-center"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-bold mb-2 w-fit">
                For Front Line Operations
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1]">
                Expert Knowledge <br/><span className="text-orange-600">On The Floor</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Connect field technicians, factory workers, and site managers to your organization's expertise. 
                Resolve issues faster without calling HQ.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12 bg-orange-600 hover:bg-orange-700">Get Started</Button>
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
              <HardHat className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Mobile First Support</h3>
              <p className="text-muted-foreground">
                Technicians can speak naturally to the agent on their phone: "How do I reset the pressure valve on Model X?"
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <ClipboardCheck className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Interactive Checklists</h3>
              <p className="text-muted-foreground">
                Turn static PDF manuals into step-by-step interactive guides that ensure safety procedures are followed.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <Radio className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Offline Capabilities</h3>
              <p className="text-muted-foreground">
                Critical knowledge is cached and available even in remote locations with poor connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Image */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-bold mb-6">
                  Field Service
               </div>
               <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 "The machine is down. What do I do?"
               </h2>
               <p className="text-lg text-zinc-400 mb-8">
                 Minimize downtime by giving every technician the collective experience of your most senior engineers. 
                 Troubleshoot complex equipment with AI guidance based on technical schematics and service history.
               </p>
               <Button className="bg-white text-zinc-900 hover:bg-zinc-200">Explore Field Solutions</Button>
             </div>
             <div className="relative">
               <div className="aspect-[4/5] max-w-sm mx-auto rounded-[3rem] border-[8px] border-zinc-800 bg-zinc-950 overflow-hidden relative shadow-2xl">
                  {/* Phone Mockup Content */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-800 z-20 rounded-b-2xl mx-16"></div>
                  <div className="p-6 pt-12 h-full flex flex-col">
                     <div className="flex-1 overflow-y-auto space-y-4">
                        <div className="bg-zinc-800 p-3 rounded-xl rounded-tl-none max-w-[85%]">
                           <p className="text-sm">I'm seeing error code E-401 on the compressor.</p>
                        </div>
                        <div className="bg-orange-600 p-3 rounded-xl rounded-tr-none max-w-[85%] ml-auto">
                           <p className="text-sm font-bold mb-1">E-401: High Pressure Warning</p>
                           <p className="text-sm">This indicates a blockage in the intake valve. Please follow these steps:</p>
                           <ol className="list-decimal ml-4 mt-2 text-xs space-y-1">
                              <li>Turn off main power</li>
                              <li>Rotate release valve 90° counter-clockwise</li>
                              <li>Check filter mesh for debris</li>
                           </ol>
                        </div>
                         <div className="bg-zinc-800 p-3 rounded-xl rounded-tl-none max-w-[85%]">
                           <p className="text-sm">Found it. The filter is clogged. Replacing it now.</p>
                        </div>
                     </div>
                     <div className="pt-4 border-t border-zinc-800">
                        <div className="h-10 bg-zinc-800 rounded-full flex items-center px-4 text-zinc-500 text-sm">
                           Type a message...
                        </div>
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
          <div className="bg-orange-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Empower Your Front Line</h2>
              <p className="text-orange-100 text-lg mb-8">
                Reduce errors and improve safety with intelligent guidance.
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
