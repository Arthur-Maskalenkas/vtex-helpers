/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
		plugins: [ react() ],
		test: {
				globals: false,
				restoreMocks: true,

				environment: 'happy-dom',
				setupFiles: './tests/configs/setup.ts',
				css: false,
				minThreads: 6,
				maxThreads: 6
		}
})