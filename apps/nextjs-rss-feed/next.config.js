module.exports = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/rss.xml',
      destination: '/api/rss',
    },
  ],
};
