import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          ui: ['framer-motion', 'lucide-react'],
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
})
