import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import FrontPage from '../views/FrontPage.vue'
import CategoryPage from '../views/CategoryPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/masa/1',
  },
  {
    path: '/masa/:idMasa',
    name: 'FrontPage',
    component: FrontPage,
    props: true
  },
  {
    path: '/masa/:idMasa/categorie/:idCategorie',
    name: 'CategoryPage',
    component: CategoryPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
