import type { NextConfig } from "next";

const isCloudflareBuild = process.env.CLOUDFLARE_BUILD === "true" || process.env.CLOUDFLARE_BUILD === "1";

const nextConfig: NextConfig = {
  output: isCloudflareBuild ? undefined : "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
