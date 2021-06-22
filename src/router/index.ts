import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/list/Home.vue'
import Login from '../views/auth/login/login.vue'
import SignUp from '../views/auth/signup/signup.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/list/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
