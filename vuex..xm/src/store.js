import Vue from 'vue';//68.18(gzipped:24)
import Vuex from 'vuex';//10.6k
Vue.use(Vuex)
// default:默认导出
//strict：是否起用严格模式

export default new Vuex.Store({
    // strict:process.env.NODE_ENV == 'development',
    state:{
        count:1,
        number: 2,
        username:'lili'
    },
    getters:{
        Num(state){
            return state.count+'abc'
        }
    },
    mutations:{
        //定义和commit提交过来的事件同名的函数increamens
        increamens(state,payload){
            //通过函数修改state
            //  payload ={a:2,b:3}
            // let {a,b} = payload
            state.count = state.count + payload.a + payload.b
            // console.log(state.count);
        },
        toMuAdd(state,payload){
        //commit('toMuAdd') 定义actions里面commit传递过来的同名的函数
            state.number+=payload;
        }
    },
    actions:{
        // this.$store.dispatch('ActionsAdd')
        //定义和dispatch传递过来的事件同名的函数
        ActionsAdd({commit},payload){
            //提交事件到mutations
            setTimeout(()=>{
                commit('toMuAdd',payload)
            },1000)
        }

    }
})