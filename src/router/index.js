import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tax810',
    name: 'Tax810',
    component: () => import('../views/Tax810.vue')
  },
  {
    path: '/cManth',
    name: 'CalcMonth',
    component: () => import('../views/CalcMonth.vue')
  },
  {
    path: '/cWarikan',
    name: 'CalcWarikan',
    component: () => import('../views/CalcWarikan.vue')
  },
  {
    path: '/chintai',
    name: 'Chintai',
    component: () => import('../views/Chintai.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
