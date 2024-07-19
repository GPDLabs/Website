import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

const port = parseInt(process.env.PORT ?? '3000') ?? 3000;

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => ({
  plugins: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
      exclude: [],
    }),
    ViteEjsPlugin({}),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  envPrefix: 'VITE_',
  server: {
    port,
    host: '127.0.0.1',
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 1600,
  },
}));
