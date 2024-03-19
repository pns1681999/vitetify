<template>
  <v-app-bar flat border="b">
    <v-container class="app-max-width w-full flex flex-row flex-nowrap items-center">
      <app-bar-logo />
      <v-spacer />
      <app-bar-account />
      <v-divider
        class="mx-2 my-auto border-gray-800"
        style="height: 16px;"
        inset
        vertical
      />
      <app-bar-avatar />
    </v-container>
  </v-app-bar>
</template>
