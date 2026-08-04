/**
 * Global blog furniture — everything that appears on EVERY article.
 *
 * This is the single place to change site-wide blog elements. Edit a value
 * here and it updates across all articles at once, with no per-post edits:
 *
 *   - footerCta        the promo block below every article body
 *   - emailCapture     the newsletter/lead-capture block and optional pop-up
 *   - announcement     an optional strip above every article (launches, events)
 *
 * Set `enabled: false` on any block to remove it everywhere.
 */

export const BLOG_GLOBALS = {
  /** Promo block rendered directly under the article body. */
  footerCta: {
    enabled: true,
    heading: "See a Knowledge Agent answer from your own content",
    body: "Point an agent at your help center or upload a document, and watch it answer with citations in under five minutes. No credit card required.",
    primary: { label: "Start free", href: "/pricing" },
    secondary: { label: "Talk to us", href: "/contact" },
  },

  /**
   * Email capture. `popup` controls the timed modal; `inline` controls the
   * static block. Turning on `popup.enabled` shows it on every article.
   */
  emailCapture: {
    inline: { enabled: true },
    popup: {
      enabled: false,
      /** Show after this many seconds on the page. */
      delaySeconds: 25,
      /** Or when the reader passes this much of the article (0–1). */
      scrollThreshold: 0.5,
      heading: "Get the next guide first",
      body: "Practical playbooks on knowledge management and AI agents. One email a month, no fluff.",
      cta: "Subscribe",
      /** Remembered per visitor so it never nags twice. */
      storageKey: "ka-blog-popup-dismissed",
    },
  },

  /** Optional strip above every article. Set enabled: true to switch on. */
  announcement: {
    enabled: false,
    text: "",
    href: "",
  },
} as const;
