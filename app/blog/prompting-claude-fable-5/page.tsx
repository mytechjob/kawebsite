import { PageLayout } from "@/components/layout/page-layout";
import { Newsletter } from "@/components/sections/newsletter";
import { CTA } from "@/components/sections/cta";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/metadata";
import type { Metadata } from "next";

const TITLE =
  "Your Best Prompting Habits Are Now Your Worst: The GOALS Framework for Claude Fable 5";
const DESCRIPTION =
  "Prompting Claude Fable 5 requires a different playbook. The GOALS framework, distilled from official Anthropic guidance: Give the why, Outcomes not steps, Agree on done, Let it run, Show the evidence.";
const PATH = "/blog/prompting-claude-fable-5";
const IMAGE =
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200";

export const metadata: Metadata = {
  title: `${TITLE} | Knowledge Agents Blog`,
  description: DESCRIPTION,
  keywords: [
    "prompting Claude Fable 5",
    "Claude Fable 5 prompting guide",
    "GOALS framework",
    "how to prompt Claude Fable 5",
    "Anthropic prompting guidance",
    "AI agent prompting",
  ],
  authors: [{ name: "Atif Kanji" }],
  openGraph: { images: [IMAGE] },
};

// Scoped, Knowledge Agents–themed styling for the GOALS article. Every selector
// is prefixed with `.goals-article` so the document-style CSS never leaks into
// the rest of the site. The article is a self-contained light "document" so the
// inline SVG charts stay legible in both light and dark site themes.
const CSS = `
.goals-article{
  --ink:#0f172a;
  --body:#3d4654;
  --muted:#69727f;
  --line:#e6e9ef;
  --bg:#ffffff;
  --alt:#f6f8fb;
  --ka:#7c3aed;            /* Knowledge Agents primary */
  --ka-soft:#efe7fd;
  --legacy:#64748b;        /* prior models */
  --legacy-soft:#eef1f5;
  --mono:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace;
  background:var(--bg);
  color:var(--body);
  font-family:'Inter',system-ui,sans-serif;
  line-height:1.65;
  font-size:17px;
  -webkit-font-smoothing:antialiased;
}
.goals-article *{margin:0;padding:0;box-sizing:border-box}
.goals-article h1,.goals-article h2,.goals-article h3{font-family:'Plus Jakarta Sans',sans-serif;color:var(--ink);line-height:1.15;letter-spacing:-0.015em}
.goals-article a{color:var(--ka);text-decoration:none}
.goals-article a:hover{text-decoration:underline}
.goals-article .wrap{max-width:820px;margin:0 auto;padding:0 24px}

/* hero */
.goals-article .hero{padding:64px 0 56px;border-bottom:1px solid var(--line)}
.goals-article .eyebrow{font-family:var(--mono);font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ka);font-weight:500;margin-bottom:20px}
.goals-article .hero h1{font-size:clamp(32px,5vw,50px);font-weight:700;margin-bottom:22px;max-width:16ch}
.goals-article .hero p.lede{font-size:20px;color:var(--body);max-width:56ch;margin-bottom:28px}
.goals-article .byline{font-size:14.5px;color:var(--muted);margin-bottom:40px;font-weight:500}
.goals-article .byline strong{color:var(--ink);font-weight:600}
.goals-article .goals-strip{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;max-width:760px}
.goals-article .goals-strip .cell{border:1px solid var(--line);border-radius:12px;padding:16px 14px;background:var(--bg);transition:border-color .15s}
.goals-article .goals-strip .cell:hover{border-color:var(--ka)}
.goals-article .goals-strip .letter{font-family:'Plus Jakarta Sans',sans-serif;font-size:30px;font-weight:700;color:var(--ka);line-height:1;display:block;margin-bottom:8px}
.goals-article .goals-strip .word{font-size:12.5px;font-weight:600;color:var(--ink);line-height:1.35;display:block}

/* generic sections */
.goals-article section{padding:56px 0}
.goals-article section.alt{background:var(--alt);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.goals-article .kicker{font-family:var(--mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
.goals-article h2{font-size:clamp(26px,3.4vw,34px);margin-bottom:18px}
.goals-article h3{font-size:19px;margin:30px 0 10px}
.goals-article p{margin-bottom:16px;max-width:68ch}
.goals-article p.note{font-size:14px;color:var(--muted)}

/* letter sections */
.goals-article .letterhead{display:flex;align-items:flex-start;gap:24px;margin-bottom:26px}
.goals-article .bigletter{font-family:'Plus Jakarta Sans',sans-serif;font-size:96px;font-weight:700;line-height:.85;color:transparent;-webkit-text-stroke:2px var(--ka);flex-shrink:0;user-select:none}
.goals-article .letterhead .titles{padding-top:10px}
.goals-article .letterhead .titles .sub{font-size:15px;color:var(--muted);margin-top:6px;margin-bottom:0}

/* charts */
.goals-article figure{margin:34px 0;border:1px solid var(--line);border-radius:14px;background:var(--bg);overflow:hidden}
.goals-article figure .figbody{padding:26px 22px 8px}
.goals-article figure svg{width:100%;height:auto;display:block}
.goals-article figcaption{padding:14px 22px 16px;font-size:13.5px;color:var(--muted);border-top:1px solid var(--line);background:var(--alt)}
.goals-article .legend{display:flex;gap:22px;flex-wrap:wrap;padding:0 22px 6px;font-size:13px;color:var(--body);font-weight:500}
.goals-article .legend span{display:inline-flex;align-items:center;gap:8px}
.goals-article .swatch{width:22px;height:0;border-top:3px solid;display:inline-block;border-radius:2px}
.goals-article .swatch.fable{border-color:var(--ka)}
.goals-article .swatch.legacy{border-color:var(--legacy);border-top-style:dashed}
.goals-article .swatch.block-f{width:14px;height:14px;background:var(--ka);border:none;border-radius:3px}
.goals-article .swatch.block-l{width:14px;height:14px;background:var(--legacy);border:none;border-radius:3px}

/* prompt comparisons */
.goals-article .compare{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:26px 0}
.goals-article .prompt-card{border:1px solid var(--line);border-radius:12px;overflow:hidden;display:flex;flex-direction:column}
.goals-article .prompt-card .tag{font-family:var(--mono);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;font-weight:500;padding:9px 16px;border-bottom:1px solid var(--line)}
.goals-article .prompt-card.old .tag{background:var(--legacy-soft);color:var(--legacy)}
.goals-article .prompt-card.new .tag{background:var(--ka-soft);color:var(--ka)}
.goals-article .prompt-card pre{font-family:var(--mono);font-size:13px;line-height:1.6;padding:16px;white-space:pre-wrap;color:var(--ink);flex:1;background:var(--bg)}
.goals-article .prompt-card .verdict{font-size:12.5px;color:var(--muted);padding:10px 16px;border-top:1px dashed var(--line)}

/* callouts */
.goals-article .callout{border-left:3px solid var(--ka);background:var(--ka-soft);border-radius:0 10px 10px 0;padding:18px 22px;margin:26px 0}
.goals-article .callout p{margin-bottom:0;font-size:15.5px}
.goals-article .callout .src{display:block;margin-top:8px;font-size:12.5px;color:var(--muted);font-family:var(--mono)}

/* template box */
.goals-article .template{border:1.5px solid var(--ink);border-radius:14px;overflow:hidden;margin:30px 0}
.goals-article .template .head{background:var(--ink);color:#fff;padding:12px 20px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:15px;display:flex;justify-content:space-between;align-items:center}
.goals-article .template button{font-family:var(--mono);font-size:12px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);border-radius:6px;padding:5px 12px;cursor:pointer}
.goals-article .template button:hover{background:rgba(255,255,255,.12)}
.goals-article .template pre{font-family:var(--mono);font-size:13.5px;line-height:1.7;padding:20px;white-space:pre-wrap;color:var(--ink)}
.goals-article .template .ph{color:var(--ka);font-weight:500}

.goals-article ul.tight{margin:0 0 18px 20px}
.goals-article ul.tight li{margin-bottom:10px;max-width:66ch}

/* examples */
.goals-article .example-label{font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:17px;color:var(--ink);margin:36px 0 4px}
.goals-article .example-label span{color:var(--ka)}

/* recap */
.goals-article .recap{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin:30px 0 8px}
.goals-article .recap .cell{border:1px solid var(--line);border-radius:12px;padding:18px 14px;background:var(--bg)}
.goals-article .recap .letter{font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;font-weight:700;color:var(--ka)}
.goals-article .recap .word{font-size:13px;font-weight:600;color:var(--ink);display:block;margin:6px 0 4px}
.goals-article .recap .desc{font-size:12px;color:var(--muted);line-height:1.5}

/* in-article source note */
.goals-article .artfoot{border-top:1px solid var(--line);padding:32px 0 8px;font-size:13.5px;color:var(--muted)}
.goals-article .artfoot p{margin-bottom:6px}

@media(max-width:720px){
  .goals-article .compare{grid-template-columns:1fr}
  .goals-article .goals-strip,.goals-article .recap{grid-template-columns:repeat(2,1fr)}
  .goals-article .goals-strip .cell:last-child,.goals-article .recap .cell:last-child{grid-column:span 2}
  .goals-article .bigletter{font-size:64px}
  .goals-article .hero{padding:44px 0 40px}
}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
`;

const ARTICLE_HTML = `
<header class="hero">
  <div class="wrap">
    <p class="eyebrow">Claude Fable 5 &middot; Field Guide</p>
    <h1>Your best prompting habits are now your worst.</h1>
    <p class="lede">Claude Fable 5 was built for long, ambiguous, end to end work, and the prompting habits that made you good with Opus 4.x will actively hold it back. Here is the new playbook, distilled from official Anthropic guidance into one word: <strong style="color:var(--ink)">GOALS</strong>.</p>
    <p class="byline">Written and edited by <strong>Atif Kanji</strong> &middot; July 10, 2026</p>
    <div class="goals-strip">
      <a class="cell" href="#g"><span class="letter">G</span><span class="word">Give the why</span></a>
      <a class="cell" href="#o"><span class="letter">O</span><span class="word">Outcomes, not steps</span></a>
      <a class="cell" href="#a"><span class="letter">A</span><span class="word">Agree on "done"</span></a>
      <a class="cell" href="#l"><span class="letter">L</span><span class="word">Let it run</span></a>
      <a class="cell" href="#s"><span class="letter">S</span><span class="word">Show the evidence</span></a>
    </div>
  </div>
</header>

<section>
  <div class="wrap">
    <p class="kicker">What changed</p>
    <h2>More instructions no longer means better output</h2>
    <p>For years, the reliable way to improve model output was to add detail: more steps, more rules, more procedure. Fable 5 breaks that relationship. Its instruction following and judgment are strong enough that a clear statement of <em>intent and outcome</em> outperforms an exhaustive checklist, and past a point, extra procedure actively degrades results. The migration guidance from Anthropic is blunt: skills and instructions written for prior models are often too prescriptive for Fable 5.</p>

    <figure>
      <div class="legend">
        <span><i class="swatch legacy"></i>Prior models (Opus 4.x era)</span>
        <span><i class="swatch fable"></i>Claude Fable 5</span>
      </div>
      <div class="figbody">
        <svg viewBox="0 0 720 360" role="img" aria-label="Conceptual chart: output quality versus prompt prescriptiveness for prior models and Fable 5">
          <line x1="60" y1="310" x2="690" y2="310" stroke="#c9cfd9" stroke-width="1.5"/>
          <line x1="60" y1="310" x2="60" y2="30" stroke="#c9cfd9" stroke-width="1.5"/>
          <text x="375" y="345" text-anchor="middle" font-size="13" fill="#69727f" font-family="Inter,sans-serif">Prompt prescriptiveness (steps, rules, procedure) &#8594;</text>
          <text x="20" y="170" text-anchor="middle" font-size="13" fill="#69727f" font-family="Inter,sans-serif" transform="rotate(-90 20 170)">Output quality &#8594;</text>
          <path d="M60,295 C180,275 300,215 440,175 C540,148 620,140 685,138" fill="none" stroke="#64748b" stroke-width="3" stroke-dasharray="7 6" stroke-linecap="round"/>
          <path d="M60,205 C110,120 165,72 240,64 C330,58 470,120 570,168 C625,194 660,210 685,220" fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="240" cy="64" r="6" fill="#7c3aed"/>
          <line x1="240" y1="70" x2="240" y2="310" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3 5" opacity=".5"/>
          <rect x="120" y="18" width="242" height="26" rx="13" fill="#efe7fd"/>
          <text x="241" y="36" text-anchor="middle" font-size="12.5" fill="#7c3aed" font-weight="600" font-family="Inter,sans-serif">Sweet spot: intent + clear outcome</text>
          <text x="596" y="255" text-anchor="middle" font-size="12" fill="#69727f" font-family="Inter,sans-serif">overspecification</text>
          <text x="596" y="271" text-anchor="middle" font-size="12" fill="#69727f" font-family="Inter,sans-serif">penalty</text>
          <text x="596" y="120" text-anchor="middle" font-size="12" fill="#8a93a3" font-family="Inter,sans-serif">plateaus: more steps,</text>
          <text x="596" y="136" text-anchor="middle" font-size="12" fill="#8a93a3" font-family="Inter,sans-serif">marginal gains</text>
        </svg>
      </div>
      <figcaption>Conceptual illustration based on the Fable 5 prompting guidance from Anthropic, not measured benchmark data. Prior models rewarded procedural detail. Fable 5 peaks with rich intent and a clear outcome, then loses quality as procedure overrides its judgment.</figcaption>
    </figure>

    <p>Every section below follows the same pattern: the principle, the old habit versus the new habit as real prompts, and what it looks like in practice. By the end you will have a template that encodes the whole framework, plus full rewrites of prompts you probably use today.</p>
  </div>
</section>

<section class="alt" id="g">
  <div class="wrap">
    <div class="letterhead">
      <span class="bigletter" aria-hidden="true">G</span>
      <div class="titles">
        <h2>Give the why</h2>
        <p class="sub">The highest leverage change: context about your actual goal outperforms any checklist of requirements.</p>
      </div>
    </div>
    <p>Fable 5 makes hundreds of small decisions in any nontrivial task: depth, format, what to include, what to skip. Intent is what lets it make those calls correctly. The template from Anthropic is worth stealing verbatim:</p>
    <div class="callout">
      <p>"I am working on <strong>[the larger task]</strong> for <strong>[who it is for]</strong>. They need <strong>[what the output enables]</strong>. With that in mind: <strong>[your specific request]</strong>."</p>
      <span class="src">Adapted from Anthropic, Prompting Claude Fable 5</span>
    </div>
    <div class="compare">
      <div class="prompt-card old">
        <span class="tag">Old habit</span>
        <pre>Write a competitive analysis of
voice agent pricing. Include a
table. Cover at least 5 vendors.
Keep it under 2 pages. Use
professional tone.</pre>
        <div class="verdict">All format and no purpose. The model cannot tell which details matter.</div>
      </div>
      <div class="prompt-card new">
        <span class="tag">The GOALS way</span>
        <pre>I am preparing a board update for
a seed stage AI company deciding
whether to build or buy voice
infrastructure. They need to know
if the unit economics work at
10,000 calls per month. With that
in mind: analyze voice agent
pricing.</pre>
        <div class="verdict">Same task. The intent tells it what "good" means here.</div>
      </div>
    </div>
  </div>
</section>

<section id="o">
  <div class="wrap">
    <div class="letterhead">
      <span class="bigletter" aria-hidden="true">O</span>
      <div class="titles">
        <h2>Outcomes, not steps</h2>
        <p class="sub">The biggest philosophical break: state the destination, let the model choose the route.</p>
      </div>
    </div>
    <p>Older models did best with exhaustive step by step instructions. Fable 5 does <em>worse</em> with them. Every procedural step you dictate substitutes your judgment for the judgment of the model, and on complex work its sense of the <em>how</em> is now frequently better than a procedure planned in advance. One clear sentence steers behavior better than enumerating every rule by name.</p>
    <ul class="tight">
      <li><strong>State the outcome you want.</strong> Let the model determine the path.</li>
      <li><strong>Audit your existing prompts, skills, and CLAUDE.md files.</strong> Instructions accumulated for older models are often too rigid now. Test without them and cut what the model handles better by default.</li>
      <li><strong>Keep the context, cut the procedure.</strong> Rich intent (the G) plus a concise instruction (the O) is the winning combination. Information helps; micromanagement hurts.</li>
    </ul>
    <div class="compare">
      <div class="prompt-card old">
        <span class="tag">Old habit</span>
        <pre>1. First read all files in /src
2. Then list every component
3. Then check each for unused props
4. Then create a report.md
5. Then fix issues one at a time
6. After each fix, run the linter
7. Then summarize changes...</pre>
        <div class="verdict">A route planned before seeing the terrain. Caps quality at your plan.</div>
      </div>
      <div class="prompt-card new">
        <span class="tag">The GOALS way</span>
        <pre>Clean up dead code and unused
props across /src without changing
behavior. Done means the test
suite still passes and the linter
is clean.</pre>
        <div class="verdict">Outcome plus constraint plus finish line. The model plans the route.</div>
      </div>
    </div>
  </div>
</section>

<section class="alt" id="a">
  <div class="wrap">
    <div class="letterhead">
      <span class="bigletter" aria-hidden="true">A</span>
      <div class="titles">
        <h2>Agree on "done"</h2>
        <p class="sub">Fable 5 runs until it believes the job is finished, so define the finish line before it starts.</p>
      </div>
    </div>
    <h3>1. Define done, measurably</h3>
    <p>Replace "make it good" with a bar the model can check itself against: "all 84 test assertions pass," "a first time visitor completes checkout without guidance," "the deck survives a skeptical CFO." If no measurement exists, have the model <em>build one first</em>, whether a test suite, a rubric, or an eval script, and then work to it.</p>
    <h3>2. Constrain excess delivery</h3>
    <p>This one surprises people. At higher effort, the failure mode of Fable 5 is not laziness. It is excess: refactoring code you did not ask about, surveying five alternative approaches, gathering more context than the task needs. The fix is the opposite of old school prompting. Instead of pushing it to try harder, tell it to hold back. The recommended language from Anthropic: <em>"Do the simplest thing that works well."</em> And if you are describing a problem or just thinking out loud, say so. Fable 5 is proactive enough to occasionally start fixing things when what you wanted was an assessment.</p>
    <div class="compare">
      <div class="prompt-card old">
        <span class="tag">Old habit</span>
        <pre>Improve the onboarding flow.
Make it really good. Be thorough
and comprehensive. Do not miss
anything.</pre>
        <div class="verdict">"Good" is undefined, and "thorough" invites excess scope.</div>
      </div>
      <div class="prompt-card new">
        <span class="tag">The GOALS way</span>
        <pre>Improve the onboarding flow. Done
means a new user reaches their
first saved project in under 3
steps, and all existing tests
pass. Do the simplest thing that
works well. No refactors outside
the onboarding path.</pre>
        <div class="verdict">A measurable bar plus an explicit ceiling on scope.</div>
      </div>
    </div>
  </div>
</section>

<section id="l">
  <div class="wrap">
    <div class="letterhead">
      <span class="bigletter" aria-hidden="true">L</span>
      <div class="titles">
        <h2>Let it run</h2>
        <p class="sub">Recalibrate your expectations about time. Long runtimes are the model working correctly.</p>
      </div>
    </div>
    <p>At high effort, a single response can take minutes; autonomous runs can extend for hours. Anthropic flags this as the most common source of confusion for teams migrating from Opus 4.8. The old rhythm of quick output, spot the problem, prompt again, repeat, is replaced by one long run that plans, executes, and checks itself.</p>

    <figure>
      <div class="legend">
        <span><i class="swatch block-l"></i>Your prompts</span>
        <span><i class="swatch block-f"></i>Model working</span>
      </div>
      <div class="figbody">
        <svg viewBox="0 0 720 300" role="img" aria-label="Timeline comparison: prior models require many short prompt and output iterations; Fable 5 completes one long autonomous run with self checks">
          <text x="60" y="52" font-size="13.5" fill="#0f172a" font-weight="600" font-family="Inter,sans-serif">Prior models: iterate, iterate, iterate</text>
          <g>
            <rect x="60"  y="66" width="16" height="26" rx="4" fill="#64748b"/>
            <rect x="82"  y="66" width="58" height="26" rx="4" fill="#7c3aed" opacity=".4"/>
            <rect x="156" y="66" width="16" height="26" rx="4" fill="#64748b"/>
            <rect x="178" y="66" width="58" height="26" rx="4" fill="#7c3aed" opacity=".4"/>
            <rect x="252" y="66" width="16" height="26" rx="4" fill="#64748b"/>
            <rect x="274" y="66" width="58" height="26" rx="4" fill="#7c3aed" opacity=".4"/>
            <rect x="348" y="66" width="16" height="26" rx="4" fill="#64748b"/>
            <rect x="370" y="66" width="58" height="26" rx="4" fill="#7c3aed" opacity=".4"/>
            <rect x="444" y="66" width="16" height="26" rx="4" fill="#64748b"/>
            <rect x="466" y="66" width="58" height="26" rx="4" fill="#7c3aed" opacity=".4"/>
            <text x="548" y="84" font-size="12" fill="#69727f" font-family="Inter,sans-serif">&hellip;you are the loop</text>
          </g>
          <text x="60" y="164" font-size="13.5" fill="#0f172a" font-weight="600" font-family="Inter,sans-serif">Fable 5: brief once, one long run</text>
          <g>
            <rect x="60" y="178" width="16" height="26" rx="4" fill="#64748b"/>
            <rect x="82" y="178" width="560" height="26" rx="4" fill="#7c3aed"/>
            <line x1="200" y1="172" x2="200" y2="210" stroke="#ffffff" stroke-width="2.5"/>
            <line x1="330" y1="172" x2="330" y2="210" stroke="#ffffff" stroke-width="2.5"/>
            <line x1="460" y1="172" x2="460" y2="210" stroke="#ffffff" stroke-width="2.5"/>
            <line x1="580" y1="172" x2="580" y2="210" stroke="#ffffff" stroke-width="2.5"/>
            <text x="200" y="228" text-anchor="middle" font-size="11.5" fill="#7c3aed" font-family="Inter,sans-serif">self check</text>
            <text x="330" y="228" text-anchor="middle" font-size="11.5" fill="#7c3aed" font-family="Inter,sans-serif">self check</text>
            <text x="460" y="228" text-anchor="middle" font-size="11.5" fill="#7c3aed" font-family="Inter,sans-serif">self check</text>
            <text x="580" y="228" text-anchor="middle" font-size="11.5" fill="#7c3aed" font-family="Inter,sans-serif">self check</text>
            <text x="654" y="196" font-size="12" fill="#0f172a" font-weight="600" font-family="Inter,sans-serif">done,</text>
            <text x="654" y="211" font-size="12" fill="#0f172a" font-weight="600" font-family="Inter,sans-serif">verified</text>
          </g>
          <text x="60" y="272" font-size="12.5" fill="#69727f" font-family="Inter,sans-serif">The loop moves inside the run: the model plans, executes, and audits its own work against the spec.</text>
        </svg>
      </div>
      <figcaption>Schematic of the interaction pattern shift. On the API, revisit timeout settings: a timeout tuned for ten second responses will kill work that is proceeding correctly.</figcaption>
    </figure>

    <h3>Pick the effort level: the dial belongs to you, not the model</h3>
    <p>Effort is the primary Fable 5 control for intelligence versus latency versus cost, and it is a setting <em>you</em> choose. <strong>High</strong> is the default for most demanding work. <strong>Xhigh</strong> is for capability sensitive tasks where first shot correctness beats speed. <strong>Medium and low</strong> handle routine subtasks, and notably, Fable 5 at lower effort often matches or exceeds prior models at max effort, which changes the cost math considerably.</p>

    <figure>
      <div class="figbody">
        <svg viewBox="0 0 720 320" role="img" aria-label="Bar chart: Fable 5 output quality by effort level, with a dashed reference line for a prior flagship at maximum effort">
          <line x1="70" y1="270" x2="680" y2="270" stroke="#c9cfd9" stroke-width="1.5"/>
          <line x1="70" y1="128" x2="680" y2="128" stroke="#64748b" stroke-width="2" stroke-dasharray="7 6"/>
          <text x="678" y="118" text-anchor="end" font-size="12.5" fill="#64748b" font-weight="600" font-family="Inter,sans-serif">Prior flagship at max effort</text>
          <g>
            <rect x="110" y="140" width="90" height="130" rx="6" fill="#7c3aed" opacity=".4"/>
            <text x="155" y="292" text-anchor="middle" font-size="13" fill="#3d4654" font-family="Inter,sans-serif">low</text>
            <rect x="255" y="108" width="90" height="162" rx="6" fill="#7c3aed" opacity=".62"/>
            <text x="300" y="292" text-anchor="middle" font-size="13" fill="#3d4654" font-family="Inter,sans-serif">medium</text>
            <rect x="400" y="72" width="90" height="198" rx="6" fill="#7c3aed" opacity=".82"/>
            <text x="445" y="292" text-anchor="middle" font-size="13" fill="#3d4654" font-family="Inter,sans-serif">high (default)</text>
            <rect x="545" y="44" width="90" height="226" rx="6" fill="#7c3aed"/>
            <text x="590" y="292" text-anchor="middle" font-size="13" fill="#3d4654" font-family="Inter,sans-serif">xhigh</text>
          </g>
          <rect x="86" y="150" width="150" height="42" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="1"/>
          <text x="161" y="167" text-anchor="middle" font-size="11.5" fill="#7c3aed" font-weight="600" font-family="Inter,sans-serif">Fable 5 "low" already rivals</text>
          <text x="161" y="182" text-anchor="middle" font-size="11.5" fill="#7c3aed" font-weight="600" font-family="Inter,sans-serif">the previous maximum</text>
          <text x="70" y="34" font-size="13" fill="#69727f" font-family="Inter,sans-serif">Output quality &#8594; (illustrative)</text>
        </svg>
      </div>
      <figcaption>Directional illustration of the Anthropic guidance, not benchmark data: effort is a cost and latency dial, and lower Fable 5 settings often perform at or above prior generation maximums. (Claude Code also offers an "ultracode" session mode combining xhigh with automatic workflow orchestration. It is powerful, but rarely necessary when the goal and verification loop are clear.)</figcaption>
    </figure>

    <h3>Front load decisions for autonomous runs</h3>
    <p>For pipelines where no one is watching, say so: tell the model the user cannot answer questions during the run, so pausing to ask permission will block the work. Grant the authority and access it needs before the run starts, not during.</p>
  </div>
</section>

<section class="alt" id="s">
  <div class="wrap">
    <div class="letterhead">
      <span class="bigletter" aria-hidden="true">S</span>
      <div class="titles">
        <h2>Show the evidence</h2>
        <p class="sub">Autonomy without verification is just hope. Make "done" a claim that must be proven.</p>
      </div>
    </div>
    <p>On long multi step tasks, any model can drift into reporting a step as complete when it has not been verified. The single most important instruction in the official guide targets exactly this:</p>
    <div class="callout">
      <p>"Before reporting progress, audit each claim against a tool result from this session. Only report work you can point to evidence for; if something is not yet verified, say so explicitly."</p>
      <span class="src">Anthropic, Prompting Claude Fable 5 (put this in your system prompt, not just the task)</span>
    </div>
    <p>In testing by Anthropic, this instruction nearly eliminated fabricated status reports, even on tasks designed to elicit them. The word <em>audit</em> matters; it outperformed softer phrasings.</p>

    <figure>
      <div class="figbody">
        <svg viewBox="0 0 720 280" role="img" aria-label="Diagram of the verification loop: builder produces work and claims, claims are audited against tool output, then a fresh context verifier subagent checks against the spec before done">
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#69727f"/>
            </marker>
          </defs>
          <rect x="30" y="90" width="150" height="76" rx="12" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
          <text x="105" y="122" text-anchor="middle" font-size="14" fill="#0f172a" font-weight="600" font-family="Inter,sans-serif">Builder</text>
          <text x="105" y="142" text-anchor="middle" font-size="12" fill="#69727f" font-family="Inter,sans-serif">does the work</text>
          <rect x="240" y="90" width="180" height="76" rx="12" fill="#efe7fd" stroke="#7c3aed" stroke-width="1.5"/>
          <text x="330" y="116" text-anchor="middle" font-size="14" fill="#7c3aed" font-weight="600" font-family="Inter,sans-serif">Evidence audit</text>
          <text x="330" y="136" text-anchor="middle" font-size="12" fill="#3d4654" font-family="Inter,sans-serif">every claim &#8594; a real</text>
          <text x="330" y="152" text-anchor="middle" font-size="12" fill="#3d4654" font-family="Inter,sans-serif">tool result</text>
          <rect x="480" y="90" width="180" height="76" rx="12" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="6 4"/>
          <text x="570" y="116" text-anchor="middle" font-size="14" fill="#7c3aed" font-weight="600" font-family="Inter,sans-serif">Fresh eyes verifier</text>
          <text x="570" y="136" text-anchor="middle" font-size="12" fill="#3d4654" font-family="Inter,sans-serif">clean context subagent</text>
          <text x="570" y="152" text-anchor="middle" font-size="12" fill="#3d4654" font-family="Inter,sans-serif">checks against the spec</text>
          <line x1="180" y1="128" x2="234" y2="128" stroke="#69727f" stroke-width="1.5" marker-end="url(#arr)"/>
          <line x1="420" y1="128" x2="474" y2="128" stroke="#69727f" stroke-width="1.5" marker-end="url(#arr)"/>
          <path d="M570,166 C570,225 220,225 108,170" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 5" marker-end="url(#arr)"/>
          <text x="345" y="238" text-anchor="middle" font-size="12" fill="#64748b" font-family="Inter,sans-serif">gaps found &#8594; back to the builder</text>
          <text x="570" y="52" text-anchor="middle" font-size="13.5" fill="#0f172a" font-weight="600" font-family="Inter,sans-serif">&#10003; Done: verified, not asserted</text>
          <line x1="570" y1="88" x2="570" y2="62" stroke="#69727f" stroke-width="1.5" marker-end="url(#arr)"/>
        </svg>
      </div>
      <figcaption>Fresh eyes beat self review: separate, fresh context verifier subagents checking work against the spec tend to outperform the builder critiquing itself. The builder knows what it <em>meant</em> to do; the verifier only knows what the spec says.</figcaption>
    </figure>

    <p>On long builds, add a cadence so hours of autonomous work never go unverified until the end: <em>"Establish a method for checking your own work at an interval of [X] as you build."</em></p>
  </div>
</section>

<section>
  <div class="wrap">
    <p class="kicker">Put it to work</p>
    <h2>The GOALS prompt template</h2>
    <p>One structure that encodes the whole framework. Fill the brackets, delete what does not apply, and keep the evidence audit line in your system prompt or skills so you never retype it.</p>
    <div class="template">
      <div class="head"><span>goals-template.txt</span><button type="button" onclick="window.__copyGoalsTpl(this)">Copy</button></div>
      <pre id="goals-tpl">I am working on <span class="ph">[the larger goal]</span> for <span class="ph">[who it is for]</span>.
They need <span class="ph">[what the output enables]</span>.                        # G: Give the why

With that in mind: <span class="ph">[the outcome you want]</span>.                  # O: Outcomes, not steps

Done means <span class="ph">[measurable bar: tests pass, user completes X,
metric hits Y]</span>. Do the simplest thing that works well;
stay within <span class="ph">[scope boundary]</span>.                               # A: Agree on "done"

Work autonomously. I cannot answer questions during
the run. Establish a method for checking your own work
at an interval of <span class="ph">[X]</span> as you build.                       # L: Let it run

Before reporting progress, audit each claim against a
tool result from this session. Only report work you can
point to evidence for; if something is not yet verified,
say so explicitly.                                        # S: Show the evidence</pre>
    </div>
  </div>
</section>

<section class="alt" id="examples">
  <div class="wrap">
    <p class="kicker">From Opus to Fable</p>
    <h2>Three prompts, rewritten</h2>
    <p>The fastest way to internalize the shift is to see prompts you probably use today, rewritten. Each pair below is the same task twice: once the way it was written for Opus, and once the GOALS way for Fable 5.</p>

    <p class="example-label"><span>Example 1</span> &middot; Shipping a product feature</p>
    <div class="compare">
      <div class="prompt-card old">
        <span class="tag">How you prompted Opus</span>
        <pre>Add CSV export to the dashboard.
1. Add an Export button top right
2. On click, call /api/export
3. Build the endpoint with pandas
4. Stream the file as a download
5. Add a loading spinner
6. Write unit tests for the
   endpoint
7. Update the README</pre>
        <div class="verdict">You designed the solution before the model ever saw the codebase.</div>
      </div>
      <div class="prompt-card new">
        <span class="tag">The Fable 5 way</span>
        <pre>Our enterprise users need to pull
dashboard data into Excel for
board reporting. Add CSV export to
the dashboard. Done means a user
can download the current filtered
view in one click and all tests
pass. Do the simplest thing that
works well. Audit each claim
against a tool result before
reporting progress.</pre>
        <div class="verdict">Intent, outcome, finish line, evidence. The model designs the solution.</div>
      </div>
    </div>

    <p class="example-label"><span>Example 2</span> &middot; Analyzing data for a decision</p>
    <div class="compare">
      <div class="prompt-card old">
        <span class="tag">How you prompted Opus</span>
        <pre>Analyze sales_q2.csv. First clean
the null values. Then group
revenue by region. Then create 5
charts: bar, line, pie, scatter,
heatmap. Then write a summary with
3 bullet points per chart.</pre>
        <div class="verdict">A fixed procedure caps the analysis at what you already suspected.</div>
      </div>
      <div class="prompt-card new">
        <span class="tag">The Fable 5 way</span>
        <pre>I am deciding whether to keep our
two lowest performing sales
regions or consolidate them.
sales_q2.csv has the data.
Recommend a decision and show the
evidence behind it. Done means
every claim traces to a specific
number in the file.</pre>
        <div class="verdict">A decision to inform, not a chart list to complete. The model may surface what you never thought to ask.</div>
      </div>
    </div>

    <p class="example-label"><span>Example 3</span> &middot; Writing content that gets cited</p>
    <div class="compare">
      <div class="prompt-card old">
        <span class="tag">How you prompted Opus</span>
        <pre>Write a 1500 word blog post on AI
lease abstraction. Use H2 headings
every 200 words. Include the
keyword "AI lease abstraction" 8
times. End with a conclusion and a
call to action.</pre>
        <div class="verdict">Keyword arithmetic reads as filler to modern search and AI engines alike.</div>
      </div>
      <div class="prompt-card new">
        <span class="tag">The Fable 5 way</span>
        <pre>We want AI engines like ChatGPT
and Perplexity to cite us when
property managers ask about lease
abstraction. Readers are
operations leads evaluating tools.
Write the article that earns that
citation. Done means it answers
the questions a buyer actually
asks, and every claim is specific
enough to quote.</pre>
        <div class="verdict">Optimize for being the best answer, and the format follows.</div>
      </div>
    </div>

    <p>Notice what every rewrite has in common: the Opus version tells the model what to <em>do</em>, and the Fable 5 version tells it what must be <em>true when it finishes</em>. That is the entire shift in one sentence.</p>
  </div>
</section>

<section>
  <div class="wrap">
    <p class="kicker">The bottom line</p>
    <h2>Brief it like a senior hire</h2>
    <p>The prompting evolution from Opus 4.x to Fable 5 mirrors the shift from managing a junior employee to briefing a senior one. Juniors need procedures. Seniors need intent, a definition of done, room to work, and accountability for evidence.</p>
    <div class="recap">
      <div class="cell"><span class="letter">G</span><span class="word">Give the why</span><span class="desc">Goal, audience, what the output enables.</span></div>
      <div class="cell"><span class="letter">O</span><span class="word">Outcomes, not steps</span><span class="desc">State the destination; it plans the route.</span></div>
      <div class="cell"><span class="letter">A</span><span class="word">Agree on "done"</span><span class="desc">A measurable bar, plus a ceiling on scope.</span></div>
      <div class="cell"><span class="letter">L</span><span class="word">Let it run</span><span class="desc">Long runs are correct; you pick the effort.</span></div>
      <div class="cell"><span class="letter">S</span><span class="word">Show the evidence</span><span class="desc">Audit claims against tool output; verify fresh.</span></div>
    </div>
    <p>Point it at your hardest unsolved problem: the workflow you abandoned because no model could do it reliably. Prompt it in GOALS. That is where Fable 5 stops looking like an upgrade and starts looking like a different product entirely.</p>

    <div class="artfoot">
      <p><strong>Sources:</strong> Anthropic, "Prompting Claude Fable 5" (platform.claude.com) &middot; Anthropic, "Introducing Claude Fable 5 and Claude Mythos 5."</p>
      <p>Charts are conceptual illustrations of documented guidance, not benchmark measurements.</p>
    </div>
  </div>
</section>
`;

const COPY_SCRIPT = `
window.__copyGoalsTpl = function (btn) {
  var el = document.getElementById('goals-tpl');
  if (!el) return;
  var text = el.innerText;
  var done = function () { btn.textContent = 'Copied!'; setTimeout(function () { btn.textContent = 'Copy'; }, 1600); };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done);
  } else {
    var ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { btn.textContent = 'Select and copy'; }
    document.body.removeChild(ta);
  }
};
`;

export default function PromptingClaudeFable5Page() {
  return (
    <PageLayout>
      <JsonLd
        data={[
          articleSchema({
            title: TITLE,
            description: DESCRIPTION,
            path: PATH,
            image: IMAGE,
            author: "Atif Kanji",
            datePublished: "2026-07-10",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: TITLE, path: PATH },
          ]),
        ]}
      />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="goals-article">
        <div dangerouslySetInnerHTML={{ __html: ARTICLE_HTML }} />
      </div>
      <script dangerouslySetInnerHTML={{ __html: COPY_SCRIPT }} />
      <Newsletter />
      <CTA />
    </PageLayout>
  );
}
