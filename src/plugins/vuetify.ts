import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import type { App } from 'vue'

export function install(app: App) {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
    },
    theme: {
      defaultTheme: 'light',
    },
  })
  app.use(vuetify)
}
