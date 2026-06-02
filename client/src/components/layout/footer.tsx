import { Link } from "wouter";
import logo from "@assets/KA-logo.png";
import { Twitter, Github, Linkedin } from "lucide-react";
import { SITE } from "@/lib/site";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Live demo", href: "/#demo" },
      { label: "Integrations", href: "/features#actions" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Customer support", href: "/solutions/customer-support" },
      { label: "E-commerce", href: "/solutions/ecommerce" },
      { label: "SaaS & software", href: "/solutions/saas" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Real estate", href: "/solutions/real-estate" },
      { label: "Education", href: "/solutions/education" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "What is a Knowledge Agent?", href: "/what-is-a-knowledge-agent" },
      { label: "vs. chatbots", href: "/compare" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (href.includes("#")) {
    return (
      <a href={href} className="hover:text-primary transition-colors">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="hover:text-primary transition-colors">
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl mb-4">
              <img src={logo} alt="Knowledge Agents logo" className="h-16 sm:h-20 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              The no-code platform to build AI agents that answer customer questions and take real
              action — trained on your content, live in minutes.
            </p>
            <div className="flex gap-4">
              <a href={SITE.social.twitter} aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={SITE.social.github} aria-label="GitHub" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </a>
              <a href={SITE.social.linkedin} aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {SITE.legalName} All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-primary">Terms</Link>
            <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
