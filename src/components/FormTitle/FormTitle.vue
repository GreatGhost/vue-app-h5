<template>
  <div class="form-title">
     <div class="title">{{title}}</div> 
  </div>
</template>

<script>
export default {
  components:{},
  props:{
      title:{
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
.form-title{
    font-size:.56rem;
    line-height:1;
    margin-bottom:.24rem;
    font-weight:700;
    font-family:'Microsoft YaHei';
}
</style>