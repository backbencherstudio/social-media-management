import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.freepik.com", 
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
