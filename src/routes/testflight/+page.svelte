<script>
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
  
    let isIOS = $state(false);
    let hasTestFlight = $state(false);
    let showInstructions = $state(false);
    let hasMounted = $state(false);
  
    onMount(() => {
      if (browser) {
        isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        
        if (isIOS) {
          checkTestFlight();
        }
        
        hasMounted = true;
      }
    });
  
    function checkTestFlight() {
      const testFlightCheck = document.createElement('iframe');
      testFlightCheck.style.display = 'none';
      testFlightCheck.src = 'itms-beta://';
      
      testFlightCheck.onload = () => {
        hasTestFlight = true;
      };
      
      document.body.appendChild(testFlightCheck);
      setTimeout(() => {
        document.body.removeChild(testFlightCheck);
      }, 100);
    }
  
    function handleTestFlightClick() {
      if (isIOS) {
        window.location.href = 'itms-beta://testflight.apple.com/join/XYbB7YSU';
        
        setTimeout(() => {
          showInstructions = true;
        }, 1000);
      } else {
        showInstructions = true;
      }
    }
  </script>
  
  {#if hasMounted}
    <div class="container">
        <img src="/raptor-logo.png" alt="Raptor Logo" style="width:150px;"/>
        <h2>To use the Raptor App, you will install it in Testflight</h2>
        <button on:click={handleTestFlightClick}>
            Open Testflight & Install Raptor App
        </button>
  
        {#if showInstructions}
            <div class="instructions">
                {#if !isIOS}
                    <p>You need to install Testflight:</p>
                    <ol>
                        <li>
                            <a href="https://apps.apple.com/us/app/testflight/id899247664"
                               target="_blank"
                               rel="noopener noreferrer">
                                Install TestFlight
                            </a>
                            from the App Store
                        </li>
                        <li>Return to this page and click the button again</li>
                    </ol>
                {:else if !hasTestFlight}
                    <p>TestFlight isn't installed yet. To continue:</p>
                    <ol>
                        <li>
                            <a href="https://apps.apple.com/us/app/testflight/id899247664">
                                Install TestFlight
                            </a>
                            from the App Store
                        </li>
                        <li>Return to this page and click the button again</li>
                    </ol>
                {:else}
                    <p>
                        If TestFlight didn't open automatically,
                        <a href="itms-beta://testflight.apple.com/join/XYbB7YSU">
                            click here
                        </a>
                    </p>
                {/if}
            </div>
            <button on:click={handleTestFlightClick}>
                Install Raptor App
            </button>
        {/if}

    </div>
{/if}

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 1rem;
        max-width: 600px;
        margin: 0 auto;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
        margin: 0;
    }

    button {
        background-color: #3b82f6;
        color: white;
        font-weight: 600;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:hover {
        background-color: #2563eb;
    }

    .instructions {
        background-color: #f3f4f6;
        padding: 1rem;
        border-radius: 0.5rem;
        width: 100%;
        max-width: 28rem;
    }

    .instructions p {
        color: #374151;
        margin-bottom: 0.5rem;
    }

    .instructions ol {
        list-style-type: decimal;
        padding-left: 1.5rem;
        margin: 0;
    }

    .instructions li {
        margin-bottom: 0.5rem;
    }

    .instructions li:last-child {
        margin-bottom: 0;
    }

    a {
        color: #3b82f6;
        text-decoration: none;
        transition: color 0.2s;
    }

    a:hover {
        color: #2563eb;
        text-decoration: underline;
    }
</style>