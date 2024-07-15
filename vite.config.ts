import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@store': path.resolve(__dirname, './src/store'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/shared/styles/variables"; @import "@/shared/styles/mixins";`,
      },
    },
  },
});
