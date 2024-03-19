<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <v-container fluid>
    <div class="mb-4 flex flex-row items-center justify-between">
      <div v-if="title" class="text-h6">
        {{ title }}
      </div>
      <slot name="rightAction" />
    </div>
    <slot />
  </v-container>
</template>
