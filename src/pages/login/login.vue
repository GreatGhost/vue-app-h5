<!--  -->
<template>
    <div class="login">
        <div class="login-title">手机快捷登录</div>
        <div class="login-desc">未注册过的手机号将自动</div>
        <Form>
            <FormItem v-for="(item,index) in loginList" :key="index" :name="item.name">
                <InputItem :input="item" @input="loginInput">
                    <div slot="code" v-if="item.id==='mobile'" class="send-code" :class="[item.isValid?'enabled':'']">获取验证码</div>
                </InputItem>
            </FormItem>
        </Form>
        <div class="login-btn"></div>
    </div>
</template>

<script>
    //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
    //例如：import 《组件名称》 from '《组件路径》';
    import Form from '../../components/Form/Form'
    import FormItem from '../../components/FormItem/FormItem'
    import InputItem from '../../components/InputItem/InputItem'
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
                loginList:[
                    {name:'',id:'mobile',placeholder:'请输入手机号',value:'',type:'tel',isValid:false,max:11},
                    {name:'',id:'code',placeholder:'请输入验证码',value:'',type:'tel',max:4},
                ],
            };
        },
        //监听属性 类似于data概念
        computed: {

        },
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
            loginInput(e){
                let loginList=this.loginList;
                loginList.forEach(tmp=>{
                    if(tmp.id===e.id){
                        tmp.value=e.value;
                        if(this.$util.checkStr(tmp.value,'phone') && tmp.id==='mobile'){
                            tmp.isValid=true;
                        }else if(!this.$util.checkStr(tmp.value,'phone') && tmp.id==='mobile'){
                             tmp.isValid=false;
                        }
                    }
                })
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
    .login{
        padding:.5rem;
        background: #fff;
        .login-title{
            margin-bottom: .24rem;
            font-weight: 700;
            font-size: .56rem;
        }
        .login-desc{
            font-size: .32rem;
            line-height:.4rem;
            color: #999;
            margin-bottom: .36rem;
        }
    }
</style>