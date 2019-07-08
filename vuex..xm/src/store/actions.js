// import {setuser} from '../api'
// import * as Types from './mutations-types'
// console.log(Types)
// // Types = {SET_USER:"SET_USER"}
// const actions ={
//     async modifyname({commit}){
//         let name = await setuser()
//         // console.log(Types.SET_USER)
//         commit(Types.SET_USER,name)
//     }
// }
// export default actions


  


import *as Types from'./mutations-types'
const actions = {
addCar({commit},payload){
commit(Types.ADD_CAR,payload)
},
addNum({commit},payload){
    commit(Types.CHANGE_ADDNUM,payload);
},
deleGood({commit,payload}){
    commit('deleGood',payload)
}
}
export default actions