import Vue from 'vue'
import App from './App.vue'
import './config/rem';
import router from './router/index'
import store from './store/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import util from './util/util';
import {Toast,Lazyload } from 'mint-ui';
import * as filters from './util/filters'
import directive from './directive/index.js'
Vue.config.productionTip = false;

Object.keys(filters).forEach(key => {
 Vue.filter(key, filters[key])
})
Vue.use(directive)
Vue.prototype.$util=util;
// 按需引入mint-ui
Vue.use(MintUI)
Vue.use(Lazyload);
Vue.prototype.$toast=Toast;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')