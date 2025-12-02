import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check, Building, Lock, Globe, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function Enterprise() {
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
              <div className="inline-block px-4 py-2 rounded-full bg-slate-200 text-slate-800 text-sm font-bold mb-2 w-fit">
                For Large Enterprises
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1]">
                Secure AI Infrastructure <br/><span className="text-primary">At Scale</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Deploy private Knowledge Agents across your global organization with SOC2 compliance, 
                SSO integration, and granular access controls.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="text-base px-8 h-12">Get Started</Button>
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
              <Lock className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Your data never trains public models. Full encryption at rest and in transit. 
                Private VPC deployment options available.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <Globe className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Global Connectivity</h3>
              <p className="text-muted-foreground">
                Connect data sources from SharePoint, Salesforce, Jira, and custom internal APIs. 
                Unified search across all silos.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
              <Server className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Governance & Control</h3>
              <p className="text-muted-foreground">
                Role-based access control (RBAC) ensures employees only see information they are authorized to access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Integrates With Your Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
             {/* Placeholders for Enterprise Logos */}
             {["Microsoft 365", "Salesforce", "ServiceNow", "Jira", "Slack", "Google Workspace", "Confluence", "SharePoint", "Okta", "Zendesk", "Workday", "SAP"].map((logo, i) => (
               <div key={i} className="h-12 flex items-center justify-center bg-white dark:bg-slate-800 border rounded-lg p-4 font-bold text-sm">
                 {logo}
               </div>
             ))}
          </div>
        </div>
      </section>
      
       {/* CTA */}
       <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Enterprise Ready</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Schedule a consultation with our solutions architect team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WaitlistDialog>
                  <Button size="lg" variant="secondary" className="text-primary font-semibold h-12 px-8">
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
