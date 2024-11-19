import { defineConfig } from 'vite';
import viteSassDts from 'vite-plugin-sass-dts';

export default defineConfig({
  plugins: [viteSassDts()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '',
      } , 
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './preprocessor/main.sass',
      output: {
        assetFileNames: 'style.[ext]',
      },
    },
  },
});
