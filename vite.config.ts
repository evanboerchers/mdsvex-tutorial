import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import type { Plugin } from 'vite'

function addNoJekyll(): Plugin {
	return {
	  name: 'add-nojekyll',
	  closeBundle() {
		if (!existsSync('./build')) {
			mkdirSync('./build')
		}
		writeFileSync('./build/.nojekyll', '');
	  }
	};
  }

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), addNoJekyll()]
});
