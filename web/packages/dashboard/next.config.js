const { NEXT_PUBLIC_CLIENTS_APP_URL } = process.env

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/clients',
        destination: `${NEXT_PUBLIC_CLIENTS_APP_URL}/clients`,
      },
      {
        source: '/clients/:path*',
        destination: `${NEXT_PUBLIC_CLIENTS_APP_URL}/clients/:path*`,
      },
      {
        source: '/illustrations',
        destination: `https://google.com/illustrations`,
      },
      {
        source: '/illustrations/:path*',
        destination: `https://google.com/illustrations/:path*`,
      },
    ]
  },
}