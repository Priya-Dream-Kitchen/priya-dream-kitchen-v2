/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/priya_dream_kitchen_v2',
};

export default nextConfig;
// Configures next.js for static export (GitHub Pages compatible) with unoptimized images.
