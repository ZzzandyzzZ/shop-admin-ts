/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'api.lorem.space',
      'cdna.artstation.com'
    ]
  }
}

module.exports = nextConfig
