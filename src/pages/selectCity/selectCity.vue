<template>
    <div class="selectCity">
        <CityHeaderSearch />
        <navList :list="nav" />
    </div>
</template>

<script>
import CityHeaderSearch from '../../components/CityHeaderSearch/CityHeaderSearch'
import navList from '../../components/navList/navList'

    export default {
        components: {
            CityHeaderSearch: CityHeaderSearch,
            navList:navList
        },
        props: {},
        data() {
            return {
                nav: [
                    {
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
        methods: {},
        created() {},
        mounted() {}
    }
</script>
<style lang="less" scoped>
    .selectCity {}
</style>