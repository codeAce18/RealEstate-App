/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bayut-production.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],  
  },
};

export default nextConfig;
