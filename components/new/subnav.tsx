"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NEW_NAV } from "@/lib/site";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

/**
 * Main site nav pills — embedded directly in the top navbar, to the left of
 * the CTA. The same element is reused inside the collapsed mobile panel, so it
 * wraps onto multiple lines below `xl` and only becomes a single scrollable
 * row at `xl`, where the navbar actually renders it inline.
 */
export function NewNavPills() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-1 xl:flex-nowrap xl:overflow-x-auto xl:scrollbar-hide">
      {NEW_NAV.map((item) => {
        if (item.items) {
          const active = item.items.some((sub) => sub.href === pathname);
          return (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={`flex items-center gap-1 shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 p-2">
                {item.items.map((sub) => (
                  <DropdownMenuItem key={sub.href} asChild className="cursor-pointer rounded-lg p-3">
                    <Link href={sub.href}>
                      <span className="block">
                        <span className="block font-medium text-sm text-foreground">{sub.label}</span>
                        {sub.description && <span className="block text-xs text-muted-foreground mt-0.5">{sub.description}</span>}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }

        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href!}
            className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
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
  );
}
