import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['./src/tests/**/*.test.ts', './src/tests/**/*.test.tsx'], 
    globals: true,
    css: false,
    coverage: {
      provider: 'istanbul',
    },
  },
})
