<template >
    <div class="text-container" :class="{ me: data.isMe }">
        <img class="img" src="https://pinia.web3doc.top/logo.svg" alt="">
        <div class="message">
            <div class="name" v-if="!data.isMe">{{  data.name  }} 4545</div>
            <div class="text">
                <img v-if="!isError" @error="error" :src="data.content" alt="">
                <NoneImage v-else></NoneImage>
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
function error(){
    isError.value = true
}
</script>
<style scoped lang="less">
.text-container {
    display: flex;

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
            padding: 5px 15px;
            box-sizing: border-box;
            margin-left: 5px;
            position: relative;
            border-radius: 5px;
            word-break: break-all;
            cursor: pointer;
            img{
                max-width: 100px;
            }
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
                top: 7%;
                transform: translate(-50%, -50%) rotate(45deg);
                border-radius: 2px;
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
            top: 7%;
            transform: translate(-50%, -50%) rotate(45deg);
            border-radius: 2px;
        }
    }


}
</style>