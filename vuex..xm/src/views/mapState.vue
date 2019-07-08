<template>
     <div class="about">
         <!-- mapstate和mapGeters的用法 -->
         {{count}}
         {{username}}
         <!-- {{Num}} -->
         {{abc}}
     </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex';
import {constants} from 'fs';
export default {
    computed:{
        ...mapState(['count','username']),
        ...mapGetters({
            abc:'Num'
        }),
        ...mapGetters(['Num'])
        //...mapState({
            // count:state=>state.count
        // }),
    },
    created(){
        console.log(this.count)
    },
}
</script>
<style lang="less" scoped>
   .about{
     font-size: 60px;
   }
  .btn{
     display:inline-block;
     width:30px;
     height:30px;
     line-height: 20px;
     background: aqua ;
     appearance: none;
     outline: none;
     font-size: 20px;
     
  }
</style>




