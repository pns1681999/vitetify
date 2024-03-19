<!-- eslint-disable vue/valid-v-slot -->
<script setup>
import ActionMenu from './ActionMenu.vue'
import Search from './Search.vue'
import CreateUser from './CreateUser.vue'
import { useStores } from '@/stores'

const { userStore } = useStores()

function filterData(value) {
  if (!value)
    return '--'
  return value
}
</script>

<template>
  <app-page title="Quản lý khách hàng">
    <template #rightAction>
      <CreateUser />
    </template>
    <v-card flat border>
      <template #text>
        <Search />
      </template>
      <v-tabs :model-value="userStore.status" density="compact" @update:model-value="userStore.changeStatus">
        <v-tab class="text-none" value="all">
          {{ t('all') }}
        </v-tab>
        <v-tab class="text-none" value="active">
          {{ t('active') }}
        </v-tab>
        <v-tab class="text-none" value="de-active">
          {{ t('de-active') }}
        </v-tab>
      </v-tabs>
      <v-divider />
      <v-data-table-server
        v-model:items-per-page="userStore.itemsPerPage"
        :headers="userStore.headers"
        :items="userStore.userList"
        :items-length="userStore.totalItems"
        :loading="userStore.isLoading"
        :loading-text="t('table.loading')"
        item-value="id"
        :sort-by="userStore.sortBy"
        @update:sort-by="userStore.changeSort"
      >
        <template #bottom>
          <div class="w-full flex justify-center pt-2">
            <v-pagination
              :model-value="userStore.page"
              :length="userStore.totalPages"
              class="my-4 max-w-[50%]"
              :total-visible="5"
              :disabled="false"
              density="comfortable"
              @update:model-value="userStore.changePage"
            />
          </div>
        </template>
        <template #item="{ item }">
          <tr :key="`row-${item.id}`">
            <!-- Name -->
            <td class="py-2">
              <div class="flex flex-col">
                <div>
                  {{ filterData(item.name) }}
                </div>
                <div class="text-truncate text-xs text-gray-500">
                  ID: {{ filterData(item.id) }}
                </div>
              </div>
            </td>
            <!-- Date of birth -->
            <td>
              {{ filterData(formatDate(item.dateOfBirth)) }}
            </td>
            <!-- Contact -->
            <td>
              <div class="flex flex-col gap-1">
                <div class="flex flex-inline items-center gap-1">
                  <v-icon icon="mdi-email-outline" size="16px" color="grey" />
                  {{ filterData(item.email) }}
                </div>
                <div class="flex flex-inline items-center gap-1">
                  <v-icon icon="mdi-phone-outline" size="16px" color="grey" />
                  {{ filterData(item.telephone) }}
                </div>
              </div>
            </td>
            <!-- Status -->
            <td>
              <v-chip :color="item.status === 'active' ? 'success' : 'grey'" density="comfortable" class="text-none">
                {{ filterData(t(item.status)) }}
              </v-chip>
            </td>
            <!-- Created at -->
            <td class="text-end">
              {{ filterData(formatDate(item.createdAt)) }}
            </td>
            <!-- Action -->
            <td>
              <ActionMenu :item="item" />
            </td>
          </tr>
        </template>
      </v-data-table-server>
    </v-card>
  </app-page>
</template>
