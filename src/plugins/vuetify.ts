import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import type { App } from 'vue'

export function install(app: App) {
  const vuetify = createVuetify({
    // ... your configuration
  })
  app.use(vuetify)
}
