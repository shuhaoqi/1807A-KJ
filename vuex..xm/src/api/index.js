// export let setuser = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('mingming');
//     })
// }

//Vuex购物车
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3330'
//获取列表接口
//响影拦截器
axios.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    Promise.reject(err)
  }
)

export let getList = () => {
  return axios.get('/list?page=0')
}
export let changeCount = good => {
  return axios.put('/changecount', good)
}
// export let setuser = () => {
// return new Promise((resolve,reject)=> {
// resolve('lele')
// })
// }
