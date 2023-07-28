import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/login.vue'
import dataShow from '../components/dataShow.vue'
import ceshi from '../components/ceshi.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: HomeView,
      children:[
        {
          path:'/data',
          component: dataShow
        },
        {
          path:'/ceshi',
          component: ceshi
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  // to: 是一个router对象, 含义是导航到的目标路径.
  // from: 是一个router对象, 含义是当前导航正要离开的路由.
  // next: 是一个函数, 这是一个钩子函数. 一定要调用该方法来 resolve 这个钩子
  // 函数实现的部分, 一定要调用next()方法. 表示导航继续向下执行. 
  // 如果不调用next(), 那么后面的函数将不会被解析或者执行.
  if(to.path !== '/Login') {
      if(localStorage.getItem('token')) {
          return next()
      }
      return next('./Login')
  }
  next()
})

export default router
