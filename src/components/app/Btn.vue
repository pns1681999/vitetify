<script setup>
defineProps({
  icon: String,
  text: String,
  variant: {
    type: String,
    default: 'text',
  },
})
</script>

<template>
  <v-btn
    :icon="!!icon"
    :variant="variant"
    class="app-btn text-body-2 text-none px-3"
    color="medium-emphasis"
  >
    <slot />
    <template v-if="text">
      {{ t(text) }}
    </template>
    <template v-else-if="icon || $slots.icon">
      <slot v-if="$slots.icon" name="icon" />
      <v-icon v-else :icon="icon" size="24" />
    </template>
  </v-btn>
</template>
