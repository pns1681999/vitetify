<script setup lang="ts">
const prop = defineProps({
  label: String,
  format: {
    type: String,
    default: 'DD-MM-YYYY',
  },
})

const model = defineModel()
const menu = shallowRef(false)

const filteredData = computed(() => {
  return formatDate(model.value as string, prop.format)
})
</script>

<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template #activator="{ props }">
      <v-text-field
        :model-value="filteredData"
        :label="prop.label"
        variant="outlined"
        density="compact"

        clearable readonly hide-details
        v-bind="props"
        @click:clear="model = null"
      />
    </template>
    <v-locale-provider :locale="locale">
      <v-date-picker v-model="model" hide-header color="primary" @update:model-value="menu = false" />
    </v-locale-provider>
  </v-menu>
</template>
