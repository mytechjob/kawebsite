"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { MAIN_NAV, SIGNUP_URL, SIGNIN_URL, type NavItem } from "@/lib/site";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (href.includes("#")) {
    return <a href={href} className={className} onClick={onClick}>{children}</a>;
  }
  return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}

function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DesktopDropdown({ label, items }: { label: string; items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-50">
          <div className="rounded-xl border bg-popover shadow-lg p-2">
            {items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="block rounded-lg p-3 hover:bg-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                <div className="font-medium text-sm text-foreground">{item.label}</div>
                {item.description && (
                  <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Navbar({ navContent }: { navContent?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (navContent) {
    return (
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center gap-3 px-4 py-2">
          <Link href="/" className="flex shrink-0 items-center gap-2 font-display text-xl font-bold">
            <img src="/logo-trans.webp" alt="Knowledge Agents logo" className="h-12 w-auto sm:h-14" />
          </Link>
          <div className="hidden min-w-0 flex-1 lg:block">{navContent}</div>
          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link href={SIGNIN_URL} className="hidden text-sm font-medium transition-colors hover:text-primary sm:inline">Sign in</Link>
            <Link href={SIGNUP_URL}><Button size="sm" className="sm:h-9 sm:px-4">Start Free</Button></Link>
            <button type="button" className="p-2 lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="border-t bg-background p-4 lg:hidden">
            {navContent}
            <Link href={SIGNIN_URL} className="mt-4 block sm:hidden"><Button variant="ghost" className="w-full">Sign in</Button></Link>
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <img
            src="/logo-trans.webp"
            alt="Knowledge Agents logo"
            className="h-14 sm:h-16 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {MAIN_NAV.map((entry) =>
            entry.items ? (
              <DesktopDropdown key={entry.label} label={entry.label} items={entry.items} />
            ) : (
              <NavLink
                key={entry.label}
                href={entry.href!}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {entry.label}
              </NavLink>
            ),
          )}

          <div className="flex items-center gap-3 ml-2">
            <ThemeToggle />
            <Link href={SIGNIN_URL} className="text-sm font-medium hover:text-primary transition-colors">Sign in</Link>
            <Link href={SIGNUP_URL}>
              <Button>Try for free</Button>
            </Link>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t bg-background p-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {MAIN_NAV.map((entry) => (
            <div key={entry.label}>
              {entry.items ? (
                <>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{entry.label}</div>
                  <div className="flex flex-col gap-1 pl-1">
                    {entry.items.map((item) => (
                      <NavLink key={item.href} href={item.href} className="text-sm py-1.5 text-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>{item.label}</NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink href={entry.href!} className="text-sm font-semibold" onClick={() => setIsOpen(false)}>{entry.label}</NavLink>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t">
            <Link href={SIGNIN_URL}><Button variant="ghost" className="w-full justify-start" onClick={() => setIsOpen(false)}>Sign in</Button></Link>
            <Link href={SIGNUP_URL}><Button className="w-full" onClick={() => setIsOpen(false)}>Try for free</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
}
