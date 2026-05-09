/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
       
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google images domain
      },
    ],
  },
};

export default nextConfig;
