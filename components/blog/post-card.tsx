import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog";

/**
 * Standard article card used on the blog index and topic archives. Kept in one
 * place so the two listings can never drift apart visually.
 */
export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-background border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow h-full"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" /> {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
        <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Read more <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

/**
 * Horizontal topic navigation shown above the article grid. `active` is the
 * topic slug currently being viewed, or undefined on the blog index.
 */
export function TopicNav({
  topics,
  active,
}: {
  topics: readonly { slug: string; name: string }[];
  active?: string;
}) {
  return (
    <nav aria-label="Browse by topic" className="flex flex-wrap gap-2 mb-12">
      <Link
        href="/blog"
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
          active
            ? "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
            : "border-primary bg-primary text-primary-foreground"
        }`}
      >
        All articles
      </Link>
      {topics.map((topic) => (
        <Link
          key={topic.slug}
          href={`/blog/topic/${topic.slug}`}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            active === topic.slug
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
          }`}
        >
          {topic.name}
        </Link>
      ))}
    </nav>
  );
}
