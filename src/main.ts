import './base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import mobileHelper from './utils'
import BaseIcon from '@/components/atoms/BaseIcon.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(mobileHelper)

app.component('BaseIcon', BaseIcon)

app.mount('#app')
