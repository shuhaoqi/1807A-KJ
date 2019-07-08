<template>
  <div class="mapActions">
    {{$store.state.number}}
<button class="btn" @click="ActionsAdd(10)">+</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'mapActions',
  methods:{
      ...mapActions(['ActionsAdd']),
    AddCount(){
        this.ActionsAdd(10)
       //通过diapatch派发事件到actions
    //    this.$store.dispatch('ActionsAdd',10)
    }
}
};
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
