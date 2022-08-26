<template>
    <div class="index-container">
        <div class="rightContainer">
            <NoneImage></NoneImage>
        </div>
    </div>
</template>
<script setup>
import LatelyPerson from "@/components/latelyPerson/index.vue"
import NoneImage from "@/common/none/indexImg.vue"



</script>
<style lang="less" scoped>
.index-container {
    display: flex;
    width: 100%;
    height: 100%;

    .rightContainer {
        flex: 1;
    }
 
}
</style>
