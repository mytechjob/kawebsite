import type { Metadata } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "sonner"
import { SITE, absoluteUrl } from "@/lib/site"
import "@/app/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "knowledge agent",
    "AI knowledge agent",
    "AI chatbot builder",
    "custom AI chatbot",
    "AI agent for customer service",
    "chatbot trained on your data",
    "no-code AI agent",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    "facebook-domain-verification": "hteojo85um26xx1fdoftmuovwqx6cg",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <meta name="referrer" content="no-referrer-when-downgrade" />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WZ9K469Q');
          `}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CRRX66KVW6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-CRRX66KVW6');
           `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
             !function(f,b,e,v,n,t,s)
             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
             n.queue=[];t=b.createElement(e);t.async=!0;
             t.src=v;s=b.getElementsByTagName(e)[0];
             s.parentNode.insertBefore(t,s)}(window, document,'script',
             'https://connect.facebook.net/en_US/fbevents.js');
             fbq('init', '1039874798566661');
             fbq('track', 'PageView');
           `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1039874798566661&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZ9K469Q"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </ThemeProvider>

        <Analytics />

        {/* Chat Widget Integration (Simple Mode) — secured by browser CORS */}
        <div id="kb-chat-widget" />
        <Script id="kb-chat-widget-loader" strategy="afterInteractive">
          {`
            (function() {
              const projectId = "4665bc74-a30f-4fb6-996f-09177ad84287";
              const apiUrl = "https://app.knowledgeagents.com/api/widget/" + projectId + "/chat";
              const avatarUrl = "https://app.knowledgeagents.com/avatars/avatar_05.png";

              const script = document.createElement('script');
              script.src = "https://app.knowledgeagents.com/widget.js";
              script.async = true;
              script.onload = function() {
                if (window.KBChatWidget) {
                  window.KBChatWidget.init({
                        projectId: projectId,
                        apiUrl: apiUrl,
                        securityMode: "simple",
                        position: "bottom-right",
                        style: "bar",
                        primaryColor: "#7C3AED",
                        accentColor: "#7C3AED",
                        welcomeMessage: "Hello! How can I help you today?",
                        barPlaceholder: "Hello! How can I help you today?",
                        barSuggestions: ["What services do you offer?","how can I get started?"],
                        bubbleIcon: "avatar",
                        bubbleLogoUrl: avatarUrl,
                        bubbleSize: "xl"
                  });
                  addBarMinimizeToggle();
                }
              };
              document.head.appendChild(script);

              /* ---------------------------------------------------------------
               * Minimize / expand for the Knowledge Bar.
               * The widget renders a tall bar that can dominate small screens,
               * so we add a chevron that collapses it into a slim one-line bar
               * in the same spot at the bottom — tap anywhere on it to expand.
               * The bar always starts expanded; a visitor's minimize choice is
               * remembered for the rest of their visit (sessionStorage).
               * ------------------------------------------------------------- */
              function addBarMinimizeToggle() {
                var tries = 0;
                var timer = setInterval(function () {
                  if (setup() || ++tries > 60) clearInterval(timer);
                }, 250);

                function setup() {
                  var container = document.querySelector('.kb-widget-container.kb-bar-style');
                  var bar = document.getElementById('kb-widget-bar');
                  if (!container || !bar) return false;
                  if (document.getElementById('kb-bar-minimize')) return true;

                  var style = document.createElement('style');
                  style.textContent =
                    '#kb-widget-bar { position: relative; }' +
                    '.kb-bar-minimize-btn { position: absolute; top: 8px; right: 8px; width: 30px; height: 30px; border-radius: 999px; border: none; background: rgba(17,24,39,0.06); color: #6b7280; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; z-index: 10; transition: background .15s ease, color .15s ease; }' +
                    '.kb-bar-minimize-btn:hover { background: rgba(17,24,39,0.14); color: #111827; }' +
                    /* Slim minimized bar — same bottom-centered footprint, one line tall. */
                    '.kb-bar-mini { display: none; width: 100%; align-items: center; gap: 10px; padding: 8px 14px; border-radius: 999px; border: 1px solid #d1d5db; background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.15); cursor: pointer; text-align: left; animation: kb-mini-rise .25s ease; transition: box-shadow .15s ease, transform .15s ease; font-family: inherit; box-sizing: border-box; }' +
                    '.kb-bar-mini:hover { box-shadow: 0 12px 34px rgba(0,0,0,0.22); transform: translateY(-1px); }' +
                    '.kb-bar-mini-icon { width: 32px; height: 32px; border-radius: 999px; background: #7C3AED; color: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }' +
                    '.kb-bar-mini-icon.kb-bar-mini-avatar { background: #ede9fe; overflow: hidden; }' +
                    '.kb-bar-mini-icon.kb-bar-mini-avatar img { width: 100%; height: 100%; object-fit: cover; object-position: center top; border-radius: 999px; display: block; }' +
                    '.kb-bar-mini-text { flex: 1; min-width: 0; font-size: 14px; color: #374151; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
                    '.kb-bar-mini-chevron { color: #9ca3af; display: flex; align-items: center; flex-shrink: 0; }' +
                    '@keyframes kb-mini-rise { from { transform: translateY(8px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }' +
                    '.kb-widget-container.kb-bar-style.kb-bar-min > *:not(.kb-bar-mini) { display: none !important; }' +
                    '.kb-widget-container.kb-bar-style.kb-bar-min .kb-bar-mini { display: flex; }';
                  document.head.appendChild(style);

                  var chevronDown = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
                  var chevronUp = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
                  var chatIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';

                  var minBtn = document.createElement('button');
                  minBtn.id = 'kb-bar-minimize';
                  minBtn.className = 'kb-bar-minimize-btn';
                  minBtn.type = 'button';
                  minBtn.setAttribute('aria-label', 'Minimize chat bar');
                  minBtn.title = 'Minimize';
                  minBtn.innerHTML = chevronDown;
                  bar.appendChild(minBtn);

                  // Same avatar as the full bar (known absolute URL — no DOM
                  // cloning); fall back to a chat glyph only if it fails to load.
                  var miniIconHtml =
                    '<span class="kb-bar-mini-icon kb-bar-mini-avatar"><img src="' + avatarUrl + '" alt=""></span>';

                  var mini = document.createElement('button');
                  mini.id = 'kb-bar-mini';
                  mini.className = 'kb-bar-mini';
                  mini.type = 'button';
                  mini.setAttribute('aria-label', 'Expand chat bar');
                  mini.title = 'Expand';
                  mini.innerHTML =
                    miniIconHtml +
                    '<span class="kb-bar-mini-text">Hello! How can I help you today?</span>' +
                    '<span class="kb-bar-mini-chevron">' + chevronUp + '</span>';
                  container.appendChild(mini);

                  var miniAvatar = mini.querySelector('.kb-bar-mini-avatar img');
                  if (miniAvatar) {
                    miniAvatar.addEventListener('error', function () {
                      var iconSpan = miniAvatar.parentNode;
                      iconSpan.classList.remove('kb-bar-mini-avatar');
                      iconSpan.innerHTML = chatIcon;
                    });
                  }

                  function setMinimized(min, persist) {
                    container.classList.toggle('kb-bar-min', min);
                    if (persist) {
                      try { sessionStorage.setItem('kbBarMinimized', min ? '1' : '0'); } catch (e) {}
                      if (typeof window.gtag === 'function') {
                        window.gtag('event', min ? 'widget_bar_minimize' : 'widget_bar_expand');
                      }
                    }
                  }

                  minBtn.addEventListener('click', function (e) { e.stopPropagation(); setMinimized(true, true); });
                  mini.addEventListener('click', function () { setMinimized(false, true); });

                  // Expanded by default; only re-minimize if the visitor chose
                  // that earlier in this same visit. Clear the old localStorage
                  // flag from a previous version that persisted across visits.
                  var saved = null;
                  try {
                    saved = sessionStorage.getItem('kbBarMinimized');
                    localStorage.removeItem('kbBarMinimized');
                  } catch (e) {}
                  setMinimized(saved === '1', false);
                  return true;
                }
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
