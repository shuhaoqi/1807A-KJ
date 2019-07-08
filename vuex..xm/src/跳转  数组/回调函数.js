//回调函数作为参数 预置参数

// 2.函数定率
function after(count,cb){
    //每用一次数量-1
    let ary = []
    return function(data){
        ary.push(data)
        if(--count==0){
            cb(ary)
        }
    }
}

est = after(2,function(){
    console.log('吃完了')
})
est('1')
est('2')