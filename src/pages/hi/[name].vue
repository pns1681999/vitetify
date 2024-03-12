<script setup lang="ts">
const params = useRoute('/hi/[name]').params
const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon-pedestrian inline-block text-4xl />
    <p>
      Hi, {{ params.name }}
    </p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>

    <div>
      <v-btn btn m-3 mt-8 text-sm @click="router.back()">
        Back
      </v-btn>
    </div>
  </div>
</template>
