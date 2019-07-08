<template>
    <div>
        <ul>
            <li v-for="item in list" :key=item.id>
                <img :src="item.img" alt="">
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
                <button @click="addCar(item)">添加到购物车</button>
            </li>
        </ul>
    </div>
</template>
<script>
import {getList}from'../api'
import {constants}from 'fs'
export default {
    data(){
        return {
            list:[]
        }
    },
   created(){
      this.getData()
   },  
   methods:{
     //获取数据
     async getData(){
      let{code,data:{pagedata}} = await getList()
      this.list=pagedata;
     },
     //添加到购物车
     addCar(good){ 
         this.$store.dispatch('addCar',good)
     }
   }  
}
</script>
<style>
li{
    list-style:none;
}
</style>




