import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'nprogress'
import Router from 'vue-router'
Vue.use(Router)
Vue.use(Resource)

Vue.http.interceptors.push((request, next) => {
  NProgress.inc(0.2)

  next((response) => {
    NProgress.done()
    return response
  })
})

const router =  new Router({
  mode: 'hash',
  routes: [
    // {
    //   path: '/',
    //   title:'定时任务列表',
    //   component(resolve){
    //     require (['../pages/cronList/index.vue'], resolve);
    //   }
    // }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((transition) => {
  NProgress.done()
})

export default router
