import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
// Register plugins
const modules = import.meta.glob<AnyObject>('@/plugins/*.ts', { eager: true })
Object.values(modules).forEach((module: AnyObject) => module.install?.(app))

app.mount('#app')
