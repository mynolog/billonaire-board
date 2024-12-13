import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'specials-images.forbesimg.com',
        pathname: '/imageserve/**',
      },
    ],
  },
}

export default nextConfig
