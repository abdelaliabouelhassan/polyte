import { createApp } from 'vue'
import './assets/index.css'
import './assets/style.css'
import App from './App.vue'
import router from './router/routes.js'
//import 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'

createApp(App)
.use(router)
.mount('#app')
