import Vue from 'vue'
import Router from 'vue-router'
import routes from './app-routes'


Vue.use(Router)

var router = new Router({
  mode : 'history',
  routes: routes
});

router.beforeEach((to, from, next) => {
  document.title = `VueJS - ${to.name}`
  next()
})

export default router
