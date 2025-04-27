import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

//@ts-ignore
import path from 'path';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    TanStackRouterVite({
      routesDirectory: './src/@route',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/@api'),
      '@lang': path.resolve(__dirname, './src/@lang'),
      '@lib': path.resolve(__dirname, './src/@lib'),
      '@route': path.resolve(__dirname, './src/@route'),
      '@app': path.resolve(__dirname, './src/@view/@app'),
      '@ui': path.resolve(__dirname, './src/@view/@ui'),
      '@form': path.resolve(__dirname, './src/@view/@form'),
    },
  }
})
