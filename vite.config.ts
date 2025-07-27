import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { writeFileSync } from 'node:fs'
import type { Plugin } from 'vite'

function addNoJekyll(): Plugin {
	return {
	  name: 'add-nojekyll',
	  closeBundle() {
		writeFileSync('/build/.nojekyll', '');
	  }
	};
  }

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), addNoJekyll()]
});
