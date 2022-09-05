<template>
    <div :style="style" class="message-container" :class="type">
        <Icon :icon="type"></Icon>
        <div class="text">{{ text }}</div>
    </div>
</template>

<script setup>
import Icon from "@/common/icon/index.vue"
import { computed } from "vue"
let props = defineProps({
    type: {
        type: String,
        required: true,
        validator(value) {
            let result = ['success', 'warn', 'error', 'primary'].includes(value)
            if (!result) {
                console.log("type只能为", ['success', 'warn', 'error', 'primary']);
            }
            return result
        }
    },
    text: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        default: 1500
    }
})
let style = `transition: all ${props.duration}ms;`
</script>
<style scoped lang="less">
.message-container {
    position: fixed;
    left: 50%;
    top: 20%;
    transform: translate(-50%, 0);
    opacity: 1;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    color: white;

    &.success {
        background-color: green;
    }

    &.error {
        background-color: #f40;
    }

    &.warn {
        background-color: rgb(231, 231, 150);
    }

    &.primary {
        background-color: rgb(75, 34, 240);
    }

    &.active {
        transform: translate(-50%, -200%);
        opacity: 0;
    }

    .text {
        margin: 0 10px;
        white-space: nowrap;
    }
}
</style>