<script setup lang="ts">

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Videos',
    to: '/videos',
  },
  {
    label: 'Podcasts',
    to: '/podcasts',
  },
  {
    label: 'posts',
    to: '/posts',
  }
])

</script>

<template>
  <div class="w-full">
    <UNavigationMenu :items="items" class="w-full flex justify-center gap-10" />
  </div>
</template>

<style scoped>

</style>