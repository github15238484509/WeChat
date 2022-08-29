<template >
    <div class="chat-message-content-container">
        <MessageItem v-for="item in data" :data="item"></MessageItem>
    </div>
</template>

<script setup>
import LatelyPerson from "@/components/latelyPerson/index.vue"
import { useRouter, useRoute, onBeforeRouteUpdate, } from "vue-router";
import { myDecode } from "@/utils/index.js"
import { onMounted, ref, watch, computed } from "vue"
import MessageItem from "./messageType/index.vue"
// defineProps({
//     data: {
//         type: Array,
//         default: []
//     }
// })
// let Router = useRouter()
// let Route = useRoute()
// let id = ref("")
// let InfoData = useHistoryPerson()
let data = [{
    name: '小刘',
    content: '小刘小刘小刘',
    isMe: false,
    type: 'text'
},
{
    name: '小刘',
    content: 'https://pinia.web3doc.top/logo.svg',
    isMe: true,
    type: 'image'
}, {
    name: 'wadfa',
    content: '小刘小dfasfsa刘小刘',
    isMe: false,
    type: 'txt'
}, {
    name: '小刘',
    content: 'adfasfasdfasd',
    isMe: false,
    type: 'video'
}, {
    name: '小刘sadfa',
    content: '小刘小1231321刘小刘',
    isMe: true,
    type: 'audio'
}, {
    name: 'asdf小adf刘',
    content: 'asf',
    isMe: true,
    type:'multiple'
}, {
    name: '5456415616',
    content: '5465412323',
    isMe: true
},
{
    name: '5456415616545641561654564156165456415616545641561654564156165456415616545641561654564156165456415616545641561654564156165456415616545641561654564156165456415616545641561654564156165456415616545641561654564156165456415616545641561654564156165456415616',
    content: '54564156165456415616545641561654564156165456415616545641561654564156165456415616545641561654564156165456415616',
    isMe: true
},
]
</script>
<style scoped lang="less">
.chat-message-content-container {
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
}
</style>