import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/wishes',
  plugins: [react(), svgr(), viteTsconfigPaths()],
  server: {
    host: 'localhost',
    port: 3000,
    proxy: {
      '/api': 'http://localhost:9000',
    },
  },
});
