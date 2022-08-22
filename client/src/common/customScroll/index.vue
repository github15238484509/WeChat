<template>
    <div ref="personContainer" @wheel.passive="move($event)" class="personContainer-container">
        <div class="personContainerList" :style="{
            height:height+'px'
        }">
            <slot></slot>
        </div>
        <span class="side" ref="dragDom" v-show="isSideShow"></span>
    </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from "vue"
import { useResize, useDrag } from "@/hooks/resize.js"
import { throttle } from "@/utils/index.js"
import { getDomInfo } from "@/utils/index.js"
let propData = defineProps({
    height: {
        type: Number,
        default: 1000
    }
})
let emit = defineEmits(['change'])


let { Dom: personContainer, Height: containerHeight } = useResize()//返回一个dom的信息
let isSideShow = computed(() => {
    return propData.height > containerHeight.value
})

let { Dom: dragDom, y, Height } = useDrag({
    maxX: 0,
    minY: 0,
})

watch(y, (newValue) => {
    if (isSideShow) {
        emit("change", newValue)
    }
})
let move = throttle(function (e) {
    let result = e.wheelDeltaY > 0 ? -15 : 15
    y.value += result
    if (y.value < 0) {
        y.value = 0
    }
    if (y.value >= containerHeight.value - Height.value) {
        y.value = containerHeight.value - Height.value
    }
}, 10)


</script>
<style lang="less" scoped>
.personContainer-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: red;
    position: relative;
    user-select: none;

    .side {
        height: 50px;
        width: 10px;
        border-radius: 5px;
        background-color: aqua;
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.8s cubic-bezier(0.36, 0.18, 1, 0.62);
    }

    &:hover .side {
        opacity: 0.8;
    }

}
</style>
