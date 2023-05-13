/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'example.com', 'i.pinimg.com', 'developers.elementor.com'], 
  },
};

module.exports = nextConfig;

