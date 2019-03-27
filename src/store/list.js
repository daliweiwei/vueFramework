/**
 * @description：列表
 * @author liweiliang
 * @create 2018-11-12 18:11
 **/

 /**
 * [状态对象]
 * @type {Object}
 */
import api from '@/axios/api'
import { Message } from 'element-ui';
 const state = {
   count: 0,
   addlist:[]
 }

/**
 * [修改状态]
 * @type {Object}
 */

const mutations = {
  setAddlist:(state,data)=> state.addlist = data,
  increment(state) {
    state.count += 1;
  },
  decrement(state) {
    state.count -= 1;
  },
}

/**
 * [异步修改状态]
 * @type {Object}
 */

const actions = {
    getTest(context,params){
      Message.error('getTest')
    },
    getDemo(context,params){
        api.getDemo(params).then(data => {
            if(data.code == '000000'){
                console.log(data.result);
            }else{
                console.log(JSON.stringify(data));
            }
        }).catch(error => {
            console.log(JSON.stringify(error));
        })
    }
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
