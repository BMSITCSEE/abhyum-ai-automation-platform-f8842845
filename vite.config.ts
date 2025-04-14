
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use the correct base path for GitHub Pages
  base: '/abhyum-ai-automation-platform-f8842845/',
  build: {
    // Ensure that assets are properly processed
    assetsDir: 'assets',
    sourcemap: true,
    // Log build information for debugging
    reportCompressedSize: true,
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
