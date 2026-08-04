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
  async redirects() {
    return [
      // The Knowledge Suite funnel moved from /launch to the home page, then to /original.
      { source: "/launch", destination: "/original", permanent: true },
      // Pricing is published in exactly one place, so the legacy plan page folds into it.
      { source: "/original/pricing", destination: "/pricing", permanent: true },
    ];
  },
};

export default nextConfig;
