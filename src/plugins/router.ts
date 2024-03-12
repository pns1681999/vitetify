import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

export function install(app: App) {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    extendRoutes: routes => setupLayouts(routes),
  })
  router.beforeEach(() => {
    startProgress()
  })

  router.afterEach(() => {
    doneProgress()
  })
  app.use(router)
}
