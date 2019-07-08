import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import user from '../store fx1/moudle/user'
const state = {
  username: 'lild'
}
export default new Vuex.Store({
  // strict:ProcessingInstruction.env.NODE_ENV=='development',//只是给开发人员看的 严格模式下 state不用mutations修改会报错

  state,
  modules: {
    user
  },
  getters: {
    rename(state) {
      return state.username.toUpperCase()
    }
  },
  mutations: {
    mchange(state, payload) {
      state.username = payload
    },
    mname(state, payload) {
      //一般mutations只用来修改state状态
      state.username = payload
    }
  },
  actions: {
    change({ commit }) {
      //actions可以多次提交
      setTimeout(() => {
        commit('mchange', '第一次的名字')
      }, 1000)
      setTimeout(() => {
        commit('mchange', '第二次的名字')
      }, 10000)
    }
  }
})
