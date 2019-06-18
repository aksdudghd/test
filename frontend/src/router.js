import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import NotFoundPage from '@/components/404'
import IndexPage from '@/components/IndexPage'
import ServicePage from '@/components/ServicePage'
import AboutPage from '@/components/AboutPage'
import SupportPage from '@/components/SupportPage'
import ListPage from '@/components/ListPage'
import ViewPage from '@/components/ViewPage'


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
      path: '/support',
      name: 'support',
      component: SupportPage
    },
    {
      path: '/support/notice',
      name: 'notice',
      component: ListPage
    },
    {
      path: '/support/faq',
      name: 'faq',
      component: ListPage,
    },
    {
      path: '/support/data',
      name: 'data',
      component: ListPage
    },
    {
      path: '/support/:UID',
      name: 'view',
      component: ViewPage
    },

  ]
})
