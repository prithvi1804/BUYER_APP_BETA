import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [
    react(),
    envCompatible(),
    svgr(),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
