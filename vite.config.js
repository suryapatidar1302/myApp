import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(),eslint()],
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
    },
    server: {
        port: 3000,
    }
});
