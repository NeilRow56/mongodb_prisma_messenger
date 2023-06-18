/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    experimental: {
      swcPlugins: [['next-superjson-plugin', {}]]
    },
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  }
}

module.exports = nextConfig
