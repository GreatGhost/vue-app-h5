<!--  -->
<template>
  <div class="input-item">
    <slot name="icon"></slot>
    <input
      class="input"
      :maxlength="input.max"
      :type="input.type"
      :placeholder="input.placeholder"
      :value="input.value"
      @input="inputChange($event,input)"
    />
    <slot name="code"></slot>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "input-item",
  components: {},
  props: {
    input: {
      type: Object,
      default: {}
    }
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    inputChange(e, item) {
      let value = e.target.value;
      Object.assign(item, { value: value });
      this.$emit("input", item);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.input-item {
  width: 100%;
  position: relative;
  display: flex;
  &::after {
    position: absolute;
    height: 1px;
    content: " ";
    bottom: 0;
    left: 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    width: 100%;
    background: #e4e6f0;
  }
  .input {
    flex: 1;
    width: 100%;
    display: block;
    height: 1.24rem;
    border: none;
    outline: none;
    font-size: 0.32rem;
    font-weight: 400;
    line-height: 1.24rem;
    input::-webkit-input-placeholder {
      color: rgba(204, 204, 204, 1);
    }
    &:focus {
      outline: none;
    }
  }
  .send-code {
    position: absolute;
    right: 0;
    width: 1.6rem;
    height: 1.24rem;
    top: 0;
    background: #fff;
    line-height: 1.24rem;
    color: #ccc;
    font-size: 0.32rem;
    &.enabled {
      color: #000;
    }
  }
}
</style>