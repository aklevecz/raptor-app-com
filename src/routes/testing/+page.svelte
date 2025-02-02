<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div>
  <h2>Testing <img style="width:30px;margin-bottom:-4px;margin-left:10px;" src="apple.svg" alt="apple logo" /></h2>
  <p style="">
    Here are two image targets that you can use to test the AR interaction.
  </p>

  <p>
    Open the AR view on the app and then point the viewer at one or both of these images
  </p>

  <img alt="dj bao target" src="image-targets/baodjj.png">
  <img alt="motto target" src="image-targets/baomotto.png">


  <h2>AR Demo</h2>
  <div>
    <p>Here is a demo of the AR interaction</p>
    <video controls src="/demos/ar_demo.mp4"></video>
  </div>

</div>

<style>
  * {
    max-width: 800px;
  }

  img {
    width: 100%;
  }
</style>
