/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'res.cloudinary.com',
        "lh3.googleusercontent.com",
        "drive.google.com",
        "i.postimg.cc"
      ]
    },
    eslint: {
      ignoreDuringBuilds: true
    },
    swcMinify: false,
  };
  
  module.exports = nextConfig;
  