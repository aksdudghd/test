import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexPage from '@/components/IndexPage'
import listPage from '@/components/listPage'
import viewPage from '@/components/viewPage'


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/list',
      name: 'list',
      component: listPage
    },
    {
      path: '/list/:UID',
      name: 'view',
      component: viewPage
    },

  ]
})
