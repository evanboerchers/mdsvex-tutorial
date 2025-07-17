<script lang="ts">
	import { blogUrl, srcUrl } from '$lib';
	import '../app.css';

	let { children } = $props();
</script>

{#snippet navButton(label: string, href: string)}
	<a class='hover:cursor-pointer hover:text-amber-500 font-[500]' target="_blank" rel='noopener noreferrer' href={href}>{label}</a>
{/snippet}


<div class='grid min-h-screen grid-cols-[100%] grid-rows-[auto_1fr_auto]'>
	<nav class='flex flex-row bg-sky-800 text-white px-20 py-5 shadow-md justify-between' >
		<a class='text-2xl font-bold hover:cursor-pointer hover:text-amber-500' href='/'>MDsveX Tutorial</a>
		<div class='flex flex-row gap-4'>
			{@render navButton('Blog post', blogUrl)}
			{@render navButton('Source code', srcUrl)}
		</div>
	</nav>
	<div class='m-20 '>
		{@render children()}
		
	</div>
	<footer class='flex flex-row text-neutral-600 p-1'>
		<p class='text-sm italic ml-6'>©2025 Evan Boerchers</p>
	</footer>
</div>
