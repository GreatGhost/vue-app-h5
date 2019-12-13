import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router);
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({

    mode:'hash',
      routes: [
        //默认路径下显示该路由
        {
          path: '/',
          component: resolve => require(['../pages/home/home.vue'], resolve),
          meta: {title: '首页'},
        },
        
        {
          path: '/login',
          component: resolve => require(['../pages/login/login.vue'], resolve),
          meta: {title: '登录'},
        },
        
      ]
    })