import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import Home from './pages/Home.vue'
import FAQ from './pages/FAQ.vue'
import Contacts from './pages/Contacts.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',          component: Home },
    { path: '/faq',       component: FAQ },
    { path: '/contacts',  component: Contacts },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

createApp(App).use(router).mount('#app')
