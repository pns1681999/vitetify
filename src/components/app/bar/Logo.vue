<script setup>
defineProps({
  alt: Boolean,
})
</script>

<template>
  <router-link
    to="/"
    class="d-inline-block me-2 ms-4"
  >
    <v-img
      key="logo"
      alt="Logo"
      src="@/assets/image/logo-ehr.png"
      :transition="false"
      width="140"
      class="shrink"
    />
  </router-link>
</template>
