import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // Opens the browser on server start
  },
  build: {
    outDir: 'dist', // Output directory for build
    chunkSizeWarningLimit: 600, // Sets warnings for chunk size
  },
});