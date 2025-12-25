
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Đổi base thành '/' khi chạy trên domain chính (cagpro.cloud)
  // Nếu chạy thư mục con thì dùng './'
  base: '/', 
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
})
