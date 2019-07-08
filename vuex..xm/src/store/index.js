// import Vue from 'vue'
// import Vuex from 'vuex';
// Vue.use(Vuex)
// import getters from './getters'
// import actions from './actions'
// import mutations from './mutations'
// import user from './moudel/user'
//     let state ={
//         username:'lili',
//     };
// export default new Vuex.Store({  
//         state,
//         getters,
//         actions,
//         mutations,
//         // moudels表示一个模块
//         moudels:{
//            user
//         }
// })



import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
let state = {
    carList:[]
}
if(localStorage&&localStorage['carList']){
    state.carList = JSON.parse(localStorage['carList'])
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    
})