<template>
  <div id="app">
<mt-button size="small">small</mt-button>
  </div>
</template>

<script>
import { Button } from 'mint-ui';
import Vue from 'vue';
Vue.component(Button.name, Button);
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
