<script lang="ts">
  import Card from "$lib/card/card.svelte";

  let src = "/src/assets/whale.png";
  let name = "ChefDev";
</script>

<div class="flex justify-center mt-10 mb-20">
  <div class="shadow-md rounded-md w-1/2">
    <p class="font-mono text-lg text-gray-800 text-center">
      Hi {name}! Welcome to my first Svelte App
    </p>
  </div>
</div>
<div class="flex justify-center mb-5">
  <Card />
</div>

<style>
</style>
