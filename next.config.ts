import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["10.20.131.170"],
  agentRules: false,
  turbopack: { root: process.cwd() },
};

export default nextConfig;
