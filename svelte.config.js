import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { join, dirname } from 'path';
 import { fileURLToPath } from 'url';
 
 const __filename = fileURLToPath(import.meta.url);
 const __dirname = dirname(__filename);
 
 const articleLayout = join(__dirname, './src/lib/layouts/article.svelte');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(
		{
			layout: {
				article: articleLayout
			},
			extensions: ['.md', '.svx'],
		}
	)],
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
