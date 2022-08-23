<template >
    <div class="chatMessageFloor-container">
        <div class="headIcon">
            <!-- 4564 -->
        </div>
        <div class="content" @paste="paste" contenteditable ref="content">
            4564
        </div>
        <div class="send">
            <button @click="send">发送(S)</button>
        </div>
    </div>
</template>

<script setup>
import PersonContainer from "@/components/person/index.vue"
import { useRouter, useRoute, onBeforeRouteUpdate, } from "vue-router";
import { myDecode } from "@/utils/index.js"
import { onMounted, ref, watch, computed } from "vue"
import useHistoryPerson from "@/store/historyPerson.js"
let Router = useRouter()
let Route = useRoute()
let content = ref(null)

function send() {
    console.log(444);
}
function paste(e) {
    console.log(e);
    if (!(e.clipboardData && e.clipboardData.items)) {
        return;
    }
    for (var i = 0, len = e.clipboardData.items.length; i < len; i++) {
        var item = e.clipboardData.items[i];
        console.log(item);
        if (item.kind === "string" && item.type === "text/plain") {
            item.getAsString(function (str) {
                console.log("字符", str);
            })
        } else if (item.kind === "file") {
            var pasteFile = item.getAsFile();
            console.log("文件", pasteFile);
        }
    }
    // return false
}
</script>
<style scoped lang="less">
.chatMessageFloor-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-top: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .headIcon,
    .send {
        height: 35px;
        line-height: 35px;
    }

    .content {
        flex: 1;
        overflow: auto;
        box-sizing: border-box;
        padding: 5px 10px;
        font-size: 1.2rem;
        outline: none;
        letter-spacing: 2px;
        // display: flex;
        // flex-wrap: wrap;
        vertical-align: bottom;
    }

    .content :deep(img) {
        vertical-align: bottom;
        height: 50px;

    }

    .send {
        text-align: right;

        button {
            height: 35px;
            line-height: 35px;
            margin-right: 10px;
            box-sizing: border-box;
            border-radius: 5px;
            display: inline-block;
            padding: 0 10px;
            cursor: pointer;
            color: green;
            outline: none;
            border: none;
            background-color: rgba(222, 222, 222, 0.5);
            transition: all 0.5s;

            &:hover {
                background-color: rgba(222, 222, 222, 1);
            }
        }
    }
}
</style>