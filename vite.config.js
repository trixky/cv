import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),
	resolve: {
		alias: {
			$components: 'src/components',
			$utils: 'src/utils',
			$lib: 'src/lib',
			$db: 'src/db'
		}
	}
};

export default config;
