/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "mymexicotours.s3.amazonaws.com",
      "via.placeholder.com",
      "d1coydiqa46lxm.cloudfront.net",
      "v5.airtableusercontent.com",
      "cdn.mymexicotours.com",
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
