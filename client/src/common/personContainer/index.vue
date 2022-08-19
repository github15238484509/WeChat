<template>
    <div ref="personContainer" @wheel="move($event)" class="personContainer-container">
        <slot></slot>
        <span class="side" ref="dragDom" v-show="isSideShow" ></span>
        <!-- :style="sidePostion" -->
    </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from "vue"
import { useResize,useDrag } from "@/hooks/resize.js"
import { throttle } from "@/utils/index.js"
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

let { Dom: dragDom} = useDrag()





let sideTop = ref(0)
watch(sideTop, (newValue) => {
    if (isSideShow) {
        emit("change", newValue)
    }
})
let move = throttle(function (e) {
    return
    let result = e.wheelDeltaY > 0 ? -5 : 5
    sideTop.value += result
    if (sideTop.value < 0) {
        sideTop.value = 0
    }
    if (sideTop.value >= containerHeight.value) {
        sideTop.value = containerHeight.value
    }
}, 20)
let sidePostion = computed(() => {
    return `transform: translate(0,${sideTop.value}px);`
})


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
        width: 50px;
        height: 50px;
        // height: 50px;
        // width: 10px;
        // border-radius: 5px;
        background-color: aqua;
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        // opacity: 0;
        transition: opacity 0.8s cubic-bezier(0.36, 0.18, 1, 0.62);
    }

    &:hover .side {
        opacity: 0.8;
    }

}
</style>
