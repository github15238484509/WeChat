<template>
    <div class="friend-container">
        <div>
            {{ friendData }}
        </div>
    </div>
</template>
<script setup>
import { ref, watch, reactive } from "vue";
import { useRoute } from "vue-router"
import { getFriendInfo } from "@/api/friend.js"
import { myDecode } from "@/utils/index.js"
let Route = useRoute()
let id = ref("")
let friendData = reactive({
    data: {}
})
async function getFriend(id) {
    let result = await getFriendInfo(id)
    if (result.code === 0) {
        friendData.data = result.data
    }
}
watch(Route, () => {
    let newId = Route.params.id
    if(!newId)return
    id.value = myDecode(newId)
    getFriend(id.value)
}, {
    immediate: true
})
</script>
<style lang="less" scoped>
</style>
