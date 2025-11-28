import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import WaitlistDialog from "./waitlist-dialog";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/product", label: "Product" },
    { href: "/solutions", label: "Solutions" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Resources" },
    { href: "/about", label: "About" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-nav py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-primary hover:opacity-90 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
              <rect x="4" y="4" width="10" height="10" rx="2" fill="currentColor" opacity="0.9"/>
              <rect x="18" y="4" width="10" height="10" rx="2" fill="currentColor" opacity="0.7"/>
              <rect x="4" y="18" width="10" height="10" rx="2" fill="currentColor" opacity="0.5"/>
              <rect x="18" y="18" width="10" height="10" rx="2" fill="currentColor"/>
            </svg>
            <span className="font-display font-semibold text-xl">Knowledge Agents</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild className="hidden lg:flex">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
            <WaitlistDialog>
              <Button>Request a Demo</Button>
            </WaitlistDialog>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-3 mt-4">
                    <Button variant="outline" asChild className="w-full justify-center">
                      <Link href="/contact">Talk to Sales</Link>
                    </Button>
                    <WaitlistDialog>
                      <Button className="w-full">Request a Demo</Button>
                    </WaitlistDialog>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="4" width="10" height="10" rx="2" fill="currentColor" opacity="0.9"/>
                  <rect x="18" y="4" width="10" height="10" rx="2" fill="currentColor" opacity="0.7"/>
                  <rect x="4" y="18" width="10" height="10" rx="2" fill="currentColor" opacity="0.5"/>
                  <rect x="18" y="18" width="10" height="10" rx="2" fill="currentColor"/>
                </svg>
                <span className="font-display font-semibold text-lg">Knowledge Agents</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enterprise AI platform for intelligent document analysis and knowledge orchestration.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/product" className="hover:text-primary">Platform</Link></li>
                <li><Link href="/solutions" className="hover:text-primary">Solutions</Link></li>
                <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Twitter</a></li>
                <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Knowledge Agents Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
