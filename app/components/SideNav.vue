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
      label: "Courses",
      icon: "lets-icons:book-open-alt",
      to: "/courses",
    },
    {
      label: "Users",
      icon: "lets-icons:user-alt-fill",
      to: "/users",
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
  <section class="px-16">
    <div
      class="bg-secondary-50 drop-shadow drop-shadow-neutral-200 flex justify-center items-start rounded-xl py-5"
    >
      <div class="flex flex-col justify-between">
        <!-- Top Menu -->
        <UNavigationMenu
          highlight
          highlight-color="primary"
          orientation="vertical"
          collapsed
          :items="items[0]"
        >
          <!-- Override how icons are rendered -->
          <template #item="{ item }">
            <div class="flex items-center gap-3">
              <!-- Bigger Icon -->
              <UIcon :name="item.icon" class="w-7 h-7" />
            </div>
          </template>
        </UNavigationMenu>

        <!-- Divider -->
        <hr class="border-t border-gray-300 my-4" />

        <!-- Bottom Menu -->
        <UNavigationMenu
          highlight
          highlight-color="primary"
          orientation="vertical"
          collapsed
          :items="items[1]"
        >
          <template #item="{ item }">
            <div class="flex items-center gap-3">
              <!-- Bigger Icon -->
              <UIcon :name="item.icon" class="w-7 h-7" />
            </div>
          </template>
        </UNavigationMenu>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
