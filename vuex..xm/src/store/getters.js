// const gettres = {
//     mousername(state){
//         return state.username +'好学生'
//     }
// }
// //方法
// export default gettres
// // export default {}



export default {
    totalPrice(state){
          return  state.carList.reduce((prev,next)=>{
          return  prev+next.count*next.price
        },0)
    },
    checkAllValue(state){
        return state.carList.every(item=>item.sele==true)
    }
}