const { CLIENTS_APP_URL } = process.env

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/clients',
        destination: `https://google.com`,
      },
      {
        source: '/clients/:path*',
        destination: `${CLIENTS_APP_URL}/clients/:path*`,
      },
    ]
  },
}