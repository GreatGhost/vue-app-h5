<template>
  <div id="app">
    <router-view v-wechat-title='$route.meta.title' />
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
  }
</script>

<style>
@import url('./style/common.less');
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>