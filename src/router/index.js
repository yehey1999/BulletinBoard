import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/create',
      name: 'CreateArticle',
      component: () => import('../pages/CreateArticle.vue')
    },
    {
      path: '/article/:id',
      name: 'ShowArticle',
      component: () => import('../pages/ShowArticle.vue')
    }
  ]
})
