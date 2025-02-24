import type { NextConfig } from 'next';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
