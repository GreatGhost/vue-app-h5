<template>
    <div class="CityHeaderSearch">
        <img src="https://s1.ljcdn.com/mensa/static/m/images/common/close@2x.png?version=fkck1hud4m" alt="" class="back">
        <div class="input-wrapper">
            <img src="https://s1.ljcdn.com/mensa/static/m/images/common/searchbar@2x.png?version=fkck1hud4m" alt="" class="search-icon">
            <input type="text" class="value" :value="inputInfo.value" :placeholder="inputInfo.placeholder" />
            <img src="https://s1.ljcdn.com/mensa/static/m/images/common/delate.png?version=fkck1hud4m" alt="" class="clear-icon">
        </div>
        <div class="confirm">确认</div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {},
        data() {
            return {
                inputInfo: {
                    value: '',
                    placeholder: ''
                }
            }
        },
        watch: {},
        computed: {},
        methods: {},
        created() {},
        mounted() {}
    }
</script>
<style lang="less" scoped>
    .CityHeaderSearch {
        display: flex;
        align-items: center;
        padding: .24rem .6rem;
        height: .6rem;
        background: #fff;
        .back{
            width:.8rem;
            height: .8rem;
            margin-right: .64rem;
        }
        .input-wrapper{
            flex:1;
            height: .6rem;
            display: flex;
            align-items: center;
            border-radius: .6rem;
            background:rgb(51, 51, 51);

            .search-icon{
                width:.64rem;
                height:.64rem;
            }
            .clear-icon{
                width:.6rem;
                height:.6rem;

            }
            input{
                flex:1;
                height:1.2rem;
            }
        }
        .confirm{
            line-height: 1;
            font-size: .64rem;
            color:rgb(48, 114, 246);
        }
    }
</style>