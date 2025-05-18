<script>
  import { beforeNavigate } from "$app/navigation";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import NavLinks from "./nav-links.svelte";

  let showNav = $state(false);

  beforeNavigate(() => {
    showNav = false;
  });
</script>

<button class="menu-btn" onclick={() => (showNav = !showNav)}>{showNav ? "Close" : "Menu"}</button>
{#if showNav}
  <nav transition:fly={{ delay: 250, duration: 300, x: 370, y: 1, opacity: 0.5, easing: quintOut }}>
    <NavLinks/>
  </nav>
{/if}

<style>
  nav {
    position: fixed;
    top: 100px;
    right: 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 24px;
    background: white;
    padding: 20px;
    z-index: 1000;
  }

  nav a {
    color: black;
    /* text-decoration: none; */
    font-weight: bold;
  }
  .menu-btn {
    position: absolute;
    top: 12px;
    left: 69%;
    margin-bottom:1rem;
    z-index: 1000;
  }

  @media (min-width: 768px) {


    .menu-btn {
      display: none;
    }
  }
</style>
