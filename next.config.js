/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["da"],
    defaultLocale: "da",
  },
};

module.exports = nextConfig;

// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()