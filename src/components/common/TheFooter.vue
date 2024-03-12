<script setup lang="ts">
import { vite_mode } from '@/configs/env.config'
</script>

<template>
  <nav mt-6 inline-flex gap-2 text-xl>
    <v-btn variant="plain" @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </v-btn>
  </nav>
  <nav>
    <div class="text-gray-300">
      Mode: {{ vite_mode }}
    </div>
  </nav>
</template>
