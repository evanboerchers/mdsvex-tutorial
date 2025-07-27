import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(
		{
			layout: {
				article: import.meta.dirname + '/src/lib/layouts/article.svelte'
			},
			extensions: ['.md', '.svx'],
		}
	)],
	kit: {
		adapter: adapter(),
		paths: {
			base: '/mdsvex-tutorial'
		},
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
