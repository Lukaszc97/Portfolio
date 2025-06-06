import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // Podstawa dla GitHub Pages
  
  build: {
    outDir: "dist", // Folder wynikowy
    emptyOutDir: true, // Czyść folder przy każdym buildzie
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // Wymuszamy ścieżkę do index.html
      output: {
        manualChunks: (id) => {
          // Lepsza kontrola podziału chunków
          if (id.includes("node_modules/react")) return "react-vendor";
          if (id.includes("node_modules/react-router-dom")) return "router-vendor";
          if (id.includes("src/")) return "app";
        },
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        entryFileNames: "assets/[name]-[hash].js"
      }
    }
  },
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias dla ścieżek
      // Napraw problemy z polyfillami
      "util": "util/",
      "crypto": "crypto-browserify",
      "stream": "stream-browserify",
      "zlib": "browserify-zlib"
    }
  },
  
  // Konfiguracja dla środowiska przeglądarkowego
  define: {
    "process.env": {},
    global: "window"
  }
});