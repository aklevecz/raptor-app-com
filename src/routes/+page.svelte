<script>
</script>

<!-- <div style="margin-bottom:1rem;"></div> -->
<div class="centered-block col-1half">
  <img class="smiler" src="raptor-logo.png" alt="smiler" />
  <p class="lg" style="text-align:center;">Want to discover eggs? Download the app and get out there 🥚</p>
  <button
    onclick={() => {
      // let testflightLink = "https://testflight.apple.com/join/XYbB7YSU";
      let appLink = 'https://apps.apple.com/us/app/raptor-app/id6741381341'
      window.open(appLink);
    }}>Download the app!</button
  >
</div>
<!-- <div style="flex:1 0 100%;text-align:center;height:100px;margin-top:4rem;">
  <img style="max-width:300px;" src="yaytso-logo-svg.svg" alt="yaytso" /><br />
  2684 Lacy St. #109<br />
  Los Angeles, 90031
</div> -->

<style>
  .col-1half {
    flex: 1 0 45%;
  }
  .smiler {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 768px) {
    p {
      max-width: 500px;
    }
  }
</style>
