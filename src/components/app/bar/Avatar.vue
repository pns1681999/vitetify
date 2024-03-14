<script setup lang="ts">
import { useStores } from '@/stores'

const { authStore } = useStores()
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
        icon
        v-bind="props"
      >
        <v-avatar
          color="brown"
          size="32"
        >
          <span class="text-body-1">AD</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text class="p-0">
        <div class="text-center">
          <div class="py-2">
            <h3 class="font-bold">
              Admin
            </h3>
            <!-- <p class="text-caption mt-1">
              admin@gmail.com
            </p> -->
          </div>
          <v-divider />
          <v-btn
            variant="text"
            class="text-none"
            block
            :loading="authStore.isLoading"
            prepend-icon="mdi-logout"
            @click="authStore.handleSignOut"
          >
            {{ t('auth.logout') }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
