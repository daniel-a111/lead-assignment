import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
.use(router)
.use(Vue3Toastify, {  autoClose: 3000,} as ToastContainerOptions)
.mount('#app')
