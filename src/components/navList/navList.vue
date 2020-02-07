<template>
  <div class="navList">
      <ul class="list">
          <li class="nav-list-item" :class="[item.isSelect?'active':'']" v-for="(item,index) in list" :key="index">{{item.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
      list:{
          type:Array,
          default(){
              return []
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
.list{
    display: flex;
    align-items: center;
    li{
       position: relative;
       flex:1;
       height:.88rem;
       line-height: .88rem;
       font-size: .64rem;
       list-style-type:none;
       text-align: center;
       font-weight: 700;
    }
    li.active::after{
        position: absolute;
        bottom: 0;
        left:50%;
        height:.12rem;
        width:.64rem;
        background:#3072F6;
        border:.06rem;
    }
}
</style>