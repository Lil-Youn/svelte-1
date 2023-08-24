<script>
  import { Gallery } from "flowbite-svelte";
  import Whale from "/src/assets/whale.png";
  import whale1 from "/src/assets/whale1.jpeg";
  import whale2 from "/src/assets/whale2.png";
  import whale3 from "/src/assets/whale3.png";
  import whale4 from "/src/assets/whale4.png";
  import whale5 from "/src/assets/whale5.png";
  import whale6 from "/src/assets/whale6.png";
  import whale7 from "/src/assets/whale7.png";
  import whale9 from "/src/assets/whale9.png";
  import whale10 from "/src/assets/whale10.png";
  import whale11 from "/src/assets/whale11.jpeg";
  import whale12 from "/src/assets/whale12.jpeg";
  const images = [
    {
      alt: "erbology",
      src: Whale,
    },
    {
      alt: "shoes",
      src: whale1,
    },
    {
      alt: "small bag",
      src: whale2,
    },
    {
      alt: "plants",
      src: whale3,
    },
    {
      alt: "watch",
      src: whale4,
    },
    {
      alt: "shoe",
      src: whale5,
    },
    {
      alt: "cream",
      src: whale6,
    },
    {
      alt: "small bag",
      src: whale7,
    },
    {
      alt: "lamp",
      src: whale9,
    },
    {
      alt: "toiimportbag",
      src: whale10,
    },
    {
      alt: "playstation",
      src: whale11,
    },
    {
      alt: "bag",
      src: whale12,
    },
  ];
</script>

<header>
  <div class="flex justify-center mt-10 mb-20">
    <div class="shadow-md rounded-md w-1/2">
      <p class="font-mono text-lg text-gray-800 text-center">Gallery</p>
    </div>
  </div>
</header>
<main>
  <Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3" />
</main>

<style>
  main {
    padding: 1rem;
    margin-bottom: 15rem;
  }
</style>
