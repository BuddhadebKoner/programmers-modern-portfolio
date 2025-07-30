import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // res.cloudinary.com
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "github-readme-stats.vercel.app",
      "github-readme-streak-stats.herokuapp.com",
      "raw.githubusercontent.com",
      "cdn.jsdelivr.net",
      "i.imgur.com"
    ],
  },
};

export default nextConfig;
