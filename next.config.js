/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Indique à Next.js que ton app est dans src/
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
