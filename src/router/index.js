import Vue from 'vue'
import Router from 'vue-router'
import Search from "@/components/search/search"
import Home from "@/components/home/Home"
import Music from "@/components/myMusic/myMusic"


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      name: 'search',
      path: '/search/:keywords',
      component: Search
    },
    {
      path: '/music',
      component: Music
    }
  ]
})
