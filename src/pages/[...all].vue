<template>
  <div class="h-100vh w-100vw flex flex-row items-center justify-center">
    <div class="text-center">
      <v-img src="@/assets/image/404.png" width="40vw" />
      <h1 class="text-h5 my-4 text-center">
        {{ $t('error.404') }}
      </h1>
      <v-btn :text="t('error.goback')" variant="flat" class="text-none" color="primary" @click="() => $router.push('/')" />
    </div>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: blank
</route>
