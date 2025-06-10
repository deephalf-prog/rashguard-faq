/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build configuration
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,

  // TypeScript and ESLint configuration
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // Image configuration
  images: {
    domains: ['cdn.shopify.com'],
    unoptimized: true,
  },

  // Redirects configuration
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home.html',
        destination: '/',
        permanent: true,
      }
    ]
  },

  // Headers configuration
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Remove trailing slashes to prevent 404s
  trailingSlash: false,

  // Ensure proper page routing
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Add base path if needed
  basePath: '',

  // Add asset prefix if needed
  assetPrefix: '',
}

module.exports = nextConfig 