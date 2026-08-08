import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `next build` and `next dev` share `.next/` by default, and a build wipes
  // `.next/static/` — which pulls the stylesheet out from under an already
  // running dev server and renders pages completely unstyled until it's
  // restarted. Setting NEXT_DIST_DIR lets a verification build write somewhere
  // else entirely, so it can never disturb a live dev server.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      // `/recommend` is a self-contained standalone landing page with its own
      // <head>, fonts, and styles, so it's served as a static HTML file from
      // /public rather than through the app shell. The rewrite keeps the URL
      // clean while the file stays byte-for-byte what it is on disk.
      { source: "/recommend", destination: "/recommend.html" },
    ];
  },
  async redirects() {
    return [
      // The Knowledge Suite funnel moved /launch → home → /original → /knowledgebar.
      { source: "/launch", destination: "/knowledgebar", permanent: true },
      { source: "/original", destination: "/knowledgebar", permanent: true },
      { source: "/original/:path*", destination: "/knowledgebar/:path*", permanent: true },
      // Pricing is published in exactly one place, so legacy plan pages fold into it.
      { source: "/knowledgebar/pricing", destination: "/pricing", permanent: true },
    ];
  },
};

export default nextConfig;
