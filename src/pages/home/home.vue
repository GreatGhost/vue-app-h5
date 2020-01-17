<!--  -->
<template>
<div class='' ref='home'>
     <button @click="handleOpen1">打开提示 2</button>
     <div class="demo" v-if="show" ref="demo">111</div>
     <button class="btn" @click="tapShowDemo">单机</button>
      <InputNumber :value="0" @add="handleAdd"></InputNumber>
     <Render />
     <div class="home-swiper">
       <div class="home-swiper-item" v-for="(item,index) in homeSwiper" :key="index">{{item}}</div>
     </div>
     <div class="reduce-swiper" @click="reduceSwiper">改变swiper</div>
     <div class="reduce-swiper" @click="addSwiper">增加swiper</div>
      <div class="add-number" @click="increment">怎加store</div>
      <div class="number">{{orderListAlias}}</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {getUser} from '../../http/service';
import Render from '../../components/render/render';
import InputNumber from '../../components/inputNumber/inputNumber'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
//import引入的组件需要注入到对象中才能使用
components: {Render,InputNumber},
data() {
//这里存放数据
return {
  show:false,
  homeSwiper:[1,2,3,4]
};
},
//监听属性 类似于data概念
computed: {
   // 模块名（嵌套层级要写清楚）例如：m
    // 获取state值
    ...mapState('m', {
      orderListAlias: state => state.count
    }),
    ...mapState('authority', {
      orderListAlias1: state => state.count
    }),
    // 通过getters获取值
    ...mapGetters('m', [
      'doubleCountm'
    ]),
    ...mapGetters('authority', [
      'doubleCount'
    ])
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  ...mapMutations('m', [
      'increment' // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ]),
    ...mapMutations('authority', {
      incrementa: 'increment'
    }),
    ...mapActions('m', [
      'incrementIfOddOnRootSum' // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ]),
    ...mapActions('authority', {
      incrementIfOddOnRootSuma: 'incrementIfOddOnRootSum'
    }),
      handleOpen1 () {
        this.$Alert.info({
          content: '我是提示信息 1'
        });
      },
      tapShowDemo(){
        this.show=!this.show;
        console.log(this.show);
        console.log(this.$refs)
        this.$nextTick(()=>{
          console.log(this.$refs);
        })
      },
      handleAdd(e){
      },
      reduceSwiper(){
          let homeSwiper=this.homeSwiper;
          this.$set(homeSwiper,1,'王者')
        },
        addSwiper(){
          
        }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  console.log(this.orderListAlias)
    console.log(this.orderListAlias1)
    console.log(this.doubleCount)
    console.log(this.doubleCountm)
    this.increment()
    console.log(this.orderListAlias)
    this.incrementa()
    console.log(this.orderListAlias1)
    this.incrementIfOddOnRootSum()
    console.log(this.orderListAlias)
    this.incrementIfOddOnRootSuma()
    console.log(this.orderListAlias1)
getUser().then(res=>{
    console.log(res)
})
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>