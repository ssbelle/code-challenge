import './base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification'

import App from './App.vue'
import BaseIcon from '@/components/atoms/BaseIcon.vue'

// Create App
const app = createApp(App)

// Create state store
const pinia = createPinia()

// Attach state store to app
app.use(pinia)

// Attach toast for beautiful error messaging
app.use(ToastPlugin)

// Globally register BaseIcon on App for ease of access
app.component('BaseIcon', BaseIcon)

// Mount App
app.mount('#app')
