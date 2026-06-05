"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Send, Bot } from "lucide-react";

export function DemoSection() {
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hi! I'm the Knowledge Agents bot. Ask me anything about this platform." }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text?: string) => {
    const userMsg = (text ?? input).trim();
    if (!userMsg) return;
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const q = userMsg.toLowerCase();
      let response = "Great question! A Knowledge Agent is trained on your content and answers like this — instantly and 24/7. It can also take actions like booking meetings, creating tickets, and checking orders.";
      if (q.includes("price") || q.includes("pricing") || q.includes("cost") || q.includes("plan")) {
        response = "We have four plans: Free ($0), Hobby ($19/mo), Standard ($99/mo), and Unlimited ($399/mo). The Free plan needs no credit card. Want me to recommend one based on your volume?";
      } else if (q.includes("pdf") || q.includes("train") || q.includes("data") || q.includes("upload")) {
        response = "You can train me on PDF, DOCX, TXT, and Markdown files, pasted text, or by crawling your website and help center. I use Retrieval-Augmented Generation, so answers stay grounded in your content with citations.";
      } else if (q.includes("action") || q.includes("book") || q.includes("ticket") || q.includes("do")) {
        response = "Beyond answering, I take action: book a meeting on your calendar, create a support ticket, look up an order, start a return, or qualify a lead — all with guardrails you control.";
      } else if (q.includes("embed") || q.includes("website") || q.includes("install")) {
        response = "Add me to any site with one script tag, or publish a standalone chat page with its own URL — no website required. I also work via API for custom builds.";
      } else if (q.includes("language")) {
        response = "I detect and respond in 80+ languages automatically — train once, support everyone.";
      }
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 900);
  };

  const suggestions = ["How do I train it?", "What actions can it take?", "How much does it cost?"];

  return (
    <section id="demo" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Try it yourself</h2>
            <p className="text-lg text-muted-foreground mb-8">Experience the power of Knowledge Agents firsthand. This bot is trained on our documentation and website content.</p>
            <div className="space-y-6">
              <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">1</div><div><h3 className="font-bold text-lg">Upload your data</h3><p className="text-muted-foreground">Connect your data sources, upload files, or add a website link for crawling.</p></div></div>
              <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">2</div><div><h3 className="font-bold text-lg">Train your agent</h3><p className="text-muted-foreground">Our AI processes your content and creates a knowledge base in seconds.</p></div></div>
              <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">3</div><div><h3 className="font-bold text-lg">Embed anywhere</h3><p className="text-muted-foreground">Add the chatbot to your website with a simple embed code or use our API.</p></div></div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="bg-background border rounded-2xl shadow-xl overflow-hidden h-[500px] flex flex-col">
              <div className="p-4 bg-primary text-primary-foreground flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Bot className="w-6 h-6" /></div>
                <div><div className="font-bold">Knowledge Agents</div><div className="text-xs opacity-80">Ask me anything</div></div>
              </div>
              <div className="flex-1 p-4 overflow-y-auto bg-muted/10 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-muted rounded-tl-none"}`}>{msg.content}</div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start"><div className="bg-muted p-3 rounded-2xl rounded-tl-none"><div className="flex gap-1"><span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" /><span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-75" /><span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce delay-150" /></div></div></div>
                )}
              </div>
              <div className="p-4 border-t bg-background">
                {messages.length <= 1 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {suggestions.map((s) => (<button key={s} type="button" onClick={() => handleSend(s)} className="text-xs px-3 py-1.5 rounded-full border bg-muted/40 hover:bg-muted hover:border-primary/40 transition-colors">{s}</button>))}
                  </div>
                )}
                <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                  <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="flex-1" />
                  <Button type="submit" size="icon" aria-label="Send message"><Send className="w-4 h-4" /></Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
