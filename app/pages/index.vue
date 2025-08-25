<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { sub } from "date-fns";
import type { DropdownMenuItem } from "@nuxt/ui";
import type { Period, Range } from "~/types";

definePageMeta({ layout: "default" });

const range = shallowRef<Range>({
  start: sub(new Date(), { days: 14 }),
  end: new Date(),
});
const period = ref<Period>("daily");
</script>

<template>
  <div>
    <section>
      <HomeStats :period="period" :range="range" />
      <UDashboardPanel> </UDashboardPanel>
    </section>
  </div>
</template>

<style scoped></style>
