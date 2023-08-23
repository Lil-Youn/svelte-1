<script>
  import { DarkMode } from "flowbite-svelte";
  import { Icon } from "flowbite-svelte-icons";
</script>

<DarkMode class="text-lg">
  <svelte:fragment slot="lightIcon">
    <Icon name="sun-solid" />
  </svelte:fragment>
  <svelte:fragment slot="darkIcon">
    <Icon name="moon-solid" />
  </svelte:fragment>
</DarkMode>
