import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // Zmienione na /Portfolio/
  resolve: {
    alias: {
      crypto: path.resolve(__dirname, "node_modules/crypto-browserify"),
      stream: path.resolve(__dirname, "node_modules/stream-browserify"),
      util: path.resolve(__dirname, "node_modules/util/"),
    },
  },
});
