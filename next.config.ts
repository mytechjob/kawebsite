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
  // The Knowledge Suite funnel moved from /launch to the home page.
  async redirects() {
    return [{ source: "/launch", destination: "/", permanent: true }];
  },
};

export default nextConfig;
