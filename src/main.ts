import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory, DataLoaderPlugin } from 'vue-router/auto'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    // routes.find((r) => r.name === '/')!.meta = {}
    return routes
  }
})
const pinia = createPinia()

app.use(DataLoaderPlugin, { router })
app.use(router)
app.use(pinia)

app.mount('#app')
