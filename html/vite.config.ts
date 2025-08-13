import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    
    base: '/',
  };

  if (command === 'build') {
    config.base = '/togatecomz_admin/';
  }

  return config;
});
