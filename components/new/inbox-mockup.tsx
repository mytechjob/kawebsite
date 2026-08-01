import { Search, Filter, Phone, Video, MoreHorizontal, Send } from "lucide-react";

const NAV_ITEMS = [
  { label: "Inbox", count: 12, active: true },
  { label: "Assigned to me", count: 3 },
  { label: "VIP Customers", count: 5 },
  { label: "Contacts" },
];

const CONVERSATIONS = [
  { name: "Jordan Lee", company: "Northwind", snippet: "Can we add 12 more seats this month?", initial: "J", active: true },
  { name: "Priya Chen", company: "Kestrel Labs", snippet: "Evaluating alternatives before renewal.", initial: "P" },
  { name: "Sam Okafor", company: "Tandem", snippet: "Does the API support bulk export yet?", initial: "S" },
  { name: "Dana Kim", company: "Volt Inc", snippet: "Your rival quoted us 20% less.", initial: "D" },
  { name: "Ava Torres", company: "Brightside", snippet: "Thanks, that resolved it — appreciated!", initial: "A" },
];

export function InboxMockup() {
  return (
    <div className="min-w-[900px] rounded-2xl border bg-card shadow-2xl overflow-hidden text-left">
      <div className="grid grid-cols-[180px_260px_1fr_240px]">
        {/* Workspace / nav */}
        <div className="border-r bg-muted/30 p-4">
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold">KA</span>
            <span className="text-sm font-bold">Northwind</span>
          </div>
          <nav className="space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium ${
                  item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                <span>{item.label}</span>
                {item.count && <span className={item.active ? "text-primary-foreground/80" : "text-muted-foreground/70"}>{item.count}</span>}
              </div>
            ))}
          </nav>
        </div>

        {/* Conversation list */}
        <div className="border-r">
          <div className="flex items-center gap-2 border-b p-3">
            <div className="flex items-center gap-1.5 flex-1 rounded-md border bg-background px-2 py-1.5 text-xs text-muted-foreground">
              <Search className="w-3.5 h-3.5" /> Search
            </div>
            <Filter className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
          <div className="divide-y">
            {CONVERSATIONS.map((c) => (
              <div key={c.name} className={`flex items-start gap-2.5 p-3 ${c.active ? "bg-primary/5" : ""}`}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">{c.initial}</span>
                <span className="min-w-0">
                  <span className="flex items-baseline gap-1">
                    <span className="text-xs font-semibold truncate">{c.name}</span>
                    <span className="text-[10px] text-muted-foreground truncate">{c.company}</span>
                  </span>
                  <span className="block text-xs text-muted-foreground truncate">{c.snippet}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Thread */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b p-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">J</span>
              <div>
                <div className="text-xs font-semibold">Jordan Lee</div>
                <div className="text-[10px] text-muted-foreground">Northwind · billing synced</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-3.5 h-3.5" />
              <Video className="w-3.5 h-3.5" />
              <MoreHorizontal className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex-1 space-y-3 p-4">
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl rounded-tl-none border bg-background p-2.5 text-xs">
                Can we add 12 more seats this month?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-primary p-2.5 text-xs text-primary-foreground">
                Absolutely — I&apos;ve flagged this as an upsell and looped in your account exec, Dana, with the details.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-xl border border-amber-300/60 bg-amber-50 p-2.5 text-[11px] text-amber-800 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300">
                <span className="font-semibold">Signal detected · Upsell</span> — routed to AE · Dana with account context attached.
              </div>
            </div>
          </div>
          <div className="border-t p-3">
            <div className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-xs text-muted-foreground">
              <span className="flex-1">Write a reply…</span>
              <Send className="w-3.5 h-3.5 text-primary" />
            </div>
          </div>
        </div>

        {/* Contact panel */}
        <div className="bg-muted/30 p-4 text-xs">
          <div className="flex flex-col items-center text-center mb-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold mb-2">J</span>
            <div className="font-semibold">Jordan Lee</div>
            <div className="text-muted-foreground">jordan@northwind.com</div>
          </div>
          <div className="space-y-2.5">
            <div className="flex justify-between"><span className="text-muted-foreground">Plan</span><span className="font-medium">Growth</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Seats</span><span className="font-medium">34 / 40</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">ARR</span><span className="font-medium">$42,000</span></div>
            <div className="flex justify-between items-center"><span className="text-muted-foreground">Signal</span><span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">Upsell</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
