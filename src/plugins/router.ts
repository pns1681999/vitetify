import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { useStores } from '@/stores'

export function install(app: App) {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    extendRoutes: (routes) => {
      // !CHEAT:  redirect router
      const redirects = [{
        from: '/',
        to: '/account/user',
      }]
      const routesWithRedirect = routes.map((item) => {
        const redirect = redirects.find(redirect => redirect.from === item.path)
        if (redirect) {
          return {
            ...item,
            redirect: redirect.to,
          }
        }
        return item
      })
      return setupLayouts(routesWithRedirect)
    },
  })

  router.beforeEach((to, _) => {
    const { authStore } = useStores()
    if (to.name !== '/login' && !authStore.isAuth)
      return `/login?redirect=${to.fullPath}`
    if (to.name === '/login' && authStore.isAuth)
      return '/'
    startProgress()
  })

  router.afterEach(() => {
    doneProgress()
  })
  app.use(router)
}
