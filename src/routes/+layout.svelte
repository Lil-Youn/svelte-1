<script lang="ts">
  import "../app.postcss";
  import TopNavbar from "$lib/top-navbar/bottom-nav.svelte";
  import Banner from "$lib/banner/banner.svelte";
</script>

<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
<header>
  <Banner />
</header>
<main>
  <slot />
</main>
<TopNavbar />

<style>
  main {
    padding: 1rem;
    margin-top: 2rem;
  }
</style>
