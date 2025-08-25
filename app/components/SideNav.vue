<script setup lang="ts">
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Home",
      icon: "lets-icons:home-fill",
      to: "/",
    },
    {
      label: "Videos",
      icon: "lets-icons:video-fill",
      to: "/videos",
    },
    {
      label: "Podcasts",
      icon: "lets-icons:mic-alt-fill",
      to: "/podcasts",
    },
    {
      label: "Posts",
      icon: "lets-icons:paper-alt",
      to: "/posts",
    },
    {
      label: "Analytics",
      icon: "lets-icons:stat",
      to: "/analytics",
    },
  ],
  [
    {
      label: "Settings",
      icon: "lets-icons:setting-alt-fill",
      to: "/settings",
    },

    {
      label: "Logout",
      icon: "lets-icons:sign-out",
      to: "/logout",
    },
  ],
]);
</script>

<template>
  <section class="px-20">
    <div
      class="h-screen bg-secondary-50 drop-shadow drop-shadow-neutral-200 flex justify-center items-start rounded-xl py-5"
    >
      <div class="flex flex-col justify-between h-full">
        <!-- Top Menu -->
        <UNavigationMenu
          highlight
          highlight-color="primary"
          orientation="vertical"
          collapsed
          :items="items[0]"
        />

        <!-- Divider -->
        <hr class="border-t border-gray-300 my-4" />

        <!-- Bottom Menu -->
        <UNavigationMenu
          highlight
          highlight-color="primary"
          orientation="vertical"
          collapsed
          :items="items[1]"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
