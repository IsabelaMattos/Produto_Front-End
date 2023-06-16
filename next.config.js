/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    domains : ['localhost','images-na.ssl-images-amazon.com'] // <== Domain name
  },
}

module.exports = nextConfig
