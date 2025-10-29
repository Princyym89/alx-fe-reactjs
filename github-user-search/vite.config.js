import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow external access
    port: 5000,
    strictPort: true,
    allowedHosts: ['e31f4d43b009.9f25d683.alx-cod.online']
  }
});

