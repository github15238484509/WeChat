<template >
    <div class="chat-container">
        <!-- <PersonContainer></PersonContainer> -->
        <div class="rightContainer">
            <div class="content">
                <ChatMessageHeader @iconClick="iconClick" name="46" :num="13" icon="sandian">
                </ChatMessageHeader>
                <div class="messageBox">
                    1321
                    <img src="https://img.alicdn.com/imgextra/i4/O1CN01aG16y424E11XsURUd_!!6000000007358-2-tps-206-240.png" alt="">
                    15646
                </div>
            </div>
            <div class="sendContent">
                <chatMessageFloor></chatMessageFloor>
            </div>
        </div>
    </div>
</template>

<script setup>
import PersonContainer from "@/components/person/index.vue"
import ChatMessageHeader from "@/common/chatMessage/chatMessageHeader.vue"
import chatMessageFloor from "@/common/chatMessage/chatMessageFloor.vue"
import { useRouter, useRoute, onBeforeRouteUpdate, } from "vue-router";
import { myDecode } from "@/utils/index.js"
import { onMounted, ref, watch, computed } from "vue"
import useHistoryPerson from "@/store/historyPerson.js"
let Router = useRouter()
let Route = useRoute()
let id = ref("")
let InfoData = useHistoryPerson()
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
//获取
let chatData = computed(() => {
    return InfoData.data.filter((item) => {
        return item.id === id.value
    })
})
let chatMessageHistory = computed(() => {
    return InfoData.data.filter((item) => {
        console.log(item);
        return item.id === id.value
    })
})
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