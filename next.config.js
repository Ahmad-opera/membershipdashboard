/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  cssLoaderOptions: {
    url: false
  },
  throwIfNamespace: false,
}

module.exports = nextConfig