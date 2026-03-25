import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@admin": path.resolve(__dirname, "./src/modules/admin"),
      "@login": path.resolve(__dirname, "./src/modules/login"),
      "@auth": path.resolve(__dirname, "./src/core/auth"),
      "@form": path.resolve(__dirname, "./src/core/form"),
    },
  },
});
