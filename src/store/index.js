import Vue from 'vue'
import Vuex from 'vuex'
import localStorage from '../util/localStorage'
import util from '../util/util'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        userInfo:JSON.parse(util.getStore(localStorage.loginUserInfo))||null,
        otherInfo:null
    },
    getters:{
        getUserInfo(state) {
            //获取用户信息
            return state.userInfo;
          },
          getOtherInfo(state) {
            //获取其他信息
            return state.otherInfo;
          },
    },
    actions:{

    },
    mutations:{
        setUserInfo(state,data){
            state.userInfo=data
        },
        clearUserInfo(state){
            state.userInfo=null
        }

    }
})