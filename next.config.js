/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;