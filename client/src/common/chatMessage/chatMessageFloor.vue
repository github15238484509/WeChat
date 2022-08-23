<template >
    <div class="chatMessageFloor-container">
        <div class="headIcon">
            <!-- 4564 -->
        </div>
        <div class="content" @paste="paste" @drop="drop" contenteditable ref="content">
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
import { onMounted, ref, watch, computed, reactive } from "vue"
import useHistoryPerson from "@/store/historyPerson.js"
let Router = useRouter()
let Route = useRoute()
let content = ref(null)

function send() {
    console.log(444);
}


let dropPaste = reactive({
    content: null,
    type: null,//string file url
})
watch(dropPaste, () => {
    console.log(dropPaste);
})
function dropPsateDispose(data) {
    for (var i = 0, len = data.length; i < len; i++) {
        var item = data[i];
        if (item.kind === "string" && item.type === "text/plain") {
            item.getAsString(function (str) {
                dropPaste.content = str
                dropPaste.type = "string"
            })
        } else if (item.kind === "file") {
            var pasteFile = item.getAsFile();
            if (pasteFile.type) {
                dropPaste.content = pasteFile
                dropPaste.type = pasteFile.type
            }
        }
    }
}
function paste(e) {
    e.preventDefault()
    if (!(e.clipboardData && e.clipboardData.items)) {
        return;
    }
    let result = e.clipboardData.items
    dropPsateDispose(result)
}
function drop(e) {
    e.preventDefault()
    let result = e.dataTransfer.items
    dropPsateDispose(result)
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