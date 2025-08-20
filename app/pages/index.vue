<script setup lang="ts">
import SiratLogo from "~/assets/Images/copy 17.png";
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Videos",
      to: "/videos",
    },
    {
      label: "Podcasts",
      to: "/podcasts",
    },
    {
      label: "Posts",
      to: "/posts",
    },
    {
      label: "Analytics",
      to: "/analytics",
    },
  ],
]);
</script>

<template>
  <div>
    <section class="flex w-full h-[100px] justify-between items-center p-5">
      <div>
        <img src="~/assets/Images/logo.png" width="300px" height="300px" />
      </div>
      <div class="flex justify-center items-center flex-1">
        <UNavigationMenu
          highlight
          highlight-color="primary"
          orientation="horizontal"
          :items="items"
        />
      </div>
      <div class="flex justify-center items-center gap-6">
        <UColorModeButton />
        <UInput
          icon="i-lucide-search"
          size="xl"
          variant="outline"
          placeholder="Search..."
          class="flex items-center text-base"
          :ui="{
            base: 'rounded-xl flex items-center',
            trailingIcon: '',
          }"
        />
        <UAvatar
          src="https://github.com/benjamincanac.png"
          size="3xl"
          class="p-1 bg-secondary-200"
        />
      </div>
    </section>
    <section class="px-20"></section>
    <section></section>
  </div>
</template>

<style scoped></style>
