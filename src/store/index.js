/**
 * description：数据仓库
 * @author liweiliang
 * @create 2018-11-12 18:11
 */

import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import createMutationsSharer from 'vuex-shared-mutations';
import list from './list'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  modules: {
    list,
  },
  plugins: [
    vuexLocal.plugin,
    createMutationsSharer({
      predicate: (mutation, state) => {
        const predicate = ['mutation1', 'mutation2'];
        return predicate.indexOf(mutation.type) >= 0;
      },
    }),
  ]

})
