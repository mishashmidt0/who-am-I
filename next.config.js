const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compress: false,
  experimental: {
    isrMemoryCacheSize: 0,
  },
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp'],
  },
  swcMinify: true,
});


