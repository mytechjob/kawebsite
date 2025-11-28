import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    { title: "Automating Compliance: A Complete Guide", category: "Compliance", author: "Sarah Mitchell", date: "Nov 15, 2024", icon: "⚖️", excerpt: "Step-by-step framework for implementing AI-powered compliance automation in regulated industries." },
    { title: "Building Effective Knowledge Agents", category: "Best Practices", author: "James Chen", date: "Nov 12, 2024", icon: "🎯", excerpt: "Best practices for designing, training, and deploying AI agents that deliver measurable business value." },
    { title: "How Fortune 500 Reduced Compliance Costs by 75%", category: "Case Studies", author: "Alex Rodriguez", date: "Nov 8, 2024", icon: "💼", excerpt: "Real-world case study: How a financial services giant transformed their compliance operations with Knowledge Agents." },
    { title: "Document AI vs Traditional OCR: What's the Difference?", category: "AI & Automation", author: "Lisa Park", date: "Nov 5, 2024", icon: "🤖", excerpt: "Understanding the technology behind intelligent document processing and why AI agents outperform legacy systems." }
  ];

  return (
    <div className="flex flex-col gap-0">
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-display">Resources & Insights</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Expert perspectives on AI automation, document intelligence, and enterprise knowledge management
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['All Articles', 'AI & Automation', 'Compliance', 'Best Practices', 'Case Studies'].map((tag, i) => (
              <button 
                key={tag}
                className={`px-6 py-2 rounded-full text-sm font-medium border transition-colors ${
                  i === 0 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24 bg-card border border-border rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-accent/10 to-teal-400/10 min-h-[300px] flex items-center justify-center text-6xl">
              📊
            </div>
            <div className="p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="font-medium text-accent">AI & Automation</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">The Future of Enterprise Document Intelligence</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                How AI agents are transforming the way organizations process, validate, and act on 
                document-based information. Learn why leading enterprises are adopting intelligent 
                automation for knowledge work.
              </p>
              <Button size="lg" className="w-fit">Read Article</Button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="group cursor-pointer bg-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-accent/10 to-teal-400/10 flex items-center justify-center text-4xl">
                  {post.icon}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-accent text-xs font-bold uppercase mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="pt-6 border-t border-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-primary">{post.author}</div>
                      <div className="text-muted-foreground">{post.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
