import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('./views/Home.vue')
    },
    {
      path: '/mapstate',
      name: 'mapstate',
      component: () => import('./views/mapState.vue'),
    },
    // {
    //   path:'/About',
    //   name:'About',
    //   component: () =>import('./views/About.vue')
    // },
    {
      path:'/mapActions',
      name:'mapActions',
      component: () =>import('./views/mapActions.vue')
    },
     {
      path:'/mapMutations',
      name:'mapMutations',
      component: () =>import('./views/mapMutations.vue')
    },
    {
      path:'/getuser',
      name:'getuser',
      component: () =>import('./views/getuser.vue')
    },
    {
      path:'/VuexSplit',
      name:'VuexSplit',
      component: () =>import('./views/VuexSplit.vue')
    },
    {
      path:'/List',
      name:'List',
      component: () =>import('./views/List.vue')
    },
    {
      path:'/Car',
      name:'Car',
      component: () =>import('./views/Car.vue')
    },
  //   {
  //     path: '/*',
  //     redirect: '/about'
  //  },
   {
    path: '/fx1',
    name: 'fx1',
    component: () =>import('./views/fx1.vue')
 },

  ]
})
