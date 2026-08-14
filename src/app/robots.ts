import type { MetadataRoute } from "next";

/**
 * Emits a static robots.txt at build time, so it works on GitHub Pages and
 * any other static host — not just Vercel.
 *
 * Belt and braces alongside the `robots` metadata in layout.tsx: this
 * prototype is publicly reachable but must not be indexed while it carries
 * Rainbow Group's identity and placeholder content.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
