import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/page-layout";
import { SEO } from "@/lib/seo";
import { Home, ArrowLeft } from "lucide-react";

const helpfulLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Solutions", href: "/solutions/customer-support" },
  { label: "Blog", href: "/blog" },
  { label: "What is a Knowledge Agent?", href: "/what-is-a-knowledge-agent" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <PageLayout>
      <SEO
        title="Page Not Found (404) | Knowledge Agents"
        description="The page you're looking for doesn't exist. Explore Knowledge Agents features, pricing, and resources instead."
        path="/404"
        noindex
      />
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <div className="text-7xl md:text-8xl font-bold font-display text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold font-display mb-3">This page wandered off</h1>
          <p className="text-muted-foreground text-lg mb-8">
            The page you're looking for doesn't exist or has moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 w-4 h-4" /> Back to home
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <ArrowLeft className="mr-2 w-4 h-4" /> Read the blog
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {helpfulLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                <a className="text-sm px-4 py-2 rounded-full border bg-muted/30 hover:border-primary/50 hover:text-primary transition-colors">
                  {l.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
