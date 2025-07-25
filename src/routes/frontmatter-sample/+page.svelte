<script lang='ts'>
    import Content, { metadata } from  '$lib/content/frontmatter-sample.svx'
</script>

<div class='prose'>
    <Content/>
    <hr/>
    <p><b>Author:</b> {metadata.author}</p>
</div>  