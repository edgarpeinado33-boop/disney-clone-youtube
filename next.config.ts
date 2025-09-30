import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
      {
        protocol: "https", // 👈 corregido
        hostname: "image.tmdb.org",
        pathname: "/t/p/**", // 👈 importante
      },
    ],
  },
};

export default nextConfig;
