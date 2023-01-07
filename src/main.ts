import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueFeather from 'vue-feather'

import App from './App.vue'
import router from './router'

import './assets/style.scss'


const app = createApp(App)

app.component('Icon', VueFeather)
app.use(createPinia())
app.use(router)

app.mount('#app')
