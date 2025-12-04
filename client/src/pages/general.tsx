import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Users,
  Building2,
  Headset,
  ArrowRight,
  UserX,
  TrendingDown,
  AlertCircle,
  Briefcase,
  Settings,
} from "lucide-react";
import { Link } from "wouter";
import portalScreenshot from "@assets/screenshot-1-portal_1764651843370.png";
import wikiScreenshot from "@assets/screenshot-1-wiki_1764651843365.png";
import dashScreenshot from "@assets/screenshot-1-dash_1764651843368.png";
import homeScreenshot from "@assets/screenshot-1-home_1764651843370.png";
import studioScreenshot from "@assets/screenshot-1-knowledge-studio_1764651843369.png";

export default function General() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Self Service Knowledge Platform
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Helps you find, analyze, organize, and proactively update
              information quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/pricing">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/solutions">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Ways Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How Knowledge Agents <br />
              <span className="bg-gradient-to-r from-orange-400 via-primary to-purple-600 bg-clip-text text-transparent">
                Transform Your Business
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From frontline support to behind-the-scenes operations, Knowledge
              Agents play a crucial role in your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Customer Support */}
            <Card className="bg-background border-none shadow-lg flex flex-col h-full">
              <CardContent className="pt-8 pb-8 px-6 flex-grow">
                <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                  <Headset className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Support</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Deliver instant, accurate answers to customer inquiries 24/7.
                  Reduce response times and increase satisfaction scores.
                </p>

                <Button
                  variant="link"
                  className="p-0 h-auto mb-6 text-orange-600 hover:text-orange-700 font-semibold"
                  asChild
                >
                  <Link href="/customer-support">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>

                <div className="rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center relative overflow-hidden mb-8 shadow-md">
                  <img
                    src={portalScreenshot}
                    alt="Customer Support Portal Interface"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      "Instant response to customer queries",
                      "Reduced support ticket volume",
                      "Higher customer satisfaction scores",
                      "24/7 availability without additional staff",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Employee Support */}
            <Card className="bg-background border-none shadow-lg flex flex-col h-full">
              <CardContent className="pt-8 pb-8 px-6 flex-grow">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Employee Support</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Empower your team with instant access to policies, procedures,
                  and best practices. Boost productivity and reduce onboarding
                  time.
                </p>

                <Button
                  variant="link"
                  className="p-0 h-auto mb-6 text-blue-600 hover:text-blue-700 font-semibold"
                  asChild
                >
                  <Link href="/employee-support">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>

                <div className="rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center relative overflow-hidden mb-8 shadow-md">
                  <img
                    src={wikiScreenshot}
                    alt="Employee Knowledge Base Interface"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      "Faster onboarding for new employees",
                      "Instant access to company knowledge",
                      "Reduced time spent searching for information",
                      "Improved employee productivity and morale",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Operations Support */}
            <Card className="bg-background border-none shadow-lg flex flex-col h-full">
              <CardContent className="pt-8 pb-8 px-6 flex-grow">
                <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Operations Support</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Keep your operations running smoothly with proactive
                  monitoring and instant access to operational knowledge and
                  procedures.
                </p>

                <Button
                  variant="link"
                  className="p-0 h-auto mb-6 text-purple-600 hover:text-purple-700 font-semibold"
                  asChild
                >
                  <Link href="/operations-support">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>

                <div className="rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center relative overflow-hidden mb-8 shadow-md">
                  <img
                    src={dashScreenshot}
                    alt="Operations Dashboard Interface"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      "Reduced operational downtime",
                      "Proactive issue detection and resolution",
                      "Streamlined process documentation",
                      "Better cross-team coordination",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            When Knowledge Breaks Down, <br />
            <span className="bg-gradient-to-r from-orange-400 via-primary to-purple-600 bg-clip-text text-transparent">
              Everything Suffers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            Siloed knowledge creates competitive disadvantages that impact every
            aspect of your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-background border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-8 px-6 text-left">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-6 text-red-500">
                  <UserX className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Turnover</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When customers can't find the information they need,
                  frustration leads to churn and lost revenue.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-8 px-6 text-left">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-6 text-red-500">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Lost Productivity</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Employees waste valuable time searching for information
                  instead of focusing on high-impact work.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-8 px-6 text-left">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-6 text-red-500">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Operational Delays</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Critical operations grind to a halt when knowledge is siloed
                  or inaccessible.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-xl p-8 md:p-10">
            <p className="text-lg md:text-xl font-medium text-red-900/80">
              <span className="font-bold text-red-600">The result?</span>{" "}
              Increased turnover, revenue loss, decreased productivity, and a
              business that can't operate at its full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section with Placeholder */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Knowledge Agents for Every Team
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We are using knowledge agents for three main things: employee
                support, customer support, and operation support.
              </p>
              <ul className="space-y-4">
                {[
                  "Employee Support: Onboarding, policies, and internal tools",
                  "Customer Support: 24/7 inquiries, troubleshooting, and guidance",
                  "Operation Support: Process documentation, compliance, and SOPs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-xl bg-background border-2 border-muted-foreground/10 flex items-center justify-center relative overflow-hidden shadow-2xl">
                <img
                  src={homeScreenshot}
                  alt="Knowledge Agents Dashboard View"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section with Placeholder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-xl bg-muted border-2 border-muted-foreground/10 flex items-center justify-center relative overflow-hidden shadow-2xl">
                <img
                  src={studioScreenshot}
                  alt="Knowledge Studio Agent Interface"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4" variant="outline">
                The Solution
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bridging the Gap with AI
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We aim to resolve this issue by leveraging modern AI technology
                to bridge the gap. Knowledge Agents empower you to access
                information, share insights, and proactively update and mitigate
                situations.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Resilience</h4>
                    <p className="text-sm text-muted-foreground">
                      So your business can thrive, customers are happier, and
                      employees are more resilient.
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
                      Whether it is front-line employees, customers needing
                      support, or corporate employees keeping the lights on.
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
            Knowledge agents have a part in all of these scenarios, supporting
            you and your capital in their endeavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground"
              asChild
            >
              <Link href="/product">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
