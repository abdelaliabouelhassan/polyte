import { createApp } from 'vue'
import './assets/index.css'
import './assets/style.css'
import { createPinia } from 'pinia'
const pinia = createPinia()

import App from './App.vue'
import router from './router/routes.js'

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
