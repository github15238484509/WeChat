<template>
    <div class="none-container">
        <span>
            <slot>暂无信息</slot>
        </span>
    </div>
</template>

<script setup>
</script>
<style scoped lang="less">
.none-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        display: inline-block;
        background-image: linear-gradient(to right, red, blue, yellow);
        color: transparent;
        -webkit-background-clip: text;
    }
}
</style>