import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import WaitlistDialog from "@/components/waitlist-dialog";
import { Check } from "lucide-react";

export default function Solutions() {
  return (
    <div className="flex flex-col gap-0">
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-bold mb-6">
                For Compliance Teams
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-display leading-tight">
                Automate Compliance at Scale
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Deploy AI agents that continuously monitor documents for regulatory compliance, 
                flag violations, and ensure adherence to policies—automatically.
              </p>
              <div className="flex gap-4">
                <WaitlistDialog>
                  <Button size="lg" className="h-12 px-8 text-base">Request Demo</Button>
                </WaitlistDialog>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/50" />
                    <div className="w-3 h-3 rounded-full bg-green-400/50" />
                  </div>
                  <div className="text-xs font-medium text-muted-foreground ml-2">Compliance Dashboard</div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-accent/20">
                    <div className="p-2 bg-accent/10 rounded-lg text-xl">⚖️</div>
                    <div className="flex-1">
                      <div className="font-semibold text-primary">GDPR Compliance Agent</div>
                      <div className="text-xs text-muted-foreground">Active • 0 violations detected</div>
                    </div>
                    <div className="text-emerald-500 font-bold text-sm">Passed</div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                    <div className="p-2 bg-secondary rounded-lg text-xl">📋</div>
                    <div className="flex-1">
                      <div className="font-semibold text-primary">Policy Validator</div>
                      <div className="text-xs text-muted-foreground">Monitoring • 247 documents</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-8 rounded-r-xl max-w-4xl mx-auto mb-24">
            <h3 className="text-amber-800 font-bold text-lg mb-2">The Compliance Challenge</h3>
            <p className="text-amber-900/80 leading-relaxed">
              Compliance teams manually review thousands of documents for regulatory adherence, 
              policy violations, and risk factors. This process is slow, error-prone, and doesn't 
              scale. A single missed violation can result in millions in fines and reputational damage.
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">How Knowledge Agents Solves It</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🤖", title: "Automated Monitoring", desc: "Deploy agents that continuously scan documents for compliance issues across GDPR, HIPAA, SOC 2." },
              { icon: "📊", title: "Risk Scoring", desc: "Automatically categorize and prioritize compliance issues by severity. Focus on high-risk items." },
              { icon: "📝", title: "Audit Trails", desc: "Generate comprehensive audit trails automatically. Every check and finding is logged." },
              { icon: "🔄", title: "Regulatory Updates", desc: "Agents automatically update compliance rules based on the latest regulatory changes." }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Measurable Results</h2>
            <p className="text-lg text-muted-foreground">Real impact from compliance teams using Knowledge Agents</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: "85%", label: "Reduction in manual review time" },
              { val: "99.7%", label: "Accuracy in violation detection" },
              { val: "24/7", label: "Continuous monitoring" },
              { val: "100%", label: "Audit-ready documentation" }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-card border border-border rounded-xl">
                <div className="text-4xl lg:text-5xl font-bold text-accent font-display mb-2">{stat.val}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 text-amber-400 text-2xl">★★★★★</div>
            <blockquote className="text-2xl font-display font-medium leading-relaxed mb-8">
              "Knowledge Agents transformed our compliance process. What used to take our team weeks 
              now happens in hours. We've caught violations we would have missed manually, and our 
              audit preparation time dropped by 80%."
            </blockquote>
            <div className="font-bold text-primary">Jennifer Martinez</div>
            <div className="text-sm text-muted-foreground">Chief Compliance Officer, Fortune 500 Financial Services</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Compliance Operations</h2>
          <div className="flex justify-center gap-4">
            <WaitlistDialog>
              <Button size="lg" variant="secondary" className="h-12 px-8 text-primary font-semibold">Request a Demo</Button>
            </WaitlistDialog>
            <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground" asChild>
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
