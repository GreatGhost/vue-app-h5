<template>
    <div class="navList">
        <ul class="list">
            <li class="nav-list-item" :class="[item.isSelect?'active':'']" v-for="(item,index) in list" :key="index"
                @click="select(index)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            list: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {
            select(index) {
                this.$emit('select', index)
            }

        },
        created() {},
        mounted() {}
    }
</script>
<style lang="less" scoped>
    .list {
        display: flex;
        align-items: center;
        border-bottom:1px solid rgb(228, 230, 240);
        li {
            position: relative;
            flex: 1;
            height: .89rem;
            line-height: .89rem;
            font-size: .32rem;
            list-style-type: none;
            text-align: center;
            font-weight: 700;
            box-sizing: border-box;
            color: rgb(147, 153, 165);
        }

        li.active {
            color: #000;
        }

        li.active::after {
            content: '';
            display: block;
            position: absolute;
            bottom: .08rem;
            left: 50%;
            height: .06rem;
            width: .32rem;
            background: #3072F6;
            border: .06rem;
            transform: translateX(-50%);
            border-radius: .03rem;
        }
    }
</style>