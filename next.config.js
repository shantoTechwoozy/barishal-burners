/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "media.geeksforgeeks.org",
      "static.toiimg.com",
      "img1.hscicdn.com",
      "content.api.news",
      "preview.redd.it",
      'img.freepik.com',
      'png.pngtree.com',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", //updated on 19-05-2024 (shanto)
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
