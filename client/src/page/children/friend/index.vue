<template>
    <div class="friend-container">
        <FriendList></FriendList>
        <div class="rightContainer">
            <FriendInfo v-if="id"></FriendInfo>
            <NoneImage v-else></NoneImage>
        </div>
    </div>
</template>
<script setup>
import NoneImage from "@/common/none/indexImg.vue"
import FriendList from "@/components/friendList/index.vue"
import FriendInfo from "./friendInfo.vue"
import { watch,ref } from "vue";
import { useRoute } from "vue-router"
let Route = useRoute()
let id = ref(false)
watch(Route, () => {
    if (Route.params.id) {
        id.value = true
    } else {
        id.value = false
    }
}, {
    immediate: true
})

</script>
<style lang="less" scoped>
.friend-container {
    width: 100%;
    height: 100%;
    display: flex;

    .rightContainer {
        flex: 1;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
}
</style>
