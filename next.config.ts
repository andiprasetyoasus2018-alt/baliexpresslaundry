import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,

  // Security headers
  async headers() {
    return [
      {
        key: "X-DNS-Prefetch-Control",
        value: "on"
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload"
      },
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff"
      },
      {
        key: "Referrer-Policy",
        value: "no-referrer-when-downgrade",
      },
      {
        key: "X-XSS-Protection",
        value: "1; mode=block",
      },
    ];
  },
};

export default nextConfig;
