import type { NextConfig } from "next";
import path from "node:path";

const isProd = process.env.NODE_ENV === "production";
const repo = "hspkuakata";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
