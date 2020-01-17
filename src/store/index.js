import Vue from 'vue';
import Vuex from 'vuex';
import m from './m/index';
import authority from './authority/index';


// 判断环境
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        m:m,
        authority:authority
    },
    strict: debug,
})




