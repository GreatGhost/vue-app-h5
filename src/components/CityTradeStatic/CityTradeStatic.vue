<template>
  <div class="CityTradeStatic">
      <div class="static-item">
          <div class="tip">杭州二手房均价</div>
          <div class="value">29,181</div>
          <div class="unit">元/平</div>
      </div>
      <div class="static-item">
          <div class="tip">近90日成交</div>
          <div class="value">4531</div>
          <div class="unit">套</div>
      </div>
      <img src="https://s1.ljcdn.com/m-new/client/media/icon-more.b04b76e5.svg" alt="" class="arrow">
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="less" scoped>
.CityTradeStatic{
    display:flex;
    align-items:center;
    margin-top:.44rem;
    background-image:url('https://s1.ljcdn.com/m-new/client/media/bg.ad0ac08c.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    .static-item{
        flex:1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .tip{
            width:100%;
            font-size: .24rem;
            font-weight: 700;
            line-height: 1;
        }
        .value{
            font-size: .60rem;
            line-height: .72rem;
            font-weight: 900;

        }
        .unit{
            margin-left:.08rem;
            font-size: .36rem;
            line-height: .4rem;
        }
    }
}
</style>