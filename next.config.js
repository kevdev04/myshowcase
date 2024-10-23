/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'storage.googleapis.com',
      'kevingael.com'
    ],
    unoptimized: true
  }
}

module.exports = nextConfig