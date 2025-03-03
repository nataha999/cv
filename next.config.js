const isProduction = process.env.NODE_ENV === "production";
const repoName = "cv";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  assetPrefix: isProduction ? `/${repoName}/` : "", 
  basePath: isProduction ? `/${repoName}` : "", 
  trailingSlash: true, 
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;