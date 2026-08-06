import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoSlug = "/growbro-nimbuscrm";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? repoSlug : "",
  assetPrefix: isGitHubPages ? repoSlug : "",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
