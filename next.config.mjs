/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignore TypeScript errors during the build process
    ignoreBuildErrors: true,
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
        destination: `${process.env.API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
