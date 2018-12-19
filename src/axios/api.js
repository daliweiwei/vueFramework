/**
 * axios 基本配置
 * @type {number}
 */
import axios from 'axios'
import utils from '@utils/utils'
import stroe from '@store' //状态管理

 // axios.defaults.baseURL = 'https://api.example.com';
 // 解决同服务不同域名出现的跨域问题
 axios.defaults.baseURL = window.location.origin;
 axios.defaults.timeout = 15000;
 axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';



 // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


// 添加请求拦截器
axios.interceptors.request.use(config => {
    config.headers = {
        'Content-Type': 'application/json', // 设置很关键
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
        // "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
    }
    // console.log("请求信息封装前：" + JSON.stringify(config));
    // console.log("判断请求参数是否包含平台标识字段："+utils.isEmptyObj(config.data.platformFlag) );
    if (utils.isEmptyObj(config.data.platformFlag) ) {
        config.data.platformFlag = store.state.user.platform.key;
    }
    if (config.method === "post" || config.method === "put" || config.method === "delete") {
        if (config.url != "/auth/token") {
            config.data = {data: JSON.parse(JSON.stringify(config.data))};
        }
    }
    // console.log("请求信息封装后：" + JSON.stringify(config));
    /**
    * 请求时默认添加token
    */
    if (store.state.user.token) {
        config.headers.Authorization = localStorage.token;
    }

    // 在发送请求之前做些什么
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // console.log("返回信息：" + JSON.stringify(response));
    if(response.data.code == '000000'){
        console.log("------------------------Token已过期----------------------");
        //重置顶部导航
        //设置默认头部导航菜单
        //清除登录的token
        //清除当前角色对应的权限分配
        //页面跳转到首页
    }
    // 对响应数据做点什么
    return response;
}, error => {
    console.log(JSON.stringify(error));
    // if (error.response) {
    //     switch (error.response.status) {
    //         case 401:
    //             // 这里写清除token的代码
    //             router.replace({
    //                 path: 'login',
    //                 query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
    //             })
    //     }
    // }
    // 对响应错误做点什么
    return Promise.reject(error);
});

/**
 * 处理POST请求
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
 export function fetch(url,params){
    if(!params){
        params = {}
    }
    return new Promise((resolve,reject) => {
        axios.post(url,params)
        .then(response => {
            resolve(response.data)
        },err => {
            reject(err);
        })
        .catch((error) => {
            reject(error);
        })
    })
 }

 /**
 * 处理GET
 * @param url
 * @returns {Promise<any>}
 */

export function fetchGet(url,params){
    return new Promise((resolve,reject) => {
        axios.get(url,{params:params})
        .then(response => {
            resolve(response.data);
        },err => {
            reject(err);
        })
        .catch((error) => {
            reject(error);
        })
    })
}

let api = '/api';
export default {
    /**
     * 请求测试demo
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    getDemo: (id) => fetch(api + "/PAGE_10000", {id: id}),
}