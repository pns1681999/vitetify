<script setup lang="ts">
import { shallowRef } from 'vue'
import { Gender } from '@/configs/enum'

const dialog = shallowRef(false)
const genderOptions = [
  {
    title: t('male'),
    value: Gender.MALE,
  },
  {
    title: t('female'),
    value: Gender.FEMALE,
  },
]
</script>

<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
      persistent
    >
      <template #activator="{ props: activatorProps }">
        <v-btn
          color="primary"
          class="text-none"
          flat
          prepend-icon="mdi-plus"
          v-bind="activatorProps"
        >
          {{ t('createUser') }}
        </v-btn>
      </template>

      <v-card
        prepend-icon="mdi-account"
        :title="t('userProfile')"
      >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"
              md="7"
              sm="6"
            >
              <v-text-field
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-account-outline"
                :label="`${t('fullname')}*`"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="5"
              sm="6"
            >
              <v-select
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-gender-male-female"
                :items="genderOptions"
                :label="`${t('gender')}*`"
                required
              />
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-email-outline"
                label="Email*"
                required
              />
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-phone-outline"
                :label="t('telephone')"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="5"
              sm="6"
            >
              <v-text-field
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-calendar-account-outline"
                :label="t('dob')"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="7"
              sm="6"
            >
              <v-select
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-hospital-building"
                :label="`${t('clinic')}*`"
                required
              />
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis">*{{ t('indicatesRequiredField') }}</small>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />

          <v-btn
            :text="t('close')"
            class="text-none"
            variant="plain"
            @click="dialog = false"
          />

          <v-btn
            color="primary"
            class="text-none"
            :text="t('create')"
            variant="tonal"
            @click="dialog = false"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
