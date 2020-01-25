<template>
  <div id="app">
<!--     //进入时所用的动画为bounceInRight
    //离开时所用的动画为lightSpeedOut
     //进入时，所需的时间animated -->
    <transition name="fade"  
    enter-active-class="animated fadeIn"   
    leave-active-class="animated fadeOut" >
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
    watch:{
      $route: {
        immediate: true,
        handler(to, from) {
          const toDepth = to.path.split("/").length;
          const fromDepth = from.path.split("/").length;
          if (to.path == "/") {
            this.direction = "bounceInRight";
          } else if (from.path == "/") {
            this.direction = "bounceInLeft";
          } else {
            this.direction = toDepth < fromDepth ? "bounceInRight" : "bounceInLeft";
          }
        }
      }
    }
  }
</script>

<style>
  @import url('./style/common.less');
  @import url('./style/animate.css');
  .appView {
    position: absolute;
    width: 100%;
    transition: transform 0.3s ease-out;
  }

  .slide-left-enter {
    transform: translate(100%, 0);
  }

  .slide-left-leave-active {
    transform: translate(-100%, 0);
  }

  .slide-right-enter {
    transform: translate(-100%, 0);
  }

  .slide-right-leave-active {
    transform: translate(100%, 0);
  }
</style>