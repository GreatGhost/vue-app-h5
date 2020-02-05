<template>
  <div class="register">
    <FormTitle title="账号密码登录" />
    <Form>
      <FormItem v-for="(item,index) in registerList" :key="index" :name="item.name">
        <InputItem :input="item" @input="registerInput">
        </InputItem>
      </FormItem>
    </Form>
    <Button1 title="注册" :disabled="isRegisterValid" @tap="register" />
  </div>
</template>

<script>
  import Button1 from '../../components/Button1/Button1'
  import FormTitle from '../../components/FormTitle/FormTitle'
  import Form from '../../components/Form/Form'
  import FormItem from '../../components/FormItem/FormItem'
  import InputItem from '../../components/InputItem/InputItem'
  import localStorage from '../../util/localStorage'
  import {
    register
  } from '../../config/service'

  export default {
    components: {
      Form,
      FormItem,
      InputItem,
      FormTitle,
      Button1
    },
    props: {},
    data() {
      return {
        registerList: [{
            name: '',
            id: 'mobile',
            placeholder: '请输入手机号',
            value: '',
            type: 'tel',
            isValid: false,
            max: 11
          },
          {
            name: '',
            id: 'pwd',
            placeholder: '请输入密码',
            value: '',
            type: 'password',
            max: 6
          },

        ],
      }
    },
    watch: {},
    computed: {
      isRegisterValid() {
        let mobile = this.$util.findInputItem(this.registerList, 'mobile');
        let code = this.$util.findInputItem(this.registerList, 'pwd');
        return this.$util.checkStr(mobile.value, 'phone') && code.value.length == 6
      }
    },
    methods: {
      /* 登录表单变化 */
      registerInput(e) {
        let registerList = this.registerList;
        registerList.forEach(tmp => {
          if (tmp.id === e.id) {
            tmp.value = e.value;
            if (this.$util.checkStr(tmp.value, 'phone') && tmp.id === 'mobile') {
              tmp.isValid = true;
            } else if (!this.$util.checkStr(tmp.value, 'phone') && tmp.id === 'mobile') {
              tmp.isValid = false;
            }
          }
        })
      },
      /* 登录登陆按钮 */

      register() {
        let that = this;
        if (!that.isRegisterValid) {
          that.$toast({
            message: "请输入有效手机号和密码",
            position: "center",
            duration: 1500
          })
          return;
        }
        let registerList = that.registerList;

        let param = {
          mobile: registerList[0].value,
          password: registerList[1].value
        }

        register(param).then(res => {
          let userInfo={
            user_name:'fafaf'+registerList[0].value,
            pwd:registerList[1].value,
            mobile:registerList[0].value

          }
          that.$store.commit('setUserInfo', userInfo);
          that.$util.setStore(localStorage.loginUserInfo,userInfo);
          that.$toast({
            message: "注册成功",
            position: "center",
            duration: 1000
          })
          that.$router.replace({
            path: '/mine'
          });
        })
      },

    },
    created() {},
    mounted() {}
  }
</script>
<style lang="less" scoped>
  .register {
    padding: .5rem;
  }
</style>