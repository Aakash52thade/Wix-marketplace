import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add alias for the assets folder
      '/@assets/': path.resolve(import.meta.url.slice(7), '..', 'assets')
    }
  }
});
