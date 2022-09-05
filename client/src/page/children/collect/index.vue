<template>
    <div class="index-container">
        <!-- <div class="rightContainer">
            <NoneImage></NoneImage>
        </div> -->
        collect
        <!-- <ShowLogout :startX="0" :startY="580">
            58665
        </ShowLogout> -->
    </div>
</template>
<script setup>
import ShowLogout from "@/components/logOut/index.vue"
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
