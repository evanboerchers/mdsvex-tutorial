<script lang='ts'>
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<p class='border py-1 px-2 inline'>
    You clicked    
    <b>
    {count} {count === 1 ? 'time' : 'times'}
    </b>.
</p>
<button class='bg-red-500 px-4 py-1 rounded-full text-white hover:cursor-pointer hover:bg-red-400' on:click={increment}> Click me </button>