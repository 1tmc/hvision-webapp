import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'jsdom'];
    }
    return config;
  },
  transpilePackages: ['next-sanity', '@sanity/vision'],
};

export default nextConfig;