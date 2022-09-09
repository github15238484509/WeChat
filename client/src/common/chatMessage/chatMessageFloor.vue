<template >
    <div class="chatMessageFloor-container">
        <div class="headIcon">
            <label :for="item.id" v-for="item in icons">
                <Icon :icon="item.icon"></Icon>
                <input @change="fileChange(item.icon,$event)" :accept="item.rule" :id="item.id" type="file">
            </label>
        </div>
        <textarea class="content" @keyup.enter.shift="send" v-model.trim="content">
        </textarea>
        <div class="send">
            <button @click="send">发送(S)</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import Icon from "@/common/icon/index.vue"

let emits = defineEmits(["send"])
let content = ref("")
function send() {
    if (content.value) {
        let data = {
            type: "text",
            content: content.value
        }
        emits("send", data)
        content.value = ""
    }
}
function fileChange(type, $event) {
    if ($event.target.files[0]) {
        emits("send", {
            type: type,
            content: $event.target.files[0]
        })
        $event.target.value = ''
    }
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
</script>
<style scoped lang="less">
.chatMessageFloor-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-top: 1px solid #e8e8e8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .headIcon,
    .send {
        height: 35px;
        line-height: 35px;
    }

    .headIcon {
        display: flex;

        label {
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
        vertical-align: bottom;
        resize: none;
        border: none;
        border-radius: 5px;
    }

    .send {
        text-align: right;
        position: absolute;
        bottom: 10px;
        right: 0;

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