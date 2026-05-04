import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    base: process.env.VITE_BASE_PATH || "/",
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/pages'),
        },
    },

    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),

        react(),
        tailwindcss(),

        VitePWA({
            registerType: 'autoUpdate',
            strategies: 'generateSW',

            includeAssets: ['favicon.ico', 'apple-touch-icon.png'],

            manifest: {
                name: 'Laravel React App',
                short_name: 'App',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#0f172a',
                icons: [
                    {
                        src: '/logo11_192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/logo22_512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            },

            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}']
            }
        })
    ],
})