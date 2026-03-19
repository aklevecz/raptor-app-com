<script>
</script>

<div class="centered-block col-1half">
  <img class="smiler" src="raptor-logo.png" alt="Raptor Logo" />
  <h1>Easter Egg Hunt</h1>
  <p class="lg" style="text-align:center;">April 5th, 10am — Mission District, SF</p>
  <p style="text-align:center;">Find hidden NFC eggs throughout the neighborhood. Scan them with your phone to collect points. Discover golden eggs to win concert tickets and other prizes!</p>

  <div class="features">
    <div class="feature">
      <span>🗺️</span>
      <div>
        <strong>Live Map</strong>
        <p>See egg locations in real-time once the hunt begins</p>
      </div>
    </div>
    <div class="feature">
      <span>📱</span>
      <div>
        <strong>NFC Collection</strong>
        <p>Tap your phone on hidden eggs to collect them</p>
      </div>
    </div>
    <div class="feature">
      <span>🥇</span>
      <div>
        <strong>Golden Eggs</strong>
        <p>Find a golden egg to win concert tickets</p>
      </div>
    </div>
    <div class="feature">
      <span>🔔</span>
      <div>
        <strong>Live Alerts</strong>
        <p>Get notified when golden eggs are found</p>
      </div>
    </div>
  </div>

  <button
    onclick={() => {
      let appLink = 'https://apps.apple.com/us/app/raptor-app/id6741381341'
      window.open(appLink);
    }}>Download the App</button
  >
</div>

<style>
  .col-1half {
    flex: 1 0 45%;
  }
  .smiler {
    width: 120px;
    height: 120px;
  }
  h1 {
    margin: 0.5rem 0 0;
    font-size: 2rem;
  }
  .features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    margin: 1rem 0;
  }
  .feature {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }
  .feature span {
    font-size: 1.5rem;
    flex-shrink: 0;
  }
  .feature strong {
    display: block;
    margin-bottom: 0.15rem;
  }
  .feature p {
    margin: 0;
    opacity: 0.7;
    font-size: 0.9rem;
  }
  @media (min-width: 768px) {
    p {
      max-width: 500px;
    }
  }
</style>
