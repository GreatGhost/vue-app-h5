<template>
  <div id="app">
    <Title />
    <router-view/>
  </div>
</template>

<script>
  import Title from './components/title/title';

  export default {
    name: 'app',
    components: {
      Title
    },
    created(){
      console.log(this);
    }
  }
</script>

<style>
@import url('./style/common.less');

</style>