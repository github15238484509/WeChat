
<template>
    <label class="myInput-container">
        <div class="container">
            <span class="text" v-if="text">{{ text }}</span>
            <div class="inputContainer">
                <div class="icon" v-if="icon">
                    <Icon :icon="icon" />
                </div>
                <input @keydown.enter="$emit('enter')" :value="modelValue" @input="$emit('Update:modelValue', $event.target.value.trim())"
                    :placeholder="placeholder" :name="name" :type="setType">
                <div class="icon" v-if="isShowPassword">
                    <Icon @click="changeType" icon="yanjing" />
                </div>
            </div>
        </div>
        <div class="error" v-if="error">
            <span>{{ error }}</span>
        </div>
    </label>
</template>
<script setup name="MyInput">
import Icon from "@/common/icon/index.vue"
import { ref, computed, } from "vue"
let propData = defineProps({
    text: {
        type: String,
        default: ''
    },
    error: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "text"
    },
    icon: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    modelValue: {}
})
defineEmits(["Update:modelValue","enter"])

let setType = ref(propData.type)
function changeType() {
    if (setType.value === "password") {
        setType.value = "text"
    } else {
        setType.value = "password"
    }
}
let isShowPassword = computed(() => {
    return propData.type === "password"
})
</script>
<style lang="less" scoped>
.myInput-container {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    margin: 10px 0;
    // display: block;
    display: flex;
    align-items: center;

    .container {
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        cursor: pointer;

        .text {
            margin-right: 5px;
        }

        .inputContainer {
            flex: 1;
            display: flex;
            align-items: center;
            height: 100%;
            border: 1px solid #979797;
            border-radius: 5px;

            .icon {
                height: 100%;
                display: flex;
                align-items: center;
                margin: 0 5px;
                cursor: pointer;
            }

            input {
                height: 100%;
                outline: none;
                flex: 1;
                box-sizing: border-box;
                letter-spacing: 2px;
                border: none;
                padding-left: 5px;
                color: inherit;
                font-size: inherit;
                width: 100%;
                background-color: inherit;
                &::placeholder {
                    font-size: 1rem;
                }
            }
        }
    }

    .error {
        height: 20px;
        width: 100%;
        box-sizing: border-box;
        color: #f40;
        margin: 5px 0;
        text-align: right;
    }
}
</style>
  