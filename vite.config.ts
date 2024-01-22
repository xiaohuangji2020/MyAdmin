import {fileURLToPath, URL} from 'node:url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoImport from 'unplugin-auto-import/vite';
import components from 'unplugin-vue-components/vite';
import {NaiveUiResolver as naiveUiResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	plugins: [
		vue(),
		vueJsx(),
		autoImport({
			imports: [
				{
					vue: [
						'defineProps',
						'defineEmits',
						'defineExpose',
					],
					'naive-ui': [
						'useDialog',
						'useMessage',
						'useNotification',
						'useLoadingBar',
					],
				},
			],
			resolvers: [naiveUiResolver()],
			dts: fileURLToPath(new URL('./src/types/auto-imports.d.ts', import.meta.url)),
			eslintrc: {
				enabled: true,
				globalsPropValue: 'readonly',
			},
		}),
		components({
			dirs: ['node_modules'],
			resolvers: [naiveUiResolver()],
			dts: fileURLToPath(new URL('./src/types/auto-imports.d.ts', import.meta.url)),
		}),
	],
	server: {
		port: 21234,
		// Proxy: {
		// 	'/api': {
		// 		// target: 'http://111.111.111.111:11111',
		// 		changeOrigin: true,
		// 	},
		// },
	},
	build: {
		rollupOptions: {
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
			},
		},
	},
});
