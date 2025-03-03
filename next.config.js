const isProduction = process.env.NODE_ENV === "production";
const repoName = "cv";

module.exports = {
  assetPrefix: isProduction ? `/${repoName}/` : "",
  basePath: isProduction ? `/${repoName}` : "",
  trailingSlash: true,
};
