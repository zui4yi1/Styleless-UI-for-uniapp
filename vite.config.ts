import uni from '@dcloudio/vite-plugin-uni';
import { defineConfig } from 'vite';

import path from 'path';
export default defineConfig({
  resolve: {
    //使用@路径
    alias: {
      '@': path.resolve('src'),
    },
  },
  plugins: [uni()],
});
