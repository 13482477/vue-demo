import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/login/index'),
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index')
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
