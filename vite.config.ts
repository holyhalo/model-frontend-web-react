import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    TanStackRouterVite({
      routesDirectory: './src/@routes',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
  ],
  resolve: {
    alias: {
      '@api': '/src/@api',
      '@layout': '/src/@layout',
      '@lib': '/src/@lib',
      '@lang': '/src/@lang',
      '@form': '/src/@form',
      '@routes': '/src/@routes',
      '@ui': '/src/@ui'
    }
  }
})
