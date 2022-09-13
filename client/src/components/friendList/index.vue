<template>
    <div class="indexContainer">
        <PersonContainer v-slot="{ data }" :height="50" :data="friends.friend">
            <PersonItem v-for="item in data" :key="item.id" :data="item" @click="itemClick(item)"></PersonItem>
        </PersonContainer>
    </div>
</template>
<script setup>
import PersonContainer from "@/common/customScroll/index.vue"
import PersonItem from "../latelyPerson/personItem.vue"
import useFriend from "@/store/friend.js";
import { useRouter } from "vue-router"
import { myEncode } from "@/utils/index.js"
let friends = useFriend()
let router = useRouter()
function itemClick(item) {
    router.push({
        params: {
            id: myEncode(item.id)
        }
    })
}
</script>
<style lang="less" scoped>
.indexContainer {
    // width: 180px;
    height: 100%;
}
</style>
