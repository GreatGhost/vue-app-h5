import Vue from 'vue'
import App from './App.vue'
import './config/rem';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

// 按需引入mint-ui
Vue.use(MintUI)


new Vue({
  render: h => h(App),
}).$mount('#app')
