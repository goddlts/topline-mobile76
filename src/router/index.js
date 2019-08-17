import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
    },
    {
      name: 'search',
      path: '/search',
      component: () => import(/* webpackChunkName: "search" */ '@/views/search/index.vue')
    },
    {
      name: 'search-result',
      path: '/search-result/:q',
      // 把参数q传给对应的组件
      props: true,
      component: () => import(/* webpackChunkName: "search-result" */ '@/views/search-result/index.vue')
    },
    {
      name: 'article',
      path: '/article/:id',
      props: true,
      component: () => import(/* webpackChunkName: "article" */ '@/views/article/index.vue')
    },
    {
      name: 'user-profile',
      path: '/user-profile',
      component: () => import(/* webpackChunkName: "user-profile" */ '@/views/user-profile/index.vue')
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "layout" */ '@/views/layout-tabbar/index.vue'),
      children: [
        {
          name: 'home',
          path: '',
          component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
        },
        {
          name: 'my',
          path: '/my',
          component: () => import(/* webpackChunkName: "my" */ '@/views/my/index.vue')
        },
      ]
    }
  ]
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  //   }
  // ]
})
