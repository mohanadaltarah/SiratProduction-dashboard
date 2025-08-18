<template>
  <div>
    <UApp>
        <NuxtPage/>
    </UApp>
  </div>
</template>
<script setup lang="ts">
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
</script>