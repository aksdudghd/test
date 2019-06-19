import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import NotFoundPage from '@/components/404'
import MainPage from '@/components/MainPage'
import ServicePage from '@/components/ServicePage'
import AboutPage from '@/components/AboutPage'
import SupportPage from '@/components/SupportPage'
import ListPage from '@/components/ListPage'
import ViewPage from '@/components/ViewPage'

import SolutionPage from '@/components/SolutionPage'
import ProgramPage from '@/components/ProgramPage'
import WorkPage from '@/components/WorkPage'

import PeoplePage from '@/components/PeoplePage'
import HistoryPage from '@/components/HistoryPage'



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
      name: 'main',
      component: MainPage
    },
    {
      path: '/service',
      name: 'service',
      component: ServicePage,
    },
    {
      path: '/service/solution',
      name: 'solution',
      component: SolutionPage,
    },
    {
      path: '/service/program',
      name: 'program',
      component: ProgramPage,
    },
    {
      path: '/service/work',
      name: 'work',
      component: WorkPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/about/people',
      name: 'people',
      component: PeoplePage
    },
    {
      path: '/about/history',
      name: 'history',
      component: HistoryPage
    },
    {
      path: '/support',
      name: 'support',
      component: SupportPage,
    },
    {
      path: '/support/:CATAGORY',
      name: 'notice',
      component: ListPage
    },
    {
      path: '/support/:CATAGORY',
      name: 'faq',
      component: ListPage,
    },
    {
      path: '/support/:CATAGORY',
      name: 'data',
      component: ListPage,
      
    },
    {
      path: '/support/:CATAGORY/:UID',
      name: 'view',
      component: ViewPage
    },

  ]
})
