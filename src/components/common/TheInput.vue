<script setup lang="ts">
const modelValue = defineModel()
</script>

<template>
  <v-responsive
    class="mx-auto"
    max-width="250"
  >
    <v-text-field
      id="input"
      v-model="modelValue"
      type="text"
      v-bind="$attrs"
      border="~ rounded gray-200 dark:gray-700"
    />
  </v-responsive>
</template>
