// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import Liang from './utils/liang'
import ElementUI from 'element-ui'
Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.use('Vuex');
Vue.use('Liang');
Vue.use('ElementUI');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
