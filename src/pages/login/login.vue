<!--  -->
<template>
    <div class="login">
        <div class="login-title">手机快捷登录</div>
        <div class="login-desc">未注册过的手机号将自动</div>
        <Form>
            <FormItem v-for="(item,index) in loginList" :key="index" :name="item.name">
                <InputItem :input="item" @input="loginInput">
                    <div slot="code" @click="sendCode" v-if="item.id==='mobile'" class="send-code"
                        :class="[item.isValid?'enabled':'']">{{btnTitle}}</div>
                </InputItem>
            </FormItem>
        </Form>
        <div class="login-btn" :class="[isLoginValid?'active':'']" @click="login">登录</div>
        <router-link :to="{path:'/loginByPwd'}" tag="div" class="login-by-pwd">账号密码登录</router-link>
    </div>
</template>

<script>
    //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
    //例如：import 《组件名称》 from '《组件路径》';
    import Form from '../../components/Form/Form'
    import FormItem from '../../components/FormItem/FormItem'
    import InputItem from '../../components/InputItem/InputItem'
    import localStorage from '../../util/localStorage'
    export default {
        //import引入的组件需要注入到对象中才能使用
        components: {
            Form,
            FormItem,
            InputItem
        },
        data() {
            //这里存放数据
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
                        id: 'code',
                        placeholder: '请输入验证码',
                        value: '',
                        type: 'tel',
                        max: 4
                    },
                ],
                btnTitle:'获取验证码'
            };
        },
        //监听属性 类似于data概念
        computed: {
            isLoginValid(){
                let mobile=this.$util.findInputItem(this.loginList,'mobile');
                let code=this.$util.findInputItem(this.loginList,'code');
                return this.$util.checkStr(mobile.value,'phone') &&code.value.length==4
            }
        },
        //监控data中的数据变化
        watch: {},
        //方法集合
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
            /*获取验证码 */
            sendCode() {
                let that=this;
                this.$util.throttle(function(){
                let value = that.$util.findInputItem(that.loginList, 'mobile').value;
                if (!that.$util.checkStr(value, 'phone')) {
                    that.$toast({
                        message: "请输入有效手机号",
                        position: "center",
                        duration: 1000
                    })
                    return;
                }else {
                     let time = 60;
                        let timer = setInterval(() => {
                        if(time == 0) {
                            clearInterval(timer);
                            that.disabled = false;
                            that.btnTitle = "获取验证码";
                        } else {
                            that.btnTitle =time + '秒后重试';
                            that.disabled = true;
                            time--
                        }
                        },1000)
                }
                },500,1000)();
                
            },

            // 登录按钮
            login(){
                let isLoginValid=this.isLoginValid;
                if(!isLoginValid){
                    this.$toast({
                        message: "请输入有效手机号和验证码",
                        position: "center",
                        duration: 1000
                    })
                    return;  
                }
                let data={
                    username:'王菲',
                    age:11,
                    account:18968780961
                }
                 this.$store.commit('SET_LOGIN_USER_INFO', data);
                 this.$util.setStore(localStorage.loginUserInfo,data);
                 this.$toast({
                      message: "登录成功",
                        position: "center",
                        duration: 1000
                 })
                 this.$router.replace({
                     path:'/mine'
                 })
            }

        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {

        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {},
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
    .login {
        padding: .5rem;
        background: #fff;

        .login-title {
            margin-bottom: .24rem;
            font-weight: 700;
            font-size: .56rem;
        }

        .login-desc {
            font-size: .32rem;
            line-height: .4rem;
            color: #999;
            margin-bottom: .36rem;
        }
        .login-btn{
            width:6.50rem;
            height:1rem;
            background:#f2f2f2;
            margin-top:.48rem;
            color: #fff;
            text-align: center;
            line-height: 1rem;
            font-size:.36rem;
            font-weight: 700;
            border-radius:.1rem;
            transition:all .2s ease-in;
            &.active{
                background:#3072f6;
            }
        }
        .login-by-pwd{
            font-size: .28rem;
            text-align: center;
            margin-top:.4rem;
        }
        .login-user-protocol{
            
        }
    }
</style>