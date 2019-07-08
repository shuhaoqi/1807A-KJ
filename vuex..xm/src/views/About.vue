<!--<template>
    <div>
        <ul>
            <li v-for="item in list" :key=item.id>
            <img:src="item.img" alt="">
            <p>{{item.name}}</p>
            <p>{{item.price}}</p>   
            <button @click="addCar(item)">提交到购物车</button>         
            </li>
        </ul>
    </div>
</template>
<script> 
import {getList} from '../api';
import {constants} from 'fs';
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
      let{code,data:{pagedata}}=await getList()
      this.list = pageData  
    },
    //添加到购物车
    addCar(good){
      this.$store.dispatch("addCar",good)
    }
  }
}
</script>
<style>
 li{
  list-style:none;
 }
</style> -->




<!--<template>
<div class="about">
 {{$store.state.count}}
 {{$store.getters.Num}}
<button class="btn"  @click="addcount">+</button>
</div>
</template>
<script>

export default {
  methods:{
    addcount(){
        //1提交increamens事件到 mutations
        this.$store.commit('increamens',{a:2,b:3})
    }
  }
}
</script>
<style lang="less" scoped>
   .about{
       font-size:60px;
   }
   .btn{
       display:inline-block;
       width:30px;
       height:30px;
       line-height:20px;
       background:aqua;
       appearance:none;
       outline:none;
       font-size:20px;
   }
</style>
-->
