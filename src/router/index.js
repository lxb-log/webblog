import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import AdminHome from '../adminviews/AdminHome.vue'
import ArticleList from '../adminviews/ArticleList.vue'
import TagsList from '../adminviews/TagsList.vue'
import Category from '../adminviews/Category.vue'
import AdminEditor from '../adminviews/AdminEditor.vue'
import ReadEditor from '../components/readEditor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/readeditor',
    name: 'readEditor',
    component: ReadEditor
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
      {
        path: '/admin/editor',
        name: 'editor',
        component: AdminEditor
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
