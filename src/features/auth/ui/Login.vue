<script setup lang="ts">
import { useStores } from '@/stores'

const { authStore } = useStores()
</script>

<template>
  <v-container fluid class="bg-surface h-100vh">
    <v-row align="center" class="h-full" justify="center">
      <v-col cols="12" class="flex flex-row justify-center">
        <v-card class="max-w-[450px] w-full !p-4" elevation="4">
          <v-card-title>
            <div class="flex flex-row justify-center">
              <v-img src="@/assets/image/logo-ehr.png" height="120" aspect-ratio="193/94" />
            </div>
          </v-card-title>
          <v-card-text>
            <div class="text-body-1 text-on-surface-variant font-bold">
              Chào mừng đến với Y Chính Xác! 👋🏻
            </div>
            <div class="text-on-surface-variant text-caption">
              Vui lòng đăng nhập vào tài khoản của bạn để bắt đầu làm việc
            </div>
            <v-form validate-on="submit lazy" class="mt-4" @submit.prevent="authStore.handleSignIn">
              <v-label :text="t('auth.username')" class="text-subtitle-1" />
              <v-text-field
                v-model="authStore.username"
                :error-messages="authStore.errors.username"
                prepend-inner-icon="mdi-email"
                variant="outlined"
                density="comfortable"
                class="mb-1"
                required
              />
              <v-label :text="t('auth.password')" class="text-subtitle-1" />
              <v-text-field
                v-model="authStore.password"
                :error-messages="authStore.errors.password"
                prepend-inner-icon="mdi-lock"
                variant="outlined"
                density="comfortable"
                type="password"
                required
                class="mb-4"
              />

              <v-btn
                type="submit"
                class="text-none text-body-1 !py-6"
                block
                variant="flat"
                color="primary"
              >
                {{ t('auth.login') }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
