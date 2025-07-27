<script lang='ts'>
    let { author, children } = $props()
</script>

<div class='prose'>
    {@render children?.()}
    <hr/>
    <p><b>Author:</b> {author}</p>
</div>