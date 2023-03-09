/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  async rewrites() {
    return [
      {
        source: encodeURI('/المكاتب'),
        destination: '/agencies'
      },
      {
        source: encodeURI('/نبذه-عنا'),
        destination: '/about'
      }
    ]
  }
})
