/**************/
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // i18n locales
  i18n: {
    locales: ['es', 'fr', 'en'],
    defaultLocale: 'es',
  },
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
