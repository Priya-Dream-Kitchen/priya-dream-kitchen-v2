/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
// Configures next.js for static export (GitHub Pages compatible) with unoptimized images.
