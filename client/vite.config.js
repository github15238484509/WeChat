import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import {resolve} from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueSetupExtend()],
  resolve:{
    alias:{
      "@":resolve(__dirname,"./src")
    },
  },
  server:{
    proxy:{
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/wechat': {
        target: 'ws://localhost:3000/wechat',
        changeOrigin: true,
        ws:true,
      }
    }
  }
})
