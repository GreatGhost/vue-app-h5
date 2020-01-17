import Vue from 'vue'
import App from './App.vue'
import './config/rem';
import router from './router/index'
import store from './store/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
// 按需引入mint-ui
Vue.use(MintUI)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')