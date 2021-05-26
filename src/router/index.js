import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Article from '../views/Article.vue'
import AdminHome from '../adminviews/AdminHome.vue'
import AdminArticleList from '../adminviews/ArticleList.vue'
import TagsList from '../adminviews/TagsList.vue'
import Category from '../adminviews/Category.vue'
import AdminEditor from '../adminviews/AdminEditor.vue'
import ReadEditor from '../components/readEditor.vue'
import ArticleList from '../components/ArticleList.vue'
import ArticleDetail from '../components/ArticleDetail.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/article',
    name: 'article',
    component: Article,
    children: [
      {
        path: '/article/list',
        name: 'articlesList',
        component: ArticleList
      },
      {
        path: '/article/detail',
        name: 'articlesDetail',
        component: ArticleDetail
      },
      { // 重定向--到文章列表页
        path: '/article*',
        redirect: '/article/list'
      }
    ]
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
        component: AdminArticleList
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
