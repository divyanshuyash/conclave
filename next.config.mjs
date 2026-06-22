/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep production builds from overwriting chunks used by a running dev server.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
