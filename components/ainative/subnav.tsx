"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AINATIVE_NAV } from "@/lib/site";

export function AinativeSubnav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-[65px] sm:top-[73px] z-40 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-1 overflow-x-auto py-2.5 scrollbar-hide">
          {AINATIVE_NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
