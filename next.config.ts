import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // PROTOTYPE ONLY — stock photography is served from Unsplash while we await
    // client-supplied campus photography. Remove this pattern once real assets land.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
