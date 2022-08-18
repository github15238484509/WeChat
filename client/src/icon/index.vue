
<template>
    <div class="icon-container">
        <samp class="num" v-if="num"> {{ num }}</samp>
        <span class="iconfont" :class="icons[icon]"></span>
    </div>
</template>

<script setup>
// 所有的icon列表
let icons = {
    haoyou: "icon-haoyou",
    pengyouquan: "icon-pengyouquan",
    shoucang: "icon-shoucang",
    ren3: "icon-ren3",
    file: "icon-wenjianjia",
    message: "icon-xiaoxi1",
    xiaochengxu: "icon-xiaochengxu",
}
defineProps({
    icon: String,
    num: {
        type: Number,
        define: 0
    }
})
</script>
<style lang="less" scoped>
.icon-container {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    margin: 10px 0;

    .num {
        width: 1.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        background-color: #F40;
        border-radius: 50%;
        position: absolute;
        right: 0;
        transform: translateX(-25%);
        top: 0;
    }
}
</style>
