import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    define: {
        'process.env': {},
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
    plugins: [
        vue(),
        VitePWA({
            registerType: 'prompt',
            includeAssets: ['favicon.png', 'assets/icon/favicon-64.ico', 'assets/icon/icon-180.svg', 'assets/icon/icon-192.svg', 'assets/icon/icon-512.svg'],
            manifest: {
                name: 'Highline Ward',
                short_name: 'Highline Ward',
                description: 'The Highline Ward of the Church of Jesus Christ of Latter-day Saints',
                theme_color: '#ffffff',
                start_url: '/',
                icons: [
                    {
                        src: 'assets/icon/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'assets/icon/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'assets/icon/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
    ],
    server: {
        port: 8100,
        open: true,
    },
});
