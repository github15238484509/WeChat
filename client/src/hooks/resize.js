import { onMounted, onUnmounted, ref, watch,onBeforeUnmount } from "vue"
import { debounce, throttle } from "@/utils/index.js"
import { getDomInfo } from "@/utils/index.js"

export function useResize(time = 300) {
    let newFn = null
    let Dom = ref(null)
    let Height = ref(0)
    let Width = ref(0)
    function resize() {
        let result = getDomInfo(Dom.value)
        Height.value = result.height
        Width.value = result.width
    }
    onMounted(() => {
        newFn = throttle(resize, time)
        resize()
        window.addEventListener("resize", newFn)
    })
    onBeforeUnmount(() => {
        window.removeEventListener("resize", newFn)
    })
    return {
        Dom,
        Height,
        Width,
    }
}
export function useDrag(option = {}) {
    let { minX = 0,
        maxX = document.body.clientWidth,
        minY = 0,
        maxY = document.body.clientHeight,
        time = 50 } = option
    let Height = ref(0)
    let Width = ref(0)
    let Dom = ref(null)
    let x = ref(0)
    let y = ref(0)

    let CurrentX = 0
    let CurrentY = 0
    let result = null
    function move(e) {
        let disY = e.clientY - CurrentY
        let disX = e.clientX - CurrentX
        y.value = disY
        x.value = disX
        if (y.value < minY) {
            y.value = minY
        }
        if (y.value >= maxY - result.height) {
            y.value = maxY - result.height
        }
        if (x.value < minX) {
            x.value = minX
        }
        if (x.value >= maxX - result.width) {
            x.value = maxX - result.width
        }
        if (maxX == minX) {
            x.value = minX
        }
        if (minY == maxY) {
            y.value = minY
        }
    }
    function up(e) {
        CurrentX = x.value
        CurrentY = y.value
        document.removeEventListener("mouseup", up)
        document.removeEventListener("mousemove", newMove)
    }
    let newMove = throttle(move, time)
    function down(e) {
        result = getDomInfo(Dom.value)
        CurrentX = e.clientX - x.value
        CurrentY = e.clientY - y.value
        document.addEventListener("mousemove", newMove)
        document.addEventListener("mouseup", up)
    }
    watch(x, () => {
        setDomPostion(x.value, y.value)
    })
    watch(y, () => {
        setDomPostion(x.value, y.value)
    })
    function setDomPostion(x, y) {
        Dom.value.style = `transform: translate(${x}px,${y}px);`
    }
    onMounted(() => {
        let result = Dom.value.getBoundingClientRect()
        Height.value = result.height
        Width.value = result.width
        Dom.value.addEventListener("mousedown", down)
        setDomPostion(x.value, y.value)
    })
    onBeforeUnmount(() => {
        Dom.value.removeEventListener("mousedown", down)
    })

    return {
        Dom,
        x,
        y,
        Height,
        Width
    }
}

