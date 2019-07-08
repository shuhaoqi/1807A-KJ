<template>
  <div id="app">
    <div id="nav">
       <router-link to="/List">List</router-link>
        <router-link to="/Car">Car</router-link> 
        <router-link to="/fx1">fx1</router-link>
        <!-- <router-link to="/Home">Home</router-link> 
      <router-link to="/About">About</router-link> 
      <router-link to="/mapstate">mapState</router-link> 
      <router-link to="/mapactions">mapactions</router-link> 
      <router-link to="/mapMutations">mapMutations</router-link> 
      <router-link to="/getuser">getuser</router-link>
       <router-link to="/VuexSplit">Vuex拆分</router-link> -->
    </div> 
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
