<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();

    const baseURL = "https://r2.raptor.pizza/imageTargets"
    const imageTargetObjects =  [
      { id: "raptor-egg-1", name: "Raptor Egg #1" },
      { id: "raptor-lily-1", name: "Raptor Lily #1" },
      { id: "raptor-flower-1", name: "Raptor Flower #1" },
      { id: "raptor-flower-2", name: "Raptor Flower #2" },
      { id: "raptor-flower-3", name: "Raptor Flower #3" },
      { id: "raptor-daisy-basquiat", name: "Raptor Basquiat #1" },
      { id: "raptor-daisy-remi", name: "Raptor Remi #1" },
      { id: "raptor-flower-qr", name: "Raptor QR #1" },
      { id: "raptor-kitchen-3", name: "Raptor Kitchen #3" },
      { id: "raptor-lost-world", name: "Raptor Lost World #1" },
    ]

    const imageTargets = imageTargetObjects.map((imageTarget) => {
      return {
        id: imageTarget.id,
        name: imageTarget.name,
        url: `${baseURL}/${imageTarget.id}.jpg`,
      }
    })
</script>

<div>
  <h1>Testing <img style="width:30px;margin-bottom:-4px;margin-left:10px;" src="apple.svg" alt="apple logo" /></h1>
  <div>
    <h2>Image Targets</h2>
    <p>
        Open the app and tap the 👁️ icon, and then look at these images through the view.
    </p>
    <p>
        When the image is tracked you should see a fading AR text overlay that says "Tap" as well as indicator arrows above the image. Tap the image and a video should play on top of the image.
    </p>
    {#each imageTargets as imageTarget}
      <div>
        <img src={imageTarget.url} alt={imageTarget.name} />
        <p>{imageTarget.name}</p>
      </div>
    {/each}
  </div>
</div>

<style>
    h2 {
        margin: 0;
    }

    p {
        max-width: 720px;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
</style>
