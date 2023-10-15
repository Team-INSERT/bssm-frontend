/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_DOMAIN,
      process.env.NEXT_PUBLIC_TEST_DOMAIN,
      process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      process.env.NEXT_PUBLIC_FILE_SERVER_URL,
    ],
  },
};

module.exports = nextConfig;
