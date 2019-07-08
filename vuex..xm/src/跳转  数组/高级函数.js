//1.函数里面返回函数   2.回调函数作为参数
// 两个箭头级以上的叫做高级函数
// typeof constroctor instanceof Object.prototype.tostring.call

//1.函数里面的函数 会写
function _toString(str){
    return Object.prototype.toString.call(str).slice(8,-1)
}
// function istype(str){
//     return function(str){
//         return _toString(str)==type
//     }
// }
let istype=type=>str=>_toString(str)==type;

let util ={}
let type = ['String','Array','Object','Number','Null']
type.forEach(method=>{
        util[`is${method}`] = istype(method);
})   
console.log(util.isArray([]))
console.log(util.isString([]))

