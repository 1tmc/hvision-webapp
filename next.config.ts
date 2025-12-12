import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverComponentsExternalPackages: ['jsdom'],
  },
  // This is important for Sanity Studio
  transpilePackages: ['next-sanity', '@sanity/vision'],
};

export default nextConfig;