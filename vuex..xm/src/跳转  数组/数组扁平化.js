// <!-- 数组扁平化 用一个空数组把每一项放入 如果这个项是数组的话继续拆分成单个的在放入

let ary = [1, 2, 3, [3, 4], [2, 4]]
let res = [].concat.apply([],ary)
let res1 = [].concat(...ary)
console.log(res1)
function flatary(ary) {
    //定义一个空数组
    let newary = [];
    for (let i = 0; i < ary.length; i++) {
        if (Array.isArray(ary[i])) {
            newary = [...newary, ...flatary(ary[i])]
        } else {
            newary.push(ary[i])
        }
        return newary
    }
}

console.log(flatary(ary))

// reduce
let res2 = ary.reduce((prev, next, index, ary) => {
    return prev.concat(next)
}, [])
console.log(res2)

//封装map、reduce方法
let ary3 = [1, 2, 4]
Array.prototype.myreduce = function (cb, prev) {
    for (let i=0; i<this.length;i++){
        if(!prev) {
            prev = cb(this[i],this[i+1],i,this)
        }else{
            prev =cb(prev,this[i],this[i+1],this)
        }
    }
    return prev
}

let result = ary3.reduce((prev, next) => {
    return prev.concat(next)
},[])
console.log(result)



//实现数组扁平化 map
let arr = [1,2,3,[4,5,[6,3]]]
Array.prototype.map = function(cb){
    var arr1=[];
    for(var i=0;i<this.length;i++){
        arr1.push(cb(this[i],i));
    }
     return arr1;
}
var res4 = arr.map(function(item,index){
    return item*1;
})
console.log(res4)