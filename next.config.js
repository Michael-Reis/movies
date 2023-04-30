/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['themoviedb.org', 'www.themoviedb.org', 'image.tmdb.org'],
  }
}

module.exports = nextConfig
