import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  experimental: {
    serverComponentsExternalPackages: ['jsdom', 'canvas', '@sanity/vision'],
  },
  transpilePackages: ['next-sanity', '@sanity/vision'],
  serverExternalPackages: ['jsdom'],
};

export default nextConfig;