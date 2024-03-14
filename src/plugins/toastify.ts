import 'vue3-toastify/dist/index.css'
import Vue3Toastity from 'vue3-toastify'
import type { App } from 'vue'

export function install(app: App) {
  app.use(Vue3Toastity, {
    autoClose: 2000,
  })
}
