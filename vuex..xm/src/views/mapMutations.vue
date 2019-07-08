<template>
<div class="mapMatutions">
 {{$store.state.count}}
 {{$store.getters.Num}}
<button class="btn" @click="addcount">+</button>
</div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  methods:{
      ...mapMutations(['increamens']),
    addcount(){
        this['increamens']({a:2,b:3})
        
        //1提交increamens事件到 mutations
        // this.$store.commit('increamens',{a:2,b:3})
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