/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },
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
      },
      {
        source: encodeURI('/المكاتب/:phone'),
        destination: '/agent/:phone'
      },
      {
        source: encodeURI('/المكاتب/edit'),
        destination: '/agent/edit'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate'
          }
        ]
      }
    ]
  }
})
