<template>
    <div class="index-container">
        <!-- <div class="rightContainer">
            <NoneImage></NoneImage>
        </div> -->
        <UserInfo @click="clickHandler" btnText="添加好友" name="46" profile="https://pinia.web3doc.top/logo.svg">
        </UserInfo>
        circle
    </div>
</template>
<script setup>
import LatelyPerson from "@/components/latelyPerson/index.vue"
import UserInfo from "@/common/userInfo/index.vue"
import showUserInfo from "@/utils/showUserInfo.js"
function clickHandler(data) {
    showUserInfo({
        btnText: "添加好友",
        name: "46",
        profile: "https://pinia.web3doc.top/logo.svg",
    })
}

</script>
<style lang="less" scoped>
.index-container {
    // display: flex;
    // width: 100%;
    // height: 100%;

    // .rightContainer {
    //     flex: 1;
    // }

}
</style>
