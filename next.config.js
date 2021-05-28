// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  async rewrites() {
    return [
      {
        source: '/api/og-image.jpeg',
        destination: '/api/og-image'
      }
    ]
  }
})
