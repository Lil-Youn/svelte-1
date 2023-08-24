<script>
  import { Button, Modal } from "flowbite-svelte";
  import { Icon } from "flowbite-svelte-icons";
  let popupModal = false;
</script>

<header>
  <div class="flex justify-center mt-10 mb-10">
    <div class="shadow-md rounded-md w-1/2">
      <p class="font-mono text-lg text-gray-800 text-center">Test Modal</p>
    </div>
  </div>
</header>
<main>
  <div class="modal-button">
    <Button on:click={() => (popupModal = true)}>Click me Baby!</Button>
  </div>

  <Modal bind:open={popupModal} size="xs" autoclose>
    <div class="text-center">
      <Icon
        name="exclamation-circle-outline"
        class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
      />
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        Svelte rocks !
      </h3>
      <Button color="green" class="mr-2">Hell Yeah</Button>
      <Button color="alternative">Dafuq</Button>
    </div>
  </Modal>
</main>

<style>
  main {
    padding: 1rem;
    margin-bottom: 15rem;
  }
  .modal-button {
    margin: 0 auto;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }
</style>
