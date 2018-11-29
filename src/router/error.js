export default [
  {
    path: '/404',
    name: '404',
    component: (resolve) => require(['@/page/404'], resolve),
    meta: {
      title: '页面不存在',
      auth: false
    }
  },
  //访问的路径不存在时，重定向到首页。
  {
    path: '*',
    redirect: '/index'
  }
]
