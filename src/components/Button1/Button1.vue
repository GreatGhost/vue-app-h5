<template>
<!-- 公用按钮模板1 -->
  <div class="button1" :class="[disabled?'active':'']" @click="tap">{{title}}</div>
</template>

<script>
export default {
  components:{},
  props:['title','disabled'],
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
      tap(){
          this.$emit('tap');
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
.button1{
    width:6.7rem;
    height:1rem;
    margin:.48rem auto .4rem;
    background:#f2f2f2;
    line-height:1rem;
    font-size:.36rem;
    text-align:center;
    border-radius:.1rem;
    font-weight:700;
    color:#fff;
    &.active{
        background: #3072f6;
    }
}
</style>