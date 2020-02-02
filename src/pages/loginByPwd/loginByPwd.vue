<template>
  <div class="login-by-pwd">
    <FormTitle title="账号密码登录"/>
    <Form>
      <FormItem v-for="(item,index) in loginList" :key="index" :name="item.name">
        <InputItem :input="item" @input="loginInput">
        </InputItem>
      </FormItem>
    </Form>
    <Button1 title="登录" :disabled="isLoginValid" @tap="login"/>
  </div>
</template>

<script>
  import Button1 from '../../components/Button1/Button1'
  import FormTitle from '../../components/FormTitle/FormTitle'
  import Form from '../../components/Form/Form'
  import FormItem from '../../components/FormItem/FormItem'
  import InputItem from '../../components/InputItem/InputItem'
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
        loginList: [{
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
            isLoginValid(){
                let mobile=this.$util.findInputItem(this.loginList,'mobile');
                let code=this.$util.findInputItem(this.loginList,'pwd');
                return this.$util.checkStr(mobile.value,'phone') &&code.value.length==6
            }
    },
    methods: {
            /* 登录表单变化 */
        loginInput(e) {
                let loginList = this.loginList;
                loginList.forEach(tmp => {
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

    login(){
      let that=this;
      this.$util.throttle(function(){
        if(!that.isLoginValid){
          that.$toast({
                message: "请输入有效手机号和密码",
                      position: "center",
                      duration: 1500
          })
          return;
          
        }

      },500,1000)()
    }

    },
    created() {},
    mounted() {}
  }
</script>
<style lang="less" scoped>
  .login-by-pwd {
    padding:.5rem;
  }
</style>