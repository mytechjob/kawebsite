import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
