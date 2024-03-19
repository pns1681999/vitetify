<script setup lang="ts">
defineProps({
  item: Object,
})
</script>

<template>
  <v-menu
    min-width="200px"
    open-on-hover
    rounded
    open-delay="60"
  >
    <template #activator="{ props }">
      <v-btn
        flat
        density="compact"
        class="text-none"
        v-bind="props"
        icon="mdi-dots-vertical"
      />
    </template>
    <v-card>
      <v-card-text class="p-0">
        <div class="text-center">
          <v-btn
            variant="text"
            class="text-none justify-start"
            block
            prepend-icon="mdi-file-account-outline"
          >
            {{ t('tool.log') }}
          </v-btn>
          <v-divider />
          <v-btn
            variant="text"
            class="text-none justify-start"
            block
            prepend-icon="mdi-pencil-outline"
          >
            {{ t('tool.edit') }}
          </v-btn>
          <v-divider />
          <v-btn
            variant="text"
            class="text-none justify-start"
            block
            prepend-icon="mdi-delete-outline"
          >
            {{ t('tool.delete') }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
