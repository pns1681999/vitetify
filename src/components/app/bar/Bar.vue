<template>
  <v-app-bar flat border="b">
    <template #prepend>
      <app-bar-logo />
    </template>
    <template #append>
      <app-bar-account />
      <v-divider
        class="mx-2 my-auto border-gray-800"
        style="height: 16px;"
        inset
        vertical
      />
      <app-bar-avatar />
    </template>
  </v-app-bar>
</template>
