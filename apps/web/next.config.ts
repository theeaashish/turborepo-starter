import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@repo/ui", "@repo/database", "@repo/env"],
  reactCompiler: true,
};

export default nextConfig;
