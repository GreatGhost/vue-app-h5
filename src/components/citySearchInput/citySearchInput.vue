<template>
    <div class="citySearchInput">
        <div class="city-search-wrapper">
            <div class="current-city">
                <div class="city">{{city.value}}</div>
                <img src="https://s1.ljcdn.com/m-new/client/media/down-arrow.53810e2e.svg" alt="" class="arrow-down">
                <div class="search-input">
                    <img src="https://s1.ljcdn.com/m-new/client/media/search.afdc092b.svg" alt="" class="search-icon">
                    <div class="search-value">{{city.placeholder}}</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            city: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {},
        created() {},
        mounted() {}
    }
</script>
<style lang="less" scoped>
    .citySearchInput {
        margin: .24rem .48rem;

        .city-search-wrapper {
            padding: .32rem;
            box-sizing: border-box;
            border-radius: 1.867vw;
            box-shadow: 0 0.533vw 1.333vw rgba(0, 0, 0, .05);
            position: relative;
            border: 1px solid #ced1d6;

            .current-city {
                display: flex;
                align-items: center;
                flex-wrap: nowrap;
                .city{
                    font-size: .36rem;
                    line-height: 1;
                    font-weight: 700;
                }
                .arrow-down {
                    width: .12rem;
                    height: .12rem;
                    margin: 0 .24rem 0 .12rem;
                }

                .search-input {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    border-left: 1px solid #ced1d6;
                    padding-left: .24rem;

                    .search-icon {
                        width: .4rem;
                        height: .4rem;
                        margin-right: .08rem;
                    }

                    .search-value {
                        color: #9999b3;
                        font-weight: 700;   
                        font-size: .32rem;
                        line-height: 1;                     
                        &.active {
                            color: #000;
                        }
                    }
                }
            }

        }
    }
</style>