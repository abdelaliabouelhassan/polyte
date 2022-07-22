import { createApp } from 'vue'
import './assets/index.css'
import './assets/style.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
import VueApexCharts from "vue3-apexcharts";

import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);

const app = createApp(App);

import App from './App.vue'
import router from './router/routes.js'

createApp(App)
.use(pinia)
.use(router)
.use(VueApexCharts)
.use(hljsVuePlugin)
.mount('#app')
