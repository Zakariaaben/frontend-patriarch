/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignore TypeScript errors during the build process
    ignoreBuildErrors: true,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || "",
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/projets",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://api.patriarchplus.com/:path*`,
      },
    ];
  },
};

export default nextConfig;
