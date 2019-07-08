import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store fx1/index';
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
//elem