<template >
    <div class="chat-container">
        <LatelyPerson></LatelyPerson>
        <div class="rightContainer">
            <div class="content">
                <ChatMessageHeader @iconClick="iconClick" :name="nameInfo" icon="sandian">
                </ChatMessageHeader>
                <div class="messageBox">
                    <ChatMessageContent :data="[]"></ChatMessageContent>
                </div>
            </div>
            <div class="sendContent">
                <chatMessageFloor></chatMessageFloor>
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
import { onMounted, ref, watch, computed } from "vue"
import useHistoryLately from "@/store/historyLately.js";
let Router = useRouter()
let Route = useRoute()
let HistoryLately = useHistoryLately()
let id = ref("")
let nameInfo = ref("")
function getId() {
    try {
        let result = Number(myDecode(Route.params.id))
        if (Object.is(result, NaN)) {
            throw Error("走你")
        }
        id.value = result
        let personInfo = HistoryLately.data.filter((item) => {
            return item.id === id.value
        })
        if (personInfo.length) {
            nameInfo.value = personInfo[0].name
        }
    } catch (error) {
        Router.back()
    }
}

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
        background-color: antiquewhite;
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