const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compress: false,
  experimental: {
    isrMemoryCacheSize: 0,
  },
  swcMinify: true,
});


