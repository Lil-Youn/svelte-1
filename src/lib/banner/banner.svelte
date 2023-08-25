<script>
  import { Banner } from "flowbite-svelte";
  import { Icon } from "flowbite-svelte-icons";
</script>

<Banner id="default-banner" position="absolute">
  <p
    class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
  >
    <span
      class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600"
    >
      <Icon
        name="bullhorn-solid"
        class="w-3 h-3 text-gray-500 dark:text-gray-400"
      />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      Brandnew 🔥 !!!ChefDev is learning Svelte!!! <a
        href="https://chefdev.de"
        class="inline font-medium text-primary-600 underline dark:text-primary-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
      >
        Check it out!
      </a>
    </span>
  </p>
</Banner>
