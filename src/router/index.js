import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/emp',
    name: 'emp',
    component: () => import('../views/tlias初级页面练习/EmpView.vue')
  },
  {
    path: '/dept',
    name: 'dept',
    component: () => import('../views/tlias初级页面练习/DeptView.vue')
  },
  {
    path: '/',
    redirect:'/dept',
  },
]

const router = new VueRouter({
  routes
})

export default router
