<script>

    let {data} = $props()
</script>
<h1>Feed</h1>
<div>
{#each data.resizedImgURLs as imgURL}
    <img src={imgURL} alt="img" style="padding:1rem;"/>
{/each}
</div>