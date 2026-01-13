import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import WaitlistDialog from "./waitlist-dialog";
import logoLight from "@assets/logo-light-v2-nospace_1764604731793.png";
import logoDark from "@/assets/logo-dark.png";
import { useTheme } from "next-themes";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to light logo during server-side rendering or before mounting to avoid mismatch
  // but since we are client-side only, we can just wait for mount
  const logoSrc =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? logoDark
      : logoLight;

  const navLinks = [
    { href: "/product", label: "Product" },
    { href: "/knowledge", label: "Knowledge Management" },
    { href: "/#use-cases", label: "Use Cases" },
    { href: "/#how-it-works", label: "How it Works" },
    { href: "/#faq", label: "FAQ" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img
              src={logoSrc}
              alt="Knowledge Agents"
              className="h-12 w-auto object-contain"
            />
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <WaitlistDialog>
              <Button className="gap-2" data-testid="button-early-access">
                Early Access <ArrowRight className="w-4 h-4" />
              </Button>
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
                  <div className="flex items-center justify-between py-2">
                    <span className="text-lg font-medium">Theme</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </div>
                  <div className="flex flex-col gap-3 mt-4">
                    <WaitlistDialog>
                      <Button className="w-full gap-2" data-testid="button-early-access-mobile">
                        Early Access <ArrowRight className="w-4 h-4" />
                      </Button>
                    </WaitlistDialog>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>


      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={logoSrc}
                  alt="Knowledge Agents"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                A new Knowledge Management system for actioning and decisioning on enterprise knowledge.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/product" className="hover:text-primary">
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge" className="hover:text-primary">
                    Knowledge Management
                  </Link>
                </li>
                <li>
                  <Link href="/#use-cases" className="hover:text-primary">
                    Use Cases
                  </Link>
                </li>
                <li>
                  <WaitlistDialog>
                    <span className="hover:text-primary cursor-pointer">
                      Early Access
                    </span>
                  </WaitlistDialog>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Knowledge Agents. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
