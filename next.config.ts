import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true 
  },
};

export default config;
