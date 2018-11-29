export default [
  {
    path: '/',
    name: 'index',
    component: (resolve) => require(['@/page/index'],resolve),
  },
  {
    path: '/list',
    name: 'list',
    component: (resolve) => require(['@/page/list'],resolve),//映射的组件
    meta:{title:'list'}
  }
]
