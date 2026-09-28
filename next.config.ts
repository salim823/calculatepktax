import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Consolidated into the homepage (calculator now lives there)
        source: "/calculator",
        destination: "/",
        permanent: true,
      },
      {
        source: "/calculator/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
