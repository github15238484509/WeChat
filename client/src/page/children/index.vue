<template>
    <div class="index-container">
        <div class="indexContainer">
            <PersonContainer @change="cahnge">
                <PersonInfo></PersonInfo>
            </PersonContainer>
        </div>
        <!-- <div class="rightContainer">
            54456
        </div> -->
    </div>
</template>
<script setup>
import PersonContainer from "@/common/personContainer/index.vue"
import PersonInfo from "@/components/person/index.vue"

function cahnge(value) {
    console.log(value);
}
</script>
<style lang="less" scoped>
.index-container {
    display: flex;
    width: 100%;
    height: 100%;

    .rightContainer {
        flex: 1;
    }

    .indexContainer {
        width: 180px;
    }
}
</style>
