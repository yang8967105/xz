import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import UserView from '../views/homepage/UserView.vue'
import DesignInfo from '../views/designInfopage/Index.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: UserView
  },
  {
    path: '/designInfo',
    name: 'designInfo',
    component: DesignInfo,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
