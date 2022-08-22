<template>
    <div ref="personContainer" @wheel.passive="move($event)" class="personContainer-container">
            <slot :data="rightData"  v-if="data.length !== 0"></slot>
        <loading v-else></loading>
        <span class="side" ref="dragDom" :hidden="isSideShow"></span>
    </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from "vue"
import { useResize, useDrag } from "@/hooks/resize.js"
import { throttle } from "@/utils/index.js"
import { getDomInfo } from "@/utils/index.js"
import loading from "@/common/loading/index.vue"
let propData = defineProps({
    height: {
        type: Number,
        default: 50
    },
    data: {
        type: Array,
        default: []
    }
})
let emit = defineEmits(['change'])


let totalHeight = computed(() => {
    return propData.data.length * propData.height
})
let isSideShow = computed(() => {
    return totalHeight.value > containerHeight.value ? false : true
})

let { Dom: dragDom, y, Height } = useDrag({
    maxX: 0,
    minY: 0,
})
let { Dom: personContainer, Height: containerHeight } = useResize()//返回一个dom的信息

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



let rightData = computed(() => {
    let rightY = y.value * (totalHeight.value - containerHeight.value) / (containerHeight.value - Height.value)
    let start = Math.ceil(rightY / propData.height)
    let num = Math.ceil((containerHeight.value) / propData.height)
    let end = num + start
    if (num >= propData.data.length) {
        start = 0
    }
    let result = propData.data.slice(start, end)
    return result
})


</script>
<style lang="less" scoped>
.personContainer-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
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
