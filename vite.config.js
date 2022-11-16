import {
	defineConfig
} from 'vite'

import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite';

import {
	VantResolver
} from 'unplugin-vue-components/resolvers';

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [VantResolver()]
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/assets/scss/comm.scss";@import "./src/assets/scss/flex.scss";`
			}
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '.', 'src'),
		},
	},
	server: {
		host: '0.0.0.0',
		proxy: {
			'/api': {
				target: `http://120.46.143.129`,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	build: {
		outDir: 'h5',
	},
	
})
