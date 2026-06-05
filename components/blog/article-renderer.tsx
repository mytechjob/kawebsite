import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import type { Block } from "@/data/blog";
import { Info } from "lucide-react";

function renderInline(text: string): ReactNode[] {
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    if (part.startsWith("`") && part.endsWith("`")) return <code key={i} className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm text-foreground">{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith("/")) return <Link key={i} href={href} className="text-primary font-medium hover:underline">{label}</Link>;
      return <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">{label}</a>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function ArticleRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2": return <h2 key={i} id={slugify(block.text)} className="text-2xl md:text-3xl font-bold font-display mt-12 mb-2 scroll-mt-28">{block.text}</h2>;
          case "h3": return <h3 key={i} className="text-xl font-bold font-display mt-8 mb-1">{block.text}</h3>;
          case "p": return <p key={i} className="text-lg leading-relaxed text-foreground/80">{renderInline(block.text)}</p>;
          case "ul": return <ul key={i} className="space-y-2.5 my-2 list-disc pl-6 text-lg text-foreground/80">{block.items.map((item, j) => <li key={j} className="leading-relaxed pl-1">{renderInline(item)}</li>)}</ul>;
          case "ol": return <ol key={i} className="space-y-2.5 my-2 list-decimal pl-6 text-lg text-foreground/80">{block.items.map((item, j) => <li key={j} className="leading-relaxed pl-1">{renderInline(item)}</li>)}</ol>;
          case "quote": return <blockquote key={i} className="border-l-4 border-primary pl-6 py-2 my-8 italic text-xl text-foreground/90">&ldquo;{block.text}&rdquo;{block.cite && <cite className="block not-italic text-sm text-muted-foreground mt-2">&mdash; {block.cite}</cite>}</blockquote>;
          case "callout": return <div key={i} className="my-8 p-6 rounded-xl border border-primary/20 bg-primary/5 flex gap-4"><Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" /><div><div className="font-bold mb-1">{block.title}</div><p className="text-foreground/80">{renderInline(block.text)}</p></div></div>;
          case "faq": return <div key={i} className="my-6 space-y-4">{block.items.map((item, j) => <div key={j} className="p-5 rounded-xl border bg-muted/20"><div className="font-bold mb-1.5">{item.q}</div><p className="text-foreground/80">{renderInline(item.a)}</p></div>)}</div>;
          default: return null;
        }
      })}
    </div>
  );
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
}
