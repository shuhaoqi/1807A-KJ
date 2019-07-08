<template>
    <div>
        <!-- <span>state里面的名字:{{username}}</span><br> -->
        <!-- <span>getters里面的名字:{{mousername}}</span><br> -->
        <!-- <span @click="modifyUser">点击修改名字</span><br> -->
        <span>
            123{{name}}
            {{rename}}
        </span>
        <span @click="setname">模块改名</span>    


    </div>
</template>
<script>
// createNamespacedHelpers：创建基于某个命名空间辅助函数
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapGetters,mapActions } = createNamespacedHelpers('user')
// import {mapState,mapGetters,mapActions} from 'vuex'
export default {
    computed:{
            //  ...mapState(['username']),
             ...mapState('name'),
             ...mapGrtters('rename'),
            // ...mapGetters(['mousername'])
    },
    methods:{
            // ...mapActions(['modifyname']),
            modifyUser(){
                // this.modifyname()
            }
            // this.$store.dispatch('modifyname')
        
    }
}
</script>