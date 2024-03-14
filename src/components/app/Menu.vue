<script setup lang="ts">
import type { Item } from '@/components/app/list/List.vue'

defineProps({
  items: {
    type: Array as PropType<Item[]>,
    default: () => ([]),
  },
})
</script>

<template>
  <v-menu
    close-delay="100"
    location="bottom end"
    open-delay="60"
    open-on-hover
  >
    <template #activator="{ props }">
      <slot name="activator" v-bind="{ props }" />
    </template>

    <v-sheet
      class="overflow-hidden"
      border
      rounded
    >
      <AppListList :items="items" nav />
    </v-sheet>
  </v-menu>
</template>
