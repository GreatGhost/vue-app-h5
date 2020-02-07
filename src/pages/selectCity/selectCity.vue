<template>
    <div class="selectCity">
        <div class="search-wrapper">
            <img src="https://s1.ljcdn.com/mensa/static/m/images/common/close@2x.png?version=fkck1hud4" alt=""
                class="clear">
            <div class="search">
                请输入城市名称
            </div>
        </div>
        <navList :list="nav" @select="tapNav" />
    </div>
</template>

<script>
    import CityHeaderSearch from '../../components/CityHeaderSearch/CityHeaderSearch'
    import navList from '../../components/navList/navList'

    export default {
        components: {
            CityHeaderSearch: CityHeaderSearch,
            navList: navList
        },
        props: {},
        data() {
            return {
                nav: [{
                        name: '国内城市',
                        isSelect: true
                    },
                    {
                        name: '海外城市',
                        isSelect: false
                    },
                ]
            }
        },
        watch: {},
        computed: {},
        methods: {
            tapNav(idx) {

                let nav = this.nav;
                nav.forEach((tmp, index) => {
                    if (idx === index) {
                        tmp.isSelect = true;
                    } else {
                        tmp.isSelect = false;
                    }
                })
            },

            getCurrentCity() {
                if (navigator.geolocation) {
                    var n = navigator.geolocation.getCurrentPosition(function (res) {
                        console.log(res); // 需要的坐标地址就在res中
                    });
                } else {
                    alert('该浏览器不支持定位');
                }
            }
        },
        created() {},
        mounted() {
            this.getCurrentCity();
        }
    }
</script>
<style lang="less" scoped>
    .selectCity {
        .search-wrapper {
            padding: .12rem .3rem;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                width: .48rem;
                height: .48rem;
                margin-right: .4rem;
            }

            .search {
                font-size: .24rem;
                height: .74rem;
                flex: 1;
                border-radius: .37rem;
                background: rgb(248, 248, 249);
                line-height: .74rem;
                padding: 0 .12rem 0 .64rem;
            }
        }
    }
</style>