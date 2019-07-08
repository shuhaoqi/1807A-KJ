<template>
  <div class="Home">
    {{$store.state.number}}
<button class="btn" @click="AddCount">+</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods:{
    AddCount(){
       //通过diapatch派发事件到actions
       this.$store.dispatch('ActionsAdd',10)
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