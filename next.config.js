/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env:{
    APP_URL: process.env.REACT_APP_URL,
    // APP_ENV: process.env.REACT_APP_ENV,
    // APP_SERVER_URL: process.env.APP_SERVER_URL,
  },
  images: {
    domains: ['localhost', 'cloudflare-ipfs.com']
  },
  async rewrites(){
    return [
      {
        source: '/api/:path*',
        destination: 'https://cinema-api-bfig.onrender.com/api/:path*'
      },
      {
        source: '/uploads/:path*',
        destination: 'https://cinema-api-bfig.onrender.com/uploads/:path*'
      },
    ]
  }
}

module.exports = nextConfig
