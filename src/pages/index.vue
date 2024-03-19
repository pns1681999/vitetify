<script setup lang="ts">
import { useStores } from '@/stores'

defineOptions({
  name: 'IndexPage',
})

const name = ref('')
const { homeHistoryStore } = useStores()
const router = useRouter()
function go() {
  if (name.value) {
    homeHistoryStore.addHistory(name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
  }
}
</script>

<template>
  <div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitetify
      </a>
    </p>
    <p>
      <em class="text-sm op75">Vite + Vuetify starter: {{ locale }}</em>
    </p>

    <v-btn-toggle divided>
      <v-btn :active="locale === 'vi'" @click="setLocale('vi')">
        VI
      </v-btn>
      <v-btn :active="locale === 'en'" @click="setLocale('en')">
        EN
      </v-btn>
    </v-btn-toggle>

    <div class="py-4" />

    <template v-if="homeHistoryStore.homeHistory?.length">
      <div>History</div>
      <ul>
        <li v-for="item in homeHistoryStore.homeHistory" :key="item">
          {{ item }}
        </li>
      </ul>
    </template>

    <common-the-input
      v-model="name"
      :placeholder="t('app.question')"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <v-btn
        :disabled="!name"
        color="primary"
        @click="go"
      >
        Go
      </v-btn>
    </div>
  </div>
</template>
