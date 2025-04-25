import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Satyam-Portfolio/',  // Update this to match your actual repository name
  server: {
    watch: {
      usePolling: true,
    },
  },
})