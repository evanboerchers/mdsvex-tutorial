<script>
	import { blogUrl } from "$lib";
    import { base } from '$app/paths';


</script>

<div class='prose'>
    <h1>About</h1>
    <p>This is a Sveltekit app built to demonstrate how to use <a href='https://mdsvex.pngwn.io/'>MDsveX</a> to effectively manage and create web content.</p>
    <p>See my <a href={blogUrl}>blog post</a> for context on this codebase.</p>
    
    <h2>MDsveX page samples</h2>
    <ul>
        <li>
            <a href={`${base}/simple-md-sample`}>Simple Markdown Sample</a>
        </li>
        <li>
            <a href={`${base}/frontmatter-sample`}>Frontmatter Sample</a>
        </li>
        <li>
            <a href={`${base}/component-sample`}>Component Sample</a>
        </li>
        <li>
            <a href={`${base}/layout-sample`}>Layout Sample</a>
        </li>
    </ul>
</div>
