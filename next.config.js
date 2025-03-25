/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Disable static optimization to avoid prerendering issues
  experimental: {
    // This will make the build process more forgiving
    optimizeCss: false,
    optimizePackageImports: [],
  },
  // Disable image optimization to simplify the build
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig; 