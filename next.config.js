/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === "true"

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isPages ? "/souzana" : "",
  assetPrefix: isPages ? "/souzana/" : "",
}

module.exports = nextConfig
