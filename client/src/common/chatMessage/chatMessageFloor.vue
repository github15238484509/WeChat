<template >
    <div class="chatMessageFloor-container">
        <div class="headIcon">
            <label :for="item.id" v-for="item in icons">
                <Icon :icon="item.icon"></Icon>
                <input :accept="item.rule" :id="item.id" type="file">
            </label>
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
import LatelyPerson from "@/components/latelyPerson/index.vue"
import { useRouter, useRoute, onBeforeRouteUpdate, } from "vue-router";
import { isParentnode } from "../../utils/index.js"
import { onMounted, ref, watch, computed, reactive, onBeforeUnmount } from "vue"
import Icon from "@/common/icon/index.vue"
let Router = useRouter()
let Route = useRoute()
let content = ref(null)

function send() {
    console.log(444);
}
let icons = [{
    id: 'image',
    icon: 'image',
    rule: 'image/*'
}, {
    id: 'txt',
    icon: 'txt',
    rule: 'text/*'
}, {
    id: 'video',
    icon: 'video',
    rule: 'video/*'
}, {
    id: 'audio',
    icon: 'audio',
    rule: 'audio/*'
},]

let dropPaste = reactive({
    content: null,
    type: null,//string file url
})
function setTextFile() {
    if (dropPaste.type === "string") {
        if (content.value.childNodes.length === 0) {
            insertDomInfo.insert.appendData(dropPaste.content)
            content.value.appendChild(insertDomInfo.insert)
        } else {
            insertDomInfo.insert.insertData(insertDomInfo.index, dropPaste.content)
        }
    }
}
function dropPsateDispose(data) {
    for (var i = 0, len = data.length; i < len; i++) {
        var item = data[i];
        if (item.kind === "string" && item.type === "text/plain") {
            item.getAsString(function (str) {
                dropPaste.content = str
                dropPaste.type = "string"
                setTextFile()
            })
        } else if (item.kind === "file") {
            var pasteFile = item.getAsFile();
            if (pasteFile.type) {
                dropPaste.content = pasteFile
                dropPaste.type = pasteFile.type
                setTextFile()
            }
        }
    }
}
function paste(e) {
    console.log(e);
    return
    e.preventDefault()
    if (!(e.clipboardData && e.clipboardData.items)) {
        return;
    }
    let result = e.clipboardData.items
    dropPsateDispose(result)
}
function drop(e) {
    return
    e.preventDefault()
    let result = e.dataTransfer.items
    dropPsateDispose(result)
}

let insertDomInfo = reactive({
    insert: null,
    left: null,
    right: null
})
function selectionchange() {
    let selection = document.getSelection();
    let { anchorNode, anchorOffset, } = selection;
    if (isParentnode(anchorNode, content.value)) {
        let start = anchorNode.substringData(0, anchorOffset)
        let end = anchorNode.substringData(anchorOffset, anchorNode.length)
        start = document.createTextNode(start)
        end = document.createTextNode(end)
        insertDomInfo.insert = anchorNode
        insertDomInfo.index = anchorOffset
    }
}
onMounted(() => {
    document.addEventListener("selectionchange", selectionchange)
})
onBeforeUnmount(() => {
    document.removeEventListener("selectionchange", selectionchange)
})

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

    .headIcon {
        display: flex;
        label{
            margin-right: 10px;
            cursor: pointer;
            font-size: 1.2rem;
        }
        input {
            display: none;
        }
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