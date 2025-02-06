<script>
  import NavLinks from "$lib/components/nav-links.svelte";
  import Nav from "$lib/components/nav.svelte";
  import { onDestroy, onMount } from "svelte";
  import "../app.css";
  import { on } from "svelte/events";
  import { browser } from "$app/environment";
  /** @type {{data:import('./$types').LayoutData, children: any}} */
  let { children } = $props();

  /** @type {number | null} */
  let containerHeight = $state(null);

  const calculateContainerHeight = () => {
    if (!browser) return;
    /** @type {HTMLElement | null} */
    const header = document.querySelector(".header");
    /** @type {HTMLElement | null} */
    const footer = document.querySelector("footer");

    if (!header || !footer) return;
    
    const headerHeight = header?.offsetHeight ?? 0;
    const footerHeight = footer?.offsetHeight ?? 0;
    const fullViewHeight = window.innerHeight;
    containerHeight = fullViewHeight - headerHeight - footerHeight;
  };

  onMount(() => {
    if (!browser) return;
    calculateContainerHeight();
    window.addEventListener("resize", calculateContainerHeight);
  });

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener("resize", calculateContainerHeight);
  });
</script>

<svelte:head>
  <title>Raptor App</title>
  <meta
    name="description"
    content="Raptor App is your ultimate gateway to parties and egg discovery. Join the community and start hunting for eggs today!"
  />
  <meta name="keywords" content="party finder, egg discovery, digital events, party app, social events" />
  <meta name="author" content="teh raptor" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://app.raptor.pizza/" />
  <meta property="og:title" content="Raptor App" />
  <meta
    property="og:description"
    content="Your gateway to parties and egg discovery. Join Raptor App and start exploring today!"
  />
  <meta property="og:image" content="https://app.raptor.pizza/seo.jpg" />

  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png" />
  <link rel="android-chrome" sizes="512x512" href="/android-chrome-512x512.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://app.raptor.pizza/" />
  <meta property="twitter:title" content="Raptor App" />
  <meta
    property="twitter:description"
    content="Your gateway to parties and egg discovery. Join Raptor App and start exploring today!"
  />
  <meta property="twitter:image" content="https://app.raptor.pizza/seo.jpg" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://app.raptor.pizza/" />
</svelte:head>
<div class="header">
  <h2>Raptor App</h2>
  <div class="desk-nav-links"><NavLinks /></div>
</div>
<div class="container" style="--container-full-height: {containerHeight}px;">
  {@render children()}
</div>
<Nav />
<footer>
  <img src="raptor-logo.png" alt="raptor" />
  <div>
    <h1>Raptor App</h1>
    <div>Created by teh raptor</div>
  </div>
</footer>

<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  .desk-nav-links {
    display: none;
  }
  .container {
    display: flex;
    flex-direction: column;
    /* align-items:center; */
    padding: 1rem;
    padding-top: 0.5rem;
    min-height: var(--container-full-height);
    width: 100%;
  }

  footer {
    height: 100px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    padding-left: 2rem;
    gap: 1rem;
    background-color: black;
    color: white;
  }

  footer > img {
    width: 80px;
    height: 80px;
  }
  @media (min-width: 768px) {
    .desk-nav-links {
      display: flex;
      gap: 1rem;
    }
    /* .container {
      min-height: calc(99vh - 157px);
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;
    } */
  }
</style>
