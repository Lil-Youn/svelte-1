<script lang="ts">
  import Card from "$lib/card/card.svelte";

  let src = "/src/assets/whale.png";
  let name = "ChefDev";
</script>

<header>
  <div class="flex justify-center mt-10 mb-10">
    <div class="shadow-md rounded-md w-1/2">
      <p class="font-mono text-lg text-gray-800 text-center">
        Hi {name}! Welcome to my first Svelte App
      </p>
    </div>
  </div>
</header>
<main>
  <div class="flex justify-center mb-10 relative">
    <Card />
  </div>
</main>

<style>
  main {
    padding: 1rem;
    margin-bottom: 15rem;
  }
</style>
