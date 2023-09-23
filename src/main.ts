import './styles/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import mobileHelper from './services/mobileHelper'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(mobileHelper)

app.mount('#app')
