<template>
    <div class="indexContainer">
        <PersonContainer v-slot="{ data }" :height="50" :data="HistoryLately.data">
            <PersonItem v-for="item in data" :key="item.id" :data="item" @click="itemClick(item)"></PersonItem>
        </PersonContainer>
    </div>
</template>
<script setup>
import PersonContainer from "@/common/customScroll/index.vue"
import useHistoryLately from "@/store/historyLately.js";
import PersonItem from "./personItem.vue"
import { useRouter } from "vue-router"
import { myEncode } from "@/utils/index.js"
let HistoryLately = useHistoryLately()
let router = useRouter()
function itemClick(item) {
    if (item.type == 0) {
        router.push(`/chat/${myEncode(String(item.id))}`)
    } else {
        router.push(`/group/${myEncode(String(item.id))}`)
    }
}
</script>
<style lang="less" scoped>
.indexContainer {
    width: 180px;
    height: 100%;
}
</style>
