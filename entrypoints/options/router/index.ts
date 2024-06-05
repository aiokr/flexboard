import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/options.html',
      name: 'default',
      component: HomeView,
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('../views/ChartMaker.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    }
  ]
})

export default router
