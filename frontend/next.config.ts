import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour Docker et production
  output: 'standalone',
  
  // Configuration des images
  images: {
    unoptimized: true, // Pour éviter les problèmes avec les images en mode standalone
  },
  
  // Configuration des variables d'environnement
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  },
  
  // Configuration pour le développement
  ...(process.env.NODE_ENV === 'development' && {
    experimental: {
      turbo: {},
    },
  }),
};

export default nextConfig;
