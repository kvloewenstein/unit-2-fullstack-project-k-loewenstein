import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
 build: {
  outDir: '../skin-sync-springboot-app/src/main/resources/static',
  emptyOutDir: true
},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
