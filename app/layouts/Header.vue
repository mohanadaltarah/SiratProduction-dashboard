<script setup lang="ts"></script>

<template>
  <section class="flex w-full h-[100px] justify-between items-center p-5">
    <div>
      <img src="~/assets/Images/logo.png" width="300px" height="300px" />
    </div>
    <div class="w-full flex justify-center">
      <UInput
        icon="i-lucide-search"
        size="xl"
        variant="outline"
        placeholder="Search..."
        class="w-1/2"
        :ui="{
          base: 'rounded-2xl text-lg',
        }"
      />
    </div>
    <div>
      <div class="flex justify-center items-center gap-6">
        <UColorModeButton />
        <UAvatar
          src="https://github.com/benjamincanac.png"
          size="3xl"
          class="p-1 bg-secondary-200"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
