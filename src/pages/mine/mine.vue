<!--  -->
<template>
  <div class='mine'>
    <!-- 头部信息 -->
    <div class="login-user-info">
      <img :src="loginDefaultIcon" alt="" class="user-icon">
      <div class="login-mobile" v-if="userInfo">欢迎您，{{userInfo.account|formatMobile}}</div>
      <div class="no-login-wrapper" v-if="!userInfo">
        <router-link :to="{path:'/login'}" class="btn" tag="div">登录</router-link>
        <router-link :to="{path:'/register'}" class="btn" tag="div">注册</router-link>
      </div>
    </div>
    <!-- tab导航栏 -->
    <div class="mine-tab-list">
      <div class="mine-tab-item" v-for="(item,index) in mineTabList" :key="index">
        <div :class="[item.icon]" alt="" class="icon"></div>
        <div class="title">{{item.name}}</div>
        <div class="arrow"></div>
      </div>
    </div>

    <!--退出登录按钮  -->
    <div class="login-out" @click="loginOut" v-if="userInfo" >退出登录</div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
import { MessageBox } from 'mint-ui';
import localStorage from '../../util/localStorage';
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
        mineTabList: [{
            name: '我关注的房源',
            imgSrc: require('../../images/mine-tab-icon.png'),
            icon: 'fy'
          },
          {
            name: '我关注的小区',
            imgSrc: require('../../images/mine-tab-icon.png'),
            icon: 'xq'
          },
          {
            name: '我关注的新房',
            imgSrc: require('../../images/mine-tab-icon.png'),
            icon: 'xf'
          },
          {
            name: '我关注的租房',
            imgSrc: require('../../images/mine-tab-icon.png'),
            icon: 'zf'
          },
          {
            name: '我的租房优惠券',
            imgSrc: require('../../images/mine-tab-icon.png'),
            icon: 'yhq'
          }
        ],
        loginDefaultIcon: require("../../images/mine_head.png")
      }
    },
    //监听属性 类似于data概念
    computed: {
      userInfo: {
        get() {
          return this.$store.state.userInfo;
        }
      }
    },
    filters: {
      /* 格式化时间戳 */
      formatDate(val) {
        const date = new Date(val);
        const year = date.getFullYear();
        const month = date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
        const day = date.getDate() > 9 ? date.getDate() + 1 : `0${date.getDate() + 1}`;
        return `${year}-${month}-${day}`;
      }
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      loginOut(){
        let that=this;
        MessageBox.confirm('确定退出登录?').then(action => {
          that.$util.removeStore(localStorage.loginUserInfo);
          that.$store.commit('setUserInfo')
          that.$router.replace({
            path:'/login'
          })
      });
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      console.log(this.$store)
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
  .mine {
    background: #F8F8F9;
    .login-user-info {
      padding-top: .8rem;
      padding-bottom: 0.96rem;
      box-sizing: border-box;
      background: #4371fb;
      .no-login-wrapper{
        margin-top:.36rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn{
            width:1.76rem;
            height:.72rem;
            text-align: center;
            font-size: .32rem;
            line-height: .72rem;
            color:#fff;
            border-radius: 2px;
            border: 1px solid #fff;
        }
        .btn:nth-child(2){
          margin-left:.09rem;
        }
      }
      .user-icon {
        display: block;
        width: 1.08rem;
        height: 1.08rem;
        margin: 0 auto;
      }

      .login-mobile {
        margin-top: .36rem;
        color: #fff;
        font-size: .32rem;
        line-height: .42rem;
        text-align: center;
      }
    }

    .mine-tab-list {
      margin-top: .25rem;
      background-color: #fff;
      border-top: 1px solid #E4E6F0;
     

      .mine-tab-item {
        display: flex;
        align-items: center;
        height: 1.02rem;
        border-bottom: 1px solid #E4E6F0;
        .icon {
          width: .32rem;
          height: .32rem;
          margin-right: .3rem;
          margin-left: .3rem;
          background-image: url('../../images/mine-tab-icon.png');
          background-repeat: no-repeat;
          background-size: cover;
          &.fy{
            background-position: 0 0;
          }
          &.xq{
             background-position: 0 -.32rem;
          }
          &.xf{
            background-position: 0 -.66rem;
          }
          &.zf{
            background-position: 0 0;
          }
          &.yhq{
             background-image: url('../../images/mine-tab-yhq.png');
          }
        }

        .title {
          flex: 1;
          font-size: .28rem;
        }

        .arrow {
          margin-right:.8rem;
        }
        
      }
      .mine-tab-item:last-child{
        border-bottom: none;
      }
    }
    .login-out{
      background:#fff;
      height: .8rem;
      width:7.08rem;
      margin:.56rem auto 0;
      border:1px solid #c5c5c5;
      box-sizing: border-box;
      font-size: .28rem;
      text-align:center;
      line-height: .8rem;
    }
  }
</style>