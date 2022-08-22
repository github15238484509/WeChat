<template>
    <div class="indexContainer">
        <PersonContainer v-slot="{ data }" :height="50" :data="HistoryPerson.data">
            <PersonItem v-for="item in data" :key="item.id" :data="item" @click="itemClick(item)"></PersonItem>
        </PersonContainer>
    </div>
</template>
<script setup>
import PersonContainer from "@/common/customScroll/index.vue"
import useHistoryPerson from "@/store/historyPerson.js";
import PersonItem from "./personItem.vue"
import { useRouter } from "vue-router"
import {myEncode} from "@/utils/index.js"
let HistoryPerson = useHistoryPerson()
let router = useRouter()
function itemClick(item) {
    console.log(item);
    router.push(`/chat/${myEncode(item.id)}`)
}
</script>
<style lang="less" scoped>
.indexContainer {
    width: 180px;
    height: 100%;
}
</style>
