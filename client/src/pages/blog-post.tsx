import { useParams, Link } from "wouter";
import { PageLayout } from "@/components/layout/page-layout";
import { ArticleRenderer } from "@/components/blog/article-renderer";
import { Newsletter } from "@/components/sections/newsletter";
import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { SEO, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { getPost, getRelatedPosts } from "@/data/blog";
import NotFound from "@/pages/not-found";
import { Clock, ChevronRight, ArrowRight } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPost(slug ?? "");

  if (!post) return <NotFound />;

  const related = getRelatedPosts(post.slug, 3);

  return (
    <PageLayout>
      <SEO
        title={`${post.title} | Knowledge Agents Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        keywords={post.keywords}
        author={post.author.name}
        publishedTime={post.date}
        jsonLd={[
          articleSchema({
            title: post.title,
            description: post.excerpt,
            path: `/blog/${post.slug}`,
            image: post.image,
            author: post.author.name,
            datePublished: post.date,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(post.faqs ? [faqSchema(post.faqs)] : []),
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8 flex-wrap">
            <Link href="/"><a className="hover:text-primary">Home</a></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog"><a className="hover:text-primary">Blog</a></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground/70 truncate">{post.category}</span>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                {post.author.initials}
              </div>
              <div>
                <div className="font-semibold text-foreground">{post.author.name}</div>
                <div className="text-muted-foreground flex items-center gap-2">
                  {post.dateDisplay}
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-10 border">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
          </div>

          {/* Body */}
          <ArticleRenderer blocks={post.content} />

          {/* Author bio */}
          <div className="mt-14 p-6 rounded-2xl border bg-muted/20 flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg flex-shrink-0">
              {post.author.initials}
            </div>
            <div>
              <div className="font-bold">{post.author.name}</div>
              <div className="text-sm text-muted-foreground mb-2">{post.author.role}, Knowledge Agents</div>
              <p className="text-sm text-foreground/80">
                Writing about AI agents, customer experience, and the technology that powers
                Knowledge Agents.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-muted/30 border-t">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold font-display mb-8">Keep reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`}>
                  <a className="group block bg-background border rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full">
                    <div className="h-36 overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <Badge variant="secondary" className="mb-2">{r.category}</Badge>
                      <h3 className="font-bold leading-snug group-hover:text-primary transition-colors">
                        {r.title}
                      </h3>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/blog">
                <a className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  View all articles <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Newsletter />
      <CTA />
    </PageLayout>
  );
}
