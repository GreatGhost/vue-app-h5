<template>
    <div class="alert">
        <div class="alert-main" v-for="item in notices" :key="item.name">
            <div class="alert-content">{{ item.content }}</div>
        </div>
    </div>
</template>
<script>
    let seed = 0;
    
    function getUuid() {
        return 'alert_' + (seed++);
    }

    export default {
        data () {
            return {
                notices: []
            }
        },
        methods: {
            add (notice) {
                const name = getUuid();
                let _notice = Object.assign({
                    name: name
                }, notice);

                this.notices.push(_notice);

                // 定时移除，单位：秒
                const duration = notice.duration;
                setTimeout(() => {
                    this.remove(name);
                }, duration * 1000);
            },
            remove (name) {
                const notices = this.notices;

                for (let i = 0; i < notices.length; i++) {
                    if (notices[i].name === name) {
                        this.notices.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>
<style>
    .alert{
        position: fixed;
        width: 100%;
        top: 0.32rem;
        left: 0;
        text-align: center;
        pointer-events: none;
    }
    .alert-content{
        display: inline-block;
        padding: 0.16rem 0.32rem;
        background: #fff;
        border-radius: 0.06rem;
        box-shadow: 0 0.02rem 0.12rem rgba(0, 0, 0, .2);
        margin-bottom: 0.16rem;
        font-size: .16rem;
    }
</style>