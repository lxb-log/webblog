import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import AdminHome from '../adminviews/AdminHome.vue'
import ArticleList from '../adminviews/ArticleList.vue'
import TagsList from '../adminviews/TagsList.vue'
import Category from '../adminviews/Category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminHome,
    children: [
      {
        path: '/admin/articles',
        name: 'articles',
        component: ArticleList
      },
      {
        path: '/admin/tags',
        name: 'tags',
        component: TagsList
      },
      {
        path: '/admin/category',
        name: 'category',
        component: Category
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
