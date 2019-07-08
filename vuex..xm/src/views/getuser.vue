<template>
    <div>
        <span>{{username}}</span>
        <button @click="getuser">获取用户名</button>
    </div>
</template>

<script>
 import {mapState} from 'vuex'

    export default {
        computed:{
             ...mapState(['username'])
            
        },
        methods:{
            getuser(){
                 this.$store.dispatch('getname')
            }
        }
    }
</script>
