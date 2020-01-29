<template>
    <div class="header">
        <slot name="left"></slot>
        <span class="header_title">
            <span class="header_title_text ellipsis">{{ title }}</span>
        </span>
        <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        name: 'HeaderTop',
        props: {
            title: String
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .header {
        width:100%;
        height:.45rem;
        background:#fff;
        position: relative;
        .header_title_text {
            height:.45rem;
            line-height: .45rem;
            text-align: center;
            font-size:.2rem;
        }
        .arrow-back{
            width:.2rem;
            height:.2rem;
        }

    }
</style>