<template>
    <div class="search-container">
        <PersonContainer v-slot="{ data }" :height="50" :data="propsData.data">
            <PersonItem v-for="item in data" :key="item.id" :data="item" @click="itemClick(item,$event)"></PersonItem>
        </PersonContainer>
    </div>
</template>
<script setup>
import PersonContainer from "@/common/customScroll/index.vue"
import PersonItem from "../latelyPerson/personItem.vue"
import useFriend from "@/store/friend.js";
import { useRouter } from "vue-router"
import showUserInfo from "@/utils/showUserInfo.js"
import { addFriend } from "@/api/friend.js"
import showMessage from "@/utils/showMessage.js"
let propsData = defineProps({
    data: {
        type: Array,
        required: true
    }
})
let friends = useFriend()
let router = useRouter()
function itemClick(item, event) {
    console.log(event);
    console.log(event.clientX,
        event.clientY,);
    let dom = showUserInfo({
        left: event.clientX,
        top: event.clientY,
        btnText: "添加好友",
        name: item.name,
        profile: "https://pinia.web3doc.top/logo.svg",
        onClick: async function (dom, data) {
            let id = item.id
            let result = await addFriend(id)
            if (result.code == 0) {
                showMessage({
                    type: 'success',
                    text: result.message,
                    duration: 1500
                })
            }
            dom.remove()
        }
    })
}
</script>
<style lang="less" scoped>
.search-container {
    // width: 180px;
    height: 100%;
}
</style>
