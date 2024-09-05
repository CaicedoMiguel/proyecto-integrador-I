import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gbl', '**/*.glb', '**/*.gltf'], // Incluye archivos GLB/GLTF
});
  

