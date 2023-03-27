import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { createVfm } from 'vue-final-modal'
const vfm = createVfm()

import './assets/sass/global.scss'

const app = createApp(App)
app.use(store)
app.use(router) // 라우터 등록
app.use(vfm)
app.mount('#app')
