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
        destination: `${CLIENTS_APP_URL}/clients`,
      },
      {
        source: '/clients/:path*',
        destination: `${CLIENTS_APP_URL}/clients/:path*`,
      },
    ]
  },
}