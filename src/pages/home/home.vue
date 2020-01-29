<!--  -->
<template>
  <div class='home' ref='home'>
    <!-- 企业icon 推荐安装app -->
    <div class="logo-wrapper">
      <img :src="logoSrc" alt="" class="logo">
      <div class="title">贝壳找房APP</div>
      <div class="open-app" v-on:click="openApp()">立即打开</div>
    </div>

    <!-- 当前查询城市 -->
    <CitySearchInput :city="currentCity" />


    <div class="home-page-content">
      <!-- 首页菜单 -->
      <div class="home-tab-list">
        <div class="home-tab-item" v-for="(item,index) in homeTabList" :key="index">
          <img v-lazy="item.icon" alt="" class="icon">
          <div class="tab-name">{{item.name}}</div>
        </div>
      </div>

      <!--首页二手房统计  -->
      <CityTradeStatic />
    </div>

  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import CitySearchInput from '../../components/citySearchInput/citySearchInput'
  import CityTradeStatic from '../../components/CityTradeStatic/CityTradeStatic'
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      CitySearchInput,
      CityTradeStatic
    },
    data() {
      //这里存放数据
      return {
        logoSrc: require('../../images/logo.png'),
        currentCity: {
          value: '杭州',
          placeholder: "你想往哪里走"
        },
        homeTabList: [{
            name: '二手房',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/d5592269bafbe134453afb01c5612658.png',
            path: '/'
          },
          {
            name: '新房',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/44b50fa3627b67a9102c82f96ebd9189.png',
            path: ''
          },
          {
            name: '租房',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/94250adc5e77f9b816f77032e27a8412.png',
            path: ''
          },
          {
            name: '商铺办公',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/404dfdc61f6295aab8300b71d627f571.png',
            path: ''
          },
          {
            name: '海外',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/d10df2594bba41993ad72a7618c5727d.png',
            path: ''
          },
          {
            name: '卖房',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/da1b0d0441597bd3d4fbd7c1899fa375.png',
            path: ''
          },
          {
            name: '找小区',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/a256a8f09470ed9ff77af5bbc50575cb.png',
            path: ''
          },
          {
            name: '查成交',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/62362ec390caa911b21e6f005e901399.png',
            path: ''
          },
          {
            name: '查房价',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/7211c3c0e5036c83be477eac4e2ba5aa.png',
            path: ''
          },
          {
            name: '去估价',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/1db775dad6b0200211426c1737f74e7c.png',
            path: ''
          },
          {
            name: '找经纪人',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/d95c1eaa728a7ed1cfed4bfaad233588.png',
            path: ''
          },
                    {
            name: '问答',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/713ebe3ccb3ff470baf357c67e922d5a.png',
            path: ''
          },
                    {
            name: '百科',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/27a471a22d806eb260639eca4548df8c.png',
            path: ''
          },
                    {
            name: '客服电话',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/3f906230888f3a617ef4686bc688fb9c.png',
            path: ''
          },
                    {
            name: '货贷计算',
            icon: 'https://ke-image.ljcdn.com/materials/appindexconf/e4f36dec85bb18ef1af55db70e9ce326.png',
            path: ''
          }
        ]
      };
    },
    //监听属性 类似于data概念
    computed: {

    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      test() {
        console.log('打发')
      },
      openApp() {
        //window.location.href = 'https://linkm.ke.com/?schema=lianjiabeike%253A%252F%252Fershoufang%252Fhome%253FcityID%253D330100&redirect_url=https%253A%252F%252Fitunes.apple.com%252Fcn%252Fapp%252F%25E8%25B4%259D%25E5%25A3%25B3%25E6%2589%25BE%25E6%2588%25BF-%25E4%25BA%258C%25E6%2589%258B%25E6%2596%25B0%25E6%2588%25BF%25E7%25A7%259F%25E6%2588%25BF%25E6%2589%25BE%25E6%2588%25BF%25E5%25A4%25A7%25E5%25B9%25B3%25E5%258F%25B0%252Fid1347663353%253Fl%253Dzh%2526ls%253D1%2526mt%253D8&ssid=&uuid=&refer=&ucid=&current_url=&sign=57f19c45987015881d2c151d82c1adb2'
        var u = navigator.userAgent;
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (ua.match(/MicroMessenger/i) == "micromessenger") { //微信内置浏览器+应用宝链接
          window.location.href = 'http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
        } else {
          if (isiOS) {
            window.location.href =
              'https://linkm.ke.com/?schema=lianjiabeike%253A%252F%252Fershoufang%252Fhome%253FcityID%253D330100&redirect_url=https%253A%252F%252Fitunes.apple.com%252Fcn%252Fapp%252F%25E8%25B4%259D%25E5%25A3%25B3%25E6%2589%25BE%25E6%2588%25BF-%25E4%25BA%258C%25E6%2589%258B%25E6%2596%25B0%25E6%2588%25BF%25E7%25A7%259F%25E6%2588%25BF%25E6%2589%25BE%25E6%2588%25BF%25E5%25A4%25A7%25E5%25B9%25B3%25E5%258F%25B0%252Fid1347663353%253Fl%253Dzh%2526ls%253D1%2526mt%253D8&ssid=&uuid=&refer=&ucid=&current_url=&sign=57f19c45987015881d2c151d82c1adb2'
          } else if (isAndroid) {
            window.location.href = 'http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
          } else { //PC 端
            window.location.href = 'http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
          }
        }

      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

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
  .logo-wrapper {
    position: sticky;
    width: 100%;
    height: 13.867vw;
    box-sizing: border-box;
    padding: 2.667vw 6.4vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    top: 0;
    z-index: 101;
    box-shadow: 0 0.8vw 1.067vw rgba(0, 0, 0, .03);

    .logo {
      width: .68rem;
      height: .68rem;
    }

    .title {
      flex: 1;
      margin-left: 2.933vw;
      font-size: 4.267vw;
      color: #222;
      font-weight: 700;
    }

    .open-app {
      font-size: 3.733vw;
      color: #fff;
      border-radius: 1.333vw;
      height: 8.533vw;
      padding: 0 3.733vw;
      font-weight: 700;
      background: #3072f6;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }

  .home-page-content {
    padding: .24rem .48rem;
    background: #fff;
    .home-tab-list {
      display: flex;
      flex-wrap: wrap;

      .home-tab-item {
        margin-bottom:.2rem;
        margin-right:.32rem;
          &:nth-child(5n+5){
            margin-right:0;
          }
        .icon{
          display: block;
          width:1.04rem;
          height: .72rem;
          margin: 0 auto;
        }
        .tab-name{
          font-size: .26rem;
          text-align: center;
          font-weight:700;
          line-height: 1;
          margin-top:.2rem;
        }
      }
    }
  }
</style>