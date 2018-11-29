/**
 * @description：列表
 * @author liweiliang
 * @create 2018-11-12 18:11
 **/

 /**
 * [状态对象]
 * @type {Object}
 */

 const state = {
   addlist:[]
 }

/**
 * [修改状态]
 * @type {Object}
 */

const mutations = {
  setAddlist:(state,data)=> state.addlist = data,
}

/**
 * [异步修改状态]
 * @type {Object}
 */

const actions = {

}

/**
 * [过滤操作]
 * @type {Object}
 */

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}
