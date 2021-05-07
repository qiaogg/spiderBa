import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/Create'
import Main from '@/components/Main'
import List from '@/components/List'
import Search from '@/components/Search'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/Create',
          name: 'Create',
          component: Create
        },
        {
          path: '/List',
          name: 'List',
          component: List
        },
        {
          path: '/Search',
          name: 'Search',
          component: Search
        },
        {
          path: '/Content',
          name: 'Content',
          component: Content
        }
      ]
    },
   
  ]
})
