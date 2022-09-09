<template >
    <div class="chat-message-content-container">
        <div class="loadMore">加载更多...</div>
        <MessageItem v-for="item in data" :data="item"></MessageItem>
    </div>
</template>

<script setup>
import LatelyPerson from "@/components/latelyPerson/index.vue"
import { useRouter, useRoute, onBeforeRouteUpdate, } from "vue-router";
import { myDecode } from "@/utils/index.js"
import { onMounted, ref, watch, computed } from "vue"
import MessageItem from "./messageType/index.vue"
defineProps({
    data: {
        type: Array,
        default: []
    }
})
// let Router = useRouter()
// let Route = useRoute()
// let id = ref("")
// let InfoData = useHistoryPerson()

</script>
<style scoped lang="less">
.chat-message-content-container {
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    scroll-behavior: smooth;
    .loadMore{
        text-align: center;
    }
}
</style>