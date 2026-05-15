import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Catches double-rendering bugs in motion components during dev.
  reactStrictMode: true,

  // Tree-shake heavy animation libs more aggressively. Saves ~30–50 KB
  // off the initial bundle for pages that only use a few exports.
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "motion",
      "lucide-react",
    ],
  },

  images: {
    // Order matters — AVIF is tried first (best compression, modern
    // browsers), WebP is the fallback for everything else (Safari 14+,
    // every Chromium-based browser). Original format only ships to
    // very old browsers.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "img.localo.site" },
      { protocol: "https", hostname: "pixabay.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
    ],
  },
};

export default nextConfig;
