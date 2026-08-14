import type { NextConfig } from "next";

/**
 * GitHub Pages serves static files only, so that build needs `output: "export"`.
 * Static export also disables Next's image optimizer.
 *
 * This is gated behind an env var rather than turned on globally so the Vercel
 * deployment keeps full image optimization — only the Pages build gives it up.
 * Set by .github/workflows/deploy-pages.yml.
 */
const isStaticExport = process.env.STATIC_EXPORT === "true";

// Project Pages are served from /<repo>, so assets need that prefix.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        basePath,
        // Static hosts have no directory-index rewriting; emit /path/index.html
        trailingSlash: true,
      }
    : {}),
  images: {
    // The optimizer requires a server. On Pages the raw URL is used instead —
    // acceptable here because src() in data/images.ts already pins a sensible
    // width per slot, so nothing ships at full resolution.
    unoptimized: isStaticExport,
    // PROTOTYPE ONLY — stock photography is served from Unsplash while we await
    // client-supplied campus photography. Remove this pattern once real assets land.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
