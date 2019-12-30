<!--  -->
<template>
    <div class='render'>
        <p>渲染的使用</p>
        <Child ></Child>
    </div>
</template>

<script>
    //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
    //例如：import 《组件名称》 from '《组件路径》';
    // 局部声明组件
    const Child = {
        render: (h) => {
            return h('p', {
                // 和`v-bind:class`一样的 API
                'class': {
                    foo: true,
                    bar: false
                },
                // 和`v-bind:style`一样的 API
                style: {
                    color: 'red',
                    fontSize: '14px'
                },
                // 正常的 HTML 特性
                attrs: {
                    id: 'foo'
                },
                // 组件 props
                props: {
                    myProp: 'bar'
                },
                // DOM 属性
                domProps: {
                    innerHTML: '这里是他的innerHTML'
                },
                // 事件监听器基于 `on`
                // 所以不再支持如 `v-on:keyup.enter` 修饰器
                // 需要手动匹配 keyCode。
                on: {
                    // click: this.clickHandler
                },
                // 仅对于组件，用于监听原生事件，而不是组件内部使用
                // `vm.$emit` 触发的事件。
                nativeOn: {
                    // click: this.nativeClickHandler
                },
                // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
                // 赋值，因为 Vue 已经自动为你进行了同步。
                // directives: [{
                //     name: 'my-custom-directive',
                //     value: '2',
                //     expression: '1 + 1',
                //     arg: 'foo',
                //     modifiers: {
                //         bar: true
                //     }
                // }],
                // Scoped slots in the form of
                // { name: props => VNode | Array<VNode> }
                scopedSlots: {
                    default: props => createElement('span', props.text)
                },
                // 如果组件是其他组件的子组件，需为插槽指定名称
                slot: 'name-of-slot',
                // 其他特殊顶层属性
                key: 'myKey',
                ref: 'myRef',
                
            });
        }
    }
    export default {
        //import引入的组件需要注入到对象中才能使用
        components: {
            Child
        },
        data() {
            //这里存放数据
            return {

            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {

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