import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hallelujah",
  assetPrefix: "/hallelujah/",
  images: { unoptimized: true },
};

export default nextConfig;
