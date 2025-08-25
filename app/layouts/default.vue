<script setup lang="ts">
import Header from "~/layouts/Header.vue";
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <!-- Header -->
    <Header />
    <div class="w-full flex justify-between">
      <!-- Sidebar -->
      <div class="w-1/6">
        <SideNav />
      </div>
      <div class="w-full">
        <slot />
      </div>
    </div>
  </div>
  <main class="main"></main>
</template>

<style scoped></style>
