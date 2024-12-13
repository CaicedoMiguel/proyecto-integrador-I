import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: true, // Habilita CORS
  },
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    assetsInlineLimit: 0,
  },
})
  

