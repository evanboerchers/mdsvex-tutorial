<script lang='ts'>
	import { blogUrl, srcUrl } from '$lib';
	import { base } from '$app/paths';
</script>

<div class="prose">
  <h1>About</h1>
  <p>
    This site is a <strong>SvelteKit</strong> demo showing how to use
    <a href="https://mdsvex.pngwn.io/">MDsveX</a> to write and manage content.
    Each page highlights a specific MDsveX feature.
  </p>
  <p>
    Browse this sites source code on
    <a href={srcUrl}>GitHub</a> to see the usage of MDveX.
    Be sure to checkout the full MDsveX walkthrough on my
    <a href={blogUrl}>blog</a>.
  </p>

  <h2>MDsveX examples</h2>
  <ul>
    <li><a href={`${base}/simple-md-sample`}>Simple Markdown</a></li>
    <li><a href={`${base}/frontmatter-sample`}>Frontmatter</a></li>
    <li><a href={`${base}/component-sample`}>Components</a></li>
    <li><a href={`${base}/layout-sample`}>Layouts</a></li>
  </ul>
</div>

