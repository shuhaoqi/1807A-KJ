let express = require('express');
let app = express();
let path = require('path');
let cors = require('cors');

// let cors = require('cors')//5.2
// //中间件都用use来使用  中间
 app.use(cors())
let bodyParse = require('body-parser')
app.use(bodyParse.urlencoded(
{extended:false}))
app.use(bodyParse.json())
//使用public下面的静态文件
//app.use(express.static(public))
// __dirname :绝对路径
// path.join和path.resolve 是拼接路径用的
//访问静态路径的时候需要加速static路径
 app.use('/static',express.static(path.join(__dirname,'public')))
//所有的都会先走use 这里面的req，res和下面的req,res都一样相当于一个拦截器 中间里面必须调用next才会继续往下走
app.use(function(req,res){
    res.header('Content-type','charset=utf-8;text/plain');
    next()
})
let fs  = require('fs')
let fsPromise = fs.promises;
function readjosn(path){
 return fsPromise.readFile(path,'utf8').then(data=>{
    return JSON.parse(data) 
 })
}
function writejson(path,data){
  return fsPromise.writeFile(path,JSON.stringify(data),'utf8')
}
// // 引入轮播图数组
let banner = require('./banner')
app.get('/slider',function(req,res){
    res.json({
        code:200,
        data:banner
    })
})
app.get('/hot',function(req,res){
    readjosn('./good.json').then(data=>{
        let hotdata = data.slice(0,6)
        res.json({
            code:200,
            data:hotdata
        })
    })
})
//   req.query 可以直接查询到字符串的值
app.get('/list',function(req,res){
    let page = parseInt(req.query.page)
    readjosn('./good.json').then(data=>{
        let maxlength = (page+1)*5;
        let pageData = data.slice(maxlength-5,maxlength)
        let hasMore = maxlength>=data.length?false:true
        res.json({
          code:200,
          data:{
            hasMore,
            pageData
          }
        })
    })
})
app.get('/detail',function(req,res){
    let id = req.query.id
    readjosn('./good.json').then(data=>{
      let single = data.find(item=>item.id==id)
      if(!single){
        res.json({
           code:201,
           data:{}
        })
        return
      }
      res.json({
       code:200,
       data:single
      })
    })
})
app.get('/carlist',function(req,res){
    readjosn('car.json').then(data=>{
      res.json({
        code:200,
        data:""
      })
    })
})

// 可以通过req.body 拿到post/get 等有请求体 请求的参数
//添加商品的购物车请求
app.post('/addcar',function(req,res){
    console.log(req.body)
    let adData = req.body;
    if(!adData.id && (adData.id!=0&&!adData.name)){
      res.json({
        //判断传进来的参数是否为空
        code:201,
        msg:'参数错误'
      })
    return
  }
    readjosn('./car.json').then(data=>{
      console.log(data)
      let newDate;
      //看购物车有没有这条数据，有的话数量加一，没有的话数量为一
      let singledata = data.find(item=>item.id==adData.id)
      if(singledata){
        singledata.count++;
        newDate=[...data]
      }else{
        adData.count=1;
        newDate=[...data,adData]
      }
      //最后把数据写到my.json中
      writejson('./car.json',newDate).then(data=>{
        res.json({
          code:200,
          msg:'添加成功'
        })
      })
      })
    })
//删除购物车商品
app.delete('/delegood',function(req,res){
  let adData = req.body;
  readjosn('./car.json').then(carList=>{
    let newData = carList.filter(item=>item.id!=id);
    writeJson('./car.json',newDate).then(()=>{
      res.json({
        code:200,
        data:{}
      })
    })
  })
})

//购物车改变数量是否滚动
app.post('/changecount',(req,res)=>{
  let adData = req.body;
  //拿着购物车所有的数据
  readjosn('./car.json').then(carList=>{
    console.log(carList)
    let newCarList =carList.map(item=>{
      //如果id相等 证明是被修改项 返回修改项  否则直接返回原有数据
      if(modifyData.id==item.id){
        return modifyData
      }
      return item
    })
    writejson('./car.json',newCarList).then(()=>{
      res.json({
        code:200,
        data:'修改成功'
      })
    })
  })
})
// http://localhost:8080
app.listen(3000)//监听端口