<script>
  import { Button, Modal, Popover } from "flowbite-svelte";
  import { Icon } from "flowbite-svelte-icons";
  import { slide } from "svelte/transition";
  import { Toast } from "flowbite-svelte";

  let popupModal = false;
  let popupToast = false;

  function showPopupToast() {
    popupToast = true;

    setTimeout(() => {
      popupToast = false;
    }, 2000);
  }

  let toastOpen = false;
  function showToast() {
    toastOpen = true;

    setTimeout(() => {
      toastOpen = false;
    }, 2000);
  }
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
  <div class="popover-button">
    <Button>Slide popover</Button>
    <Popover
      class="w-64 text-sm font-light"
      title="Popover title"
      transition={slide}
      >And here's some amazing content. It's very engaging. Right?</Popover
    >
  </div>
  <div class="toast-button">
    <Button on:click={showToast}>Toast?</Button>
  </div>

  <Toast
    class="mb-12"
    open={toastOpen}
    transition={slide}
    position="bottom-right"
    dismissable={false}
  >
    <Icon
      name="fire-outline"
      slot="icon"
      class="w-5 h-5 text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200"
    />
    Set yourself free.
  </Toast>
</main>

<style>
  main {
    padding: 1rem;
    margin-bottom: 20rem;
  }

  .modal-button {
    margin: 0 auto;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
  }
  .popover-button {
    margin: 0 auto;
    margin-bottom: 5rem;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  .toast-button {
    margin: 0 auto;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }
</style>
