import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import NotFoundPage from '@/components/404'
import IndexPage from '@/components/IndexPage'
import ServicePage from '@/components/ServicePage'
import AboutPage from '@/components/AboutPage'
import listPage from '@/components/listPage'
import viewPage from '@/components/viewPage'


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: '404',
      component: NotFoundPage
    },
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/service',
      name: 'service',
      component: ServicePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
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
