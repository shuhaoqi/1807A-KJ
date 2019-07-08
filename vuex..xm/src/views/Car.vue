
冯凯 2019/5/22 11:39:24
<template>
  <div class="container">
    <!-- <HeadTitle>购物车页面</HeadTitle> -->
    <div>
      <label for="checkAll">
        <span>全选</span>
        <input type="checkbox"
               class="inp"
               id="checkAll"
               v-model="checkAll">
      </label>
    </div>
    <div>总价：{{totalPrice}}</div>
    <ul class="carList-con">
      <li v-for="good in carlist"
          :key="good.id">
        <input type="checkbox"
               class="inp"
               id="inp"
               v-model="good.sele"
               @change="modiGood({good:good})">
        <div>
          <img :src="good.img"
               alt>
          <p>{{good.count}}</p>
          <p>{{good.name}}</p>
          <p>{{good.price}}</p>
          <p>
            <span @click="modiGood({good:good,num:1})">+</span>
            {{good.count}}
            <span @click="modiGood({good:good,num:-1})">-</span>
          </p>
          <button @click.stop="deleGood(good)"
                  class="btn">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import * as Types from "../store/mutations-types";
// import { deleCarGood, changeCount } from '../api';
export default {
  computed: {
    ...mapState(["carlist"]),
    ...mapGetters(["totalPrice", "checkAllValue"]),
    checkAll: {
      get() {
        return this.checkAllValue;
      },
      set(val) {
        this[Types.CHANGE_CHECKALL](val);
      }
    }
  },
  methods: {
    deleGood(payload) {
      this.$store.commit("deleGood", payload);
      // this.carlist=this.carlist.filter(item=>item.id!=good.id)
    },
    modiGood(payload) {
      this.$store.dispatch("modiGood", payload);
    },
    ...mapMutations([Types.CHANGE_CHECKALL])
    //参数改变事件
  }
};
</script>
<style lang='less' scoped>
li {
  list-style: none;
}
.inp {
  appearance: none;
  width: 40px;
  height: 40px;
  border: 1px solid green;
  border-radius: 50%;
  position: relative;
}
.inp:checked.inp:before {
  position: absolute;
  content: "√";
  width: 20px;
  height: 20px;
  top: 15px;
  left: 15px;
  color: green;
}
.carlist-con {
  li {
    padding: 0px 10px;
    display: flex;
    .inp {
      align-self: center;
    }
    div {
      padding-left: 10px;
    }
  }
}
</style>
