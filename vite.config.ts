import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
import {crx} from '@crxjs/vite-plugin'
import zipPack from 'vite-plugin-zip-pack';

import manifest from './src/manifest'
// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [
                autoprefixer()
            ]
        },
        preprocessorOptions: {
            scss: {
                additionalData: `@import "src/views/stylesConfigs/_main.scss";`,
            },
        },
    },
    plugins: [crx({manifest}), react(), zipPack({
        outDir: `package`,
        inDir: 'dist',
        // @ts-ignore
        outFileName: `${manifest.short_name ?? manifest.name.replaceAll(" ", "-")}-extension-v${manifest.version}.zip`,
    })]
})