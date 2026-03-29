import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173, // Puerto fijo
    strictPort: true,
    watch: {
      usePolling: true, // Esto obliga a Vite a revisar los archivos cada X tiempo
    },
  },
  plugins: [react(), tailwindcss()],
});
