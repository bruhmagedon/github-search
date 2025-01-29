import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), svgrPlugin(), tsconfigPaths()],
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'production',
      chunkSizeWarningLimit: 1500
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    },
    server: {
      port: 3000,
      cors: true,
      open: false
    },
    preview: {
      port: 3000
    },
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, './src/app'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@widgets': path.resolve(__dirname, './src/widgets'),
        '@assets': path.resolve(__dirname, './src/app/assets'),
        '@common': path.resolve(__dirname, './src/common'),
        '@hooks': path.resolve(__dirname, './src/common/hooks'),
        '@ui': path.resolve(__dirname, './src/common/ui'),
        '@styles': path.resolve(__dirname, './src/app/styles')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@styles/helpers/functions" as *;`
        }
      }
    }
  };
});
