<template>
  <div id="app">
    <!--     //进入时所用的动画为bounceInRight
    //离开时所用的动画为lightSpeedOut
     //进入时，所需的时间animated -->
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {

    },
    data() {
      return {
        direction: 'slide-right'
      }
    },
    created() {
      console.log(this);
    },
    watch: {
    }
  }
</script>

<style >
  @import url('./style/common.less');
  @import url('./style/animate.css');
  .fade-enter{
    opacity:0;
  }
  .fade-enter-active{
    transition:opacity .5s;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-leave-active{
    transition:opacity .5s;
  }


</style>