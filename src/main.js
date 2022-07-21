import { createApp } from 'vue'
import './assets/index.css'
import './assets/style.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

import App from './App.vue'
import router from './router/routes.js'

createApp(App)
.use(pinia)
.use(router)
.use(VueApexCharts)
.mount('#app')
