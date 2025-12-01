import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, ShieldCheck, Zap, Users, Building2, Headset } from "lucide-react";
import { Link } from "wouter";

export default function General() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6" variant="outline">Knowledge Intelligence</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Make your knowledge available <br/>24 hours a day
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Empower your business with always-on intelligence to support customers, 
              streamline operations, and boost employee productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/solutions">View Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-none shadow-lg">
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  <Headset className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Support Your Customers</h3>
                <p className="text-muted-foreground">
                  Provide instant, accurate answers to customer inquiries around the clock, improving satisfaction and reducing wait times.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-none shadow-lg">
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smoother Operations</h3>
                <p className="text-muted-foreground">
                  Keep your business running efficiently by ensuring operational knowledge is accessible instantly when needed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-none shadow-lg">
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Productive Employees</h3>
                <p className="text-muted-foreground">
                  Eliminate time spent searching for information. Empower your team with immediate access to the knowledge they need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section with Placeholder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Knowledge Agents for Every Team
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We are using knowledge agents for three main things: employee support, customer support, and operation support.
              </p>
              <ul className="space-y-4">
                {[
                  "Employee Support: Onboarding, policies, and internal tools",
                  "Customer Support: 24/7 inquiries, troubleshooting, and guidance",
                  "Operation Support: Process documentation, compliance, and SOPs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* Screenshot Placeholder */}
              <div className="aspect-video rounded-xl bg-muted border-2 border-dashed border-muted-foreground/25 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background shadow-sm flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">1</span>
                  </div>
                  <p className="font-medium text-muted-foreground">Screenshot Placeholder</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">Dashboard View</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            When Knowledge Breaks Down
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            When people are not able to get the information that they need, it causes churn, loss of revenue, and loss of productivity. 
            All three key areas—employees, customers, and operations—are severely impacted.
          </p>
          <div className="p-6 bg-background rounded-lg border shadow-sm text-left border-l-4 border-l-destructive/50">
            <p className="text-lg font-medium">
              "The old way of managing knowledge through silos doesn't work and becomes a competitive disadvantage."
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section with Placeholder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="order-2 lg:order-1 relative">
              {/* Screenshot Placeholder */}
              <div className="aspect-square md:aspect-video lg:aspect-square rounded-xl bg-muted border-2 border-dashed border-muted-foreground/25 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent opacity-50" />
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background shadow-sm flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">2</span>
                  </div>
                  <p className="font-medium text-muted-foreground">Screenshot Placeholder</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">Agent Interface</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge className="mb-4" variant="outline">The Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bridging the Gap with AI
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We aim to resolve this issue by leveraging modern AI technology to bridge the gap. 
                Knowledge Agents empower you to access information, share insights, and proactively update and mitigate situations.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Resilience</h4>
                    <p className="text-sm text-muted-foreground">
                      So your business can thrive, customers are happier, and employees are more resilient.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Holistic Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Whether it is front-line employees, customers needing support, or corporate employees keeping the lights on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Knowledge?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Knowledge agents have a part in all of these scenarios, supporting you and your capital in their endeavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground" asChild>
              <Link href="/product">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
