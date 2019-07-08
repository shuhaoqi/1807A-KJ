// import * as Types from './mutations-types'
// // Types = {SET_USER:"SET_USER"}
// // [Types.SET_USER]()
// const mutations = {
//     [Types.SET_USER](state,payload){
//         state.username = payload
//     }
// }
// export default mutations




import Vue from 'vue';
import * as Types from './mutations-types';

export default {
    //改变全选
    [Types.CHANGE_CHECKALL](state,payload){
        //每一项的选择值等于全选的选择值
       state.carList.forEach(item=>{
           item.sele=payload
       })
       state.carList=[...state.carList]
    },


//加减数量
[Types.ADD_CAR](state,payload){
    // state.carList = [...state.carList,payload]
    //判断购物车里面有没有这个商品没有的话数量等于1有的话原来的数量上加1
    let good = state.carList.find(item=>item.id==payload.id)
    if(good){
        //把添加进去购物车的变成选动状态
        Vue.set(payload,'sele',true)
        good.count +=1;
        //修改vuex里面的数据必须手动更新
       state.carList=[...state.carList]
    }else{
        payload.count =1;
        //如果没有这个商品 把添加的商品放到购物车里面
        // Vue.set(payload,'sele',true)
        state.carList =[...state.carList,payload]
    }
    //在缓存里面定义一个列表并存放
    localStorage['carList']=JSON.stringify(state.carList)
},

//
[Types.CHANGE_ADDNUM](state,payload){
    let {good,num}=payload
    let newlist=state.carList.find(item=>item.id==good.id)
    if(num){
        newlist.count+=num;
        if(newlist.count<=1){
            newlist.count=1
        }
    }
},

// //删除
deleGood(state,payload){
    let good=payload.id
    console.log(good)
   state.carList.splice(item=>item.id!=good.id,1)
   state.carList.filter(item=>item.id!=good.id)
   localStorage['carList']=JSON.stringify(state.carList)

}
}
//  export default mutations
