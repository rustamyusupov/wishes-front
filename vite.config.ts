import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/wishes',
  plugins: [react(), viteTsconfigPaths()],
  server: {
    host: 'localhost',
    port: 3000,
  },
});
