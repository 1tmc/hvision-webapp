import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['jsdom'],
  },
  transpilePackages: ['next-sanity', '@sanity/vision'],
};

export default nextConfig;