import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths
  build: {
    target: "esnext",
    minify: false     // Disables minification
  },
  server: {
    host: '0.0.0.0'
  }
});
