import type { App } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { parse, stringify } from 'zipson'

export function install(app: App) {
  const pinia = createPinia()
  app.use(pinia)
  pinia.use(createPersistedState({
    storage: window.sessionStorage,
    key: id => `__pinia__${id}`,
    serializer: {
      deserialize: parse,
      serialize: stringify,
    },
  }))
}
