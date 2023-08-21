<script>
  import { BottomNav, BottomNavItem, Tooltip } from "flowbite-svelte";
  import { Icon } from "flowbite-svelte-icons";
</script>

<div class="bottom-nav-container">
  <BottomNav position="absolute" navType="application" classInner="grid-cols-5">
    <BottomNavItem href="/" btnName="Home" appBtnPosition="left">
      <Icon
        name="home-solid"
        class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      />
      <Tooltip arrow={false}>Home</Tooltip>
    </BottomNavItem>
    <BottomNavItem href="/site1" btnName="Wallet" appBtnPosition="middle">
      <Icon
        name="wallet-solid"
        class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      />
      <Tooltip arrow={false}>Site 1</Tooltip>
    </BottomNavItem>
    <div class="flex items-center justify-center">
      <BottomNavItem
        btnName="Create new item"
        appBtnPosition="middle"
        btnClass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800"
      >
        <Icon name="plus-solid" class="text-white" />
        <Tooltip arrow={false}>Create new item</Tooltip>
      </BottomNavItem>
    </div>
    <BottomNavItem href="/site2" btnName="Settings" appBtnPosition="middle">
      <Icon
        name="adjustments-vertical-outline"
        class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      />
      <Tooltip arrow={false}>Site 2</Tooltip>
    </BottomNavItem>
    <BottomNavItem btnName="Profile" appBtnPosition="right">
      <Icon
        name="user-circle-solid"
        class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      />
      <Tooltip arrow={false}>Profile</Tooltip>
    </BottomNavItem>
  </BottomNav>
</div>

<style>
  .bottom-nav-container {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
