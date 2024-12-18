import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Permite cualquier dominio
      },
      {
        protocol: "http",
        hostname: "**", // Permite cualquier dominio con HTTP (si es necesario)
      },
    ],
    formats: ["image/avif", "image/webp"], // Opcional: mejora la compatibilidad y optimización
  },
};

export default nextConfig;
