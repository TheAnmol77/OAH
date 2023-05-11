/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domain:[
      "localhost"
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost:3000',
        port: '',
        pathname: 'localhost:3000/store',
      },
    ],
  },
}
module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: false,
      },
    ]
  },
}