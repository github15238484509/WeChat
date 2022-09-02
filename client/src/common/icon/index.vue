
<template>
    <div class="icon-container">
        <samp class="num" v-if="num"> {{  num  }}</samp>
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

    success: "icon-success",
    error: "icon-error",
    warn: "icon-warn",
    primary: "icon-exe-array-primary",

    sandian: "icon-shenglve",
    txt: "icon-24gl-fileText",
    video: 'icon-shipin',
    audio: 'icon-audio',
    Unsupport: 'icon-shibaibaocuo',
    image: 'icon-image',
    yanjing:"icon-xiaoyanjing"
}
defineProps({
    icon: {
        type: String,
        require: true
    },
    num: {
        type: Number,
        define: 0
    }
})
</script>
<style lang="less" scoped>
.icon-container {
    position: relative;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

    .iconfont {
        font-size: inherit;
    }
}
</style>
