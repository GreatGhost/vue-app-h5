<!--  -->
<template>
    <div class='input-number'>
        <div class="input-number-1">
            <span class="reduce" @click="reduce">-</span>
            <span class="number">{{currentValue}}</span>
            <span class="add" @click="add">+</span>
        </div>

    </div>
</template>

<script>
    //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
    //例如：import 《组件名称》 from '《组件路径》';

    export default {
        //import引入的组件需要注入到对象中才能使用
        components: {},
        props: {
            value: {
                type: Number,
                default: 0
            },
        },
        data() {
            //这里存放数据
            return {
                currentValue: this.value
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {
            value(val) {
                this.currentValue = this.value;
            }
        },
        //方法集合
        methods: {
            add() {
                this.currentValue += 1;
                this.$emit('add', this.currentValue);
                this.$emit('update:number', this.number += 1)
            },
            reduce() {
                this.currentValue -= 1;
                if (this.currentValue <= 0) {
                    this.currentValue = 0
                }
                this.$emit('reduce', this.currentValue);
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
</style>