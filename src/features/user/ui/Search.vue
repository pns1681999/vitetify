<script setup lang="ts">
import { useStores } from '@/stores'

const { userStore } = useStores()
</script>

<template>
  <v-form @submit.prevent="userStore.onSearch">
    <div class="w-full flex flex-inline flex-row gap-2">
      <v-row dense class="grow">
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="userStore.searchTextField"
            :label="t('search')"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            density="compact"
            clearable
            hide-details
            @click:clear="userStore.onSearch"
          />
        </v-col>
        <v-col cols="12" sm="3">
          <common-input-date v-model="userStore.createdAfter" :label="t('createAfter')" @update:model-value="userStore.onSearch" />
        </v-col>
        <v-col cols="12" sm="3">
          <common-input-date v-model="userStore.createdBefore" :label="t('createBefore')" @update:model-value="userStore.onSearch" />
        </v-col>
      </v-row>
      <v-btn variant="flat" type="submit" prepend-icon="mdi-magnify" class="text-none !h-[40px]" :text="t('search')" color="primary" />
    </div>
  </v-form>
</template>
