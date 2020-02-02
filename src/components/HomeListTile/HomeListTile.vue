<template>
  <div class="HomeListTile">
          <div class="title">{{title}}</div>
          <div class="tip" v-if="tip">{{tip}}</div>
          <img src="https://s1.ljcdn.com/m-new/client/media/icon-more.73f42fda.svg" alt="" class="arrow">
  </div>
</template>

<script>
export default {
  components:{},
  props:{
      title:{
          type:String,  
      },
      tip:{
          type:String
      }
  },
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
.HomeListTile{
    display: flex;
    align-items: center;
    margin-bottom: .26rem;
    .title{
        font-size: .4rem;
        line-height: .44rem;
        font-weight: 700;
        flex:1;
    }
    .tip{
        font-size: .26rem;
        line-height: .28rem;
        font-weight: 400;
        color: #999;
    }
    .arrow{
        width:.16rem;
        height: .28rem;
        display: block;
        margin-left:.12rem;
    }
}
</style>