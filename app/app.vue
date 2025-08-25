<template>
  <div>
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
<script setup lang="ts">
const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();
</script>
