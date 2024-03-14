<script setup lang="ts">
const title = t('nav.management')
const items = computed(() => ([
  {
    title: t('nav.user'),
    to: '/account/user',
    appendIcon: 'mdi-account-group-outline',
  },
  {
    title: t('nav.staff'),
    to: '/account/staff',
    appendIcon: 'mdi-account-tie-outline',
  },
]))
</script>

<template>
  <AppBtn>
    {{ title }}

    <v-icon
      class="hidden-sm-and-down"
      icon="mdi-chevron-down"
      size="14"
    />

    <AppMenu
      :items="items"
      activator="parent"
      width="200"
    />
  </AppBtn>
</template>
