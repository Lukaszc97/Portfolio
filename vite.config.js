import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Eksport domyślnej konfiguracji Vite
export default defineConfig({
  // Wtyczka do obsługi Reacta
  plugins: [react()],
  
  // Baza URL — ważne przy deploymencie np. na GitHub Pages
  base: "/Portfolio/",

  // Rozwiązywanie aliasów dla bibliotek Node.js w środowisku przeglądarkowym
  resolve: {
    alias: {
      crypto: path.resolve(__dirname, "node_modules/crypto-browserify"),
      stream: path.resolve(__dirname, "node_modules/stream-browserify"),
      util: path.resolve(__dirname, "node_modules/util/"),
    },
  },

  // Można też dodać opcjonalnie fallbacki jeśli potrzebujesz np. do działania w przeglądarce
  optimizeDeps: {
    include: [
      "crypto-browserify",
      "stream-browserify",
      "util",
    ],
  },

  define: {
    // Potrzebne, gdy biblioteki używają zmiennej global
    global: {},
  },
});
