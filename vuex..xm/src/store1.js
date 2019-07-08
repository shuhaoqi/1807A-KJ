import Vue from 'vue';//68.18(gzipped:24)
import Vuex from 'vuex';//10.6k
import {setuser} from './api'
Vue.use(Vuex)
// default:默认导出
//strict：是否起用严格模式
export default new Vuex.Store({
    strict:process.env.NODE_ENV == 'development',
    state:{
        //初始化数据要在state
        username:null,
    },
    actions:{
      async getname({commit}){
        let username = await setuser()
        commit('getname',username)
      }
    },
    mutations:{
       getname(state,payload){
           state.username = payload
       }
    },
})

