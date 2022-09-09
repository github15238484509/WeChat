<template >
    <div class="chat-container">
        <LatelyPerson></LatelyPerson>
        <div class="rightContainer">
            <div class="content">
                <ChatMessageHeader @iconClick="iconClick" name="5+" :num="13" icon="sandian">
                </ChatMessageHeader>
                <div class="messageBox">
                    <ChatMessageContent :data="data"></ChatMessageContent>
                </div>
            </div>
            <div class="sendContent">
                <chatMessageFloor @send="send"></chatMessageFloor>
            </div>
        </div>
    </div>
</template>

<script setup>
import LatelyPerson from "@/components/latelyPerson/index.vue"
import ChatMessageHeader from "@/common/chatMessage/chatMessageHeader.vue"
import ChatMessageContent from "@/common/chatMessage/chatMessageContent.vue"
import chatMessageFloor from "@/common/chatMessage/chatMessageFloor.vue"

import { useRouter, useRoute, onBeforeRouteUpdate, } from "vue-router";
import { myDecode } from "@/utils/index.js"
import { singleChat } from "@/api/message.js"
import { onMounted, ref, watch, computed } from "vue"
import useHistoryLately from "@/store/historyLately.js";
let Router = useRouter()
let Route = useRoute()
let id = ref("")
let HistoryLately = useHistoryLately()
function getId() {
    try {
        let result = Number(myDecode(Route.params.id))
        if (Object.is(result, NaN)) {
            throw Error("走你")
        }
        id.value = result
    } catch (error) {
        Router.back()
    }
}
async function send(data) {
    let sendData = new FormData()
    data.friendId = id.value
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            sendData.append(key,data[key])
        }
    }
    console.log(data);
    let result = await singleChat(sendData)
}
//获取群聊的名字等信息
let chat = computed(() => {
    return HistoryLately.data.filter((item) => {
        return item.id === id.value
    })
})
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
    type: 'multiple'
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
function iconClick() {
    console.log(5555);
}
onMounted(getId)
onBeforeRouteUpdate(getId)

</script>
<style scoped lang="less">
.chat-container {
    display: flex;
    width: 100%;
    height: 100%;

    .rightContainer {
        flex: 1;
        box-sizing: border-box;
        padding: 20px;
        background-color: rgb(245, 245, 245);
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .content {
            flex: 1;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            .messageBox {
                flex: 1;
                overflow: hidden;
            }
        }

        .sendContent {
            height: 150px;
            overflow: hidden;
        }
    }
}
</style>