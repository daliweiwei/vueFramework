import Vue from 'vue'
import Router from 'vue-router'


import home from './home'
// 错误页面
import error from './error'

Vue.use(Router)

export default new Router({
  mode: 'history',// 使用 HTML5 的 History 路由模式，通过‘/’设置路径
  routes: [
    ...home,
    ...error
  ]
})
