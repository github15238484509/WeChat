import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js"
import { createPinia } from "pinia"

import "@/mock/index.js"


createApp(App).use(router).use(createPinia()).mount('#app')
