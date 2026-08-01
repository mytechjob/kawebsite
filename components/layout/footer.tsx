import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";
import { SITE } from "@/lib/site";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "AI-Native Platform",
    links: [
      { label: "Overview", href: "/new" },
      { label: "Platform", href: "/new/platform" },
      { label: "Revenue Intelligence", href: "/new/revenue-intelligence" },
      { label: "Features", href: "/new/features" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Customer support", href: "/new/solutions/customer-support" },
      { label: "E-commerce", href: "/new/solutions/ecommerce" },
      { label: "SaaS & software", href: "/new/solutions/saas" },
      { label: "Healthcare", href: "/new/solutions/healthcare" },
      { label: "Real estate", href: "/new/solutions/real-estate" },
      { label: "Education", href: "/new/solutions/education" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Compare", href: "/new/compare" },
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
    return <a href={href} className="hover:text-primary transition-colors">{children}</a>;
  }
  return <Link href={href} className="hover:text-primary transition-colors">{children}</Link>;
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl mb-4">
              <img src="/logo-trans.webp" alt="Knowledge Agents logo" className="h-16 sm:h-20 w-auto" />            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              The no-code platform to build AI agents that answer customer questions and take real action — trained on your content, live in minutes.
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
                  <li key={link.label}><FooterLink href={link.href}>{link.label}</FooterLink></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {SITE.legalName} All rights reserved.</p>
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
