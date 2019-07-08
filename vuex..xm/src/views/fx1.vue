<template>
  <div>
    vuex
    <span @click='modifyUsername'>修改名字</span>
    <span @click='changeName'>change修改名字</span>
    {{name}}
    {{username}}
    {{mname}}
    {{nameU}}
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["username"]),
    ...mapState("user", ["name"]),
    ...mapGetters({
      nameU: "rename"
    }),
    ...mapGetters("user", ["mname"])
    // mapState:({
    //     username:state=>state.username,
    //     name:state=>state.user.name
    // })
  },
  methods: {
    modifyUsername() {
      this.$store.commit("mname", "lili");
    },
    changeName() {
      this.$store.dispatch("change");
    }
  }
};
</script>
<style lang='less' scoped>
</style>
