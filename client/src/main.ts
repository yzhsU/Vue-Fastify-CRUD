import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/sass/global.scss'

import axios from 'axios';

const app = createApp(App)
app.use(store)
app.use(router) // 라우터 등록
app.config.globalProperties.$axios = axios.create({
    baseURL: 'http://localhost:3000', // 백엔드 API의 기본 URL을 설정합니다.
    withCredentials: false, // 서버로부터 쿠키를 전송받지 않도록 설정합니다.
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})
app.mount('#app')
