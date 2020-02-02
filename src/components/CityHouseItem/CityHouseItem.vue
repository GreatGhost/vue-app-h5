<template>
  <div class="CityHouseItem">
          <div class="img-wrapper">
            <img :src="info.thumbnail" alt="" class="house-img">
            <div class="area-tag">{{info.district}}</div>
          </div>
          <slot name="card-title"></slot>
          <slot name="house-name"></slot>
          <slot name="house-area"></slot>          
          <slot name="focus"></slot>
          <div class="price">{{info.price}}</div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    info:{
      type:Object,
      default(){
        return {}
      }
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
.CityHouseItem{
  width:2.1rem;
  .img-wrapper{
    position: relative;
    width:100%;
    img{
    display: block;
    width:100%;
    height:1.5rem;
    margin:0 auto;
    border-radius: .06rem;
    }
    .area-tag{
      position: absolute;
      right:.08rem;
      bottom:.08rem;
      padding:.06rem .08rem;
      background:#fff;
      font-size: .24rem;
      border-radius: .02rem;
      line-height: 1;
      font-weight: 700;
    }
  }
  .card-title{
    margin-top:.12rem;
    font-size:.26rem;
    line-height: .32rem;
    font-weight: 700;

  }
  .house-name{
     margin-top:.12rem;
    font-size:.26rem;
    line-height: .32rem;
    font-weight: 700;
  }
    .house-area{
     margin-top:.06rem;
    font-size:.24rem;
    line-height: .26rem;
    color:rgb(153, 153, 153);
  }
  .focus{
     margin-top:.06rem;
    font-size:.24rem;
    line-height: .26rem;
    color:rgb(153, 153, 153);
  }
  .price{
          font-size: .28rem;
          line-height: 1;
          color: #fa5741;
          font-weight: 700;
          margin-top: .12rem;
  }
}
</style>