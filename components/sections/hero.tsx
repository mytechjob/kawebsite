"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, CalendarCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SIGNUP_URL } from "@/lib/site";

const trust = ["No credit card required", "Free to get started", "Live in under 5 minutes"];

export function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pt-20 md:pb-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          New: Agents that take actions — book, ticket, look up & more
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
        >
          AI agents that answer <br className="hidden sm:block" /> questions and take action
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Build a <strong className="text-foreground font-semibold">Knowledge Agent</strong> trained on your
          content in minutes. It answers customer questions 24/7 and takes real action — booking meetings, creating
          tickets, checking orders, and capturing leads. No code required.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href={SIGNUP_URL}>
            <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
              Build your agent free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/#demo">
            <Button variant="outline" size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
              Try the live demo
            </Button>
          </Link>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
        >
          {trust.map((t) => (
            <li key={t} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> {t}</li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 relative mx-auto max-w-5xl rounded-xl border bg-background/50 shadow-2xl backdrop-blur-sm overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-12 bg-muted/50 border-b flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <div className="pt-12 p-4 md:p-8 bg-gradient-to-b from-background to-muted/20 min-h-[400px] flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="space-y-4 text-left">
                <h3 className="font-bold text-lg">Training sources</h3>
                <div className="p-4 border rounded-lg bg-background shadow-sm hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold">PDF</div>
                    <div><div className="font-medium">Product_Manual_v2.pdf</div><div className="text-xs text-muted-foreground">1.2MB • Trained just now</div></div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg bg-background shadow-sm hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-green-100 flex items-center justify-center text-green-600 font-bold">WEB</div>
                    <div><div className="font-medium">yoursite.com/help</div><div className="text-xs text-muted-foreground">Crawled 38 pages</div></div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg bg-background shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary"><CalendarCheck className="w-5 h-5" /></div>
                  <div><div className="font-medium">Action: Book a meeting</div><div className="text-xs text-muted-foreground">Connected to your calendar</div></div>
                </div>
              </div>
              <div className="bg-background border rounded-xl shadow-lg flex flex-col h-[360px]">
                <div className="p-4 border-b flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">KA</div>
                  <div><div className="font-bold text-sm">Support Agent</div><div className="text-xs text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online</div></div>
                </div>
                <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-muted/5 text-sm text-left">
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-muted flex-shrink-0 flex items-center justify-center font-bold text-xs">U</div>
                    <div className="bg-primary text-primary-foreground p-3 rounded-l-xl rounded-br-xl">Can someone walk me through setup this week?</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-primary-foreground font-bold text-xs">KA</div>
                    <div className="bg-primary/10 p-3 rounded-r-xl rounded-bl-xl">Absolutely! I have Thursday at 2:00 PM or Friday at 10:00 AM open. Which works?</div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-muted flex-shrink-0 flex items-center justify-center font-bold text-xs">U</div>
                    <div className="bg-primary text-primary-foreground p-3 rounded-l-xl rounded-br-xl">Thursday at 2 works.</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-primary-foreground font-bold text-xs">KA</div>
                    <div className="bg-green-500/10 text-foreground p-3 rounded-r-xl rounded-bl-xl border border-green-500/20">
                      <span className="flex items-center gap-1.5 font-medium text-green-600 mb-1"><Sparkles className="w-3.5 h-3.5" /> Action completed</span>
                      Booked! Thursday 2:00 PM is on the calendar and I've emailed you the invite. 🎉
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t"><div className="h-10 bg-muted/50 rounded-full w-full" /></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
