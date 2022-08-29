<template >
    <div class="text-container" :class="{ me: data.isMe }">
        <img class="img" src="https://pinia.web3doc.top/logo.svg" alt="">
        <div class="message">
            <div class="name" v-if="!data.isMe">{{  data.name  }} 4545</div>
            <div class="text">
                <div class="txtContent">
                    <div class="title">
                        你的号聊天记录
                    </div>
                    <div class="messageItem">发生发射发生发射点：啊打发十分发生发射点：啊打发十分发生发射点：啊打发十分发生发射点：啊打发十分发生发射点：啊打发十分发生发射点：啊打发十分点：啊打发十分发生发射点：啊打发十分发生发射点：啊打发十分</div>
                    <div class="messageItem">发生发射点：啊打发十分</div>
                    <div class="messageItem">发生发射点：啊打发十分</div>
                    <div class="foller">
                        聊天记录
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import LatelyPerson from "@/components/latelyPerson/index.vue"
import { useRouter, useRoute, onBeforeRouteUpdate, } from "vue-router";
import { myDecode } from "@/utils/index.js"
import { onMounted, ref, watch, computed } from "vue"
import NoneImage from "@/common/none/indexImg.vue"
import Icon from "@/common/icon/index.vue"
// let Router = useRouter()
// let Route = useRoute()
// let isMe = ref(true)
// let InfoData = useHistoryPerson()

let defineData = defineProps({
    data: {
        type: Object,
        require: true
    }
})
let isError = ref(false)
function error() {
    isError.value = true
}
</script>
<style scoped lang="less">
.text-container {
    display: flex;
    align-items: center;

    .img {
        width: 40px;
        height: 40px;
        cursor: pointer;
    }

    .message {
        max-width: 60%;

        .name {
            color: #666;
            font-size: 0.8rem;
            margin-left: 5px;
        }

        .text {
            margin-top: 5px;
            background-color: white;
            padding: 5px;
            box-sizing: border-box;
            margin-left: 5px;
            position: relative;
            border-radius: 5px;
            word-break: break-all;
            cursor: pointer;


            &:hover {
                background-color: rgba(255, 255, 255, 0.8);

                &:after {
                    border: 5px solid rgba(255, 255, 255, 0.8);
                }
            }

            &:after {
                content: "";
                position: absolute;
                border: 5px solid white;
                left: 0;
                top: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
                border-radius: 2px;
            }

            .txtContent {
                max-width: 200px;
                padding: 5px;
                border: 1px solid #f2f2f2;
                .title {
                    font-weight: 600px;
                    font-size: 1.1rem;

                }

                .messageItem {
                    font-size: 0.9rem;
                    color: #aaa;
                    margin: 5px 0;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .foller {
                    border-top: 1px solid #f2f2f2;
                    font-size: 1rem;
                    color: #888;
                }
            }

        }
    }
}

.text-container.me {
    flex-direction: row-reverse;

    .text {
        background-color: rgba(149, 236, 105, 1);
        margin-right: 5px;

        &:hover {
            background-color: rgba(149, 236, 105, 0.8);

            &:after {
                border: 5px solid rgba(149, 236, 105, 0.8);
            }
        }

        &:after {
            content: "";
            position: absolute;
            border: 5px solid rgba(149, 236, 105, 1);
            left: 100%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            border-radius: 2px;
        }
    }
}
</style>