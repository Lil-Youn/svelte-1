<script>
  import { Gallery } from "flowbite-svelte";
  let whale = "/src/assets/whale.png";
  let whale1 = "/src/assets/whale1.jpeg";
  let whale2 = "/src/assets/whale2.PNG";
  let whale3 = "/src/assets/whale3.PNG";
  let whale4 = "/src/assets/whale4.PNG";
  let whale5 = "/src/assets/whale5.PNG";
  let whale6 = "/src/assets/whale6.PNG";
  let whale7 = "/src/assets/whale7.PNG";
  let whale9 = "/src/assets/whale9.png";
  let whale10 = "/src/assets/whale10.png";
  let whale11 = "/src/assets/whale11.jpeg";
  let whale12 = "/src/assets/whale12.jpeg";
  const images = [
    {
      alt: "erbology",
      src: whale,
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
      alt: "toiletbag",
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
