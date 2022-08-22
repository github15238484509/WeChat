<template>
    <div class="index-container">
        <PersonContainer></PersonContainer>
        <div class="rightContainer">
            <NoneImage></NoneImage>
        </div>
    </div>
</template>
<script setup>
import PersonContainer from "@/components/person/index.vue"
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
