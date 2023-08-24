<script>
  import { Card, Button, Toggle } from "flowbite-svelte";
  let vCard = false;
  import Whale from "/src/assets/whale.png";
  let isMobile = false;
</script>

<div
  class="responsive-container"
  style={isMobile ? "margin-bottom: 10vh;" : "margin-bottom: 25vh;"}
>
  <Card img={Whale} reverse={vCard} class="mb-2">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Hi, its me Simon! First try on Svelte.... :)
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      I could write a lot of stuff here, but I am not going to do that. I am
      just going to say that I am ChefDev and I am going to make a lot of cool
      stuff with Svelte.
    </p>
  </Card>
</div>

<style>
  .responsive-container {
    width: 25vw;
    height: 20vh;
    position: relative;
  }

  @media (max-width: 600px) {
    .responsive-container {
      width: 50vw;
      height: 30vh;
    }
  }
</style>
