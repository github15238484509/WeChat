import { onMounted, onUnmounted, ref } from "vue"
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
    onUnmounted(() => {
        window.removeEventListener("resize", newFn)
    })
    return {
        Dom,
        Height,
        Width,
    }
}
export function useDrag(option = {
    minX: 0,
    maxX: 100000,
    minY: 0,
    maxY: 100000,
    time: 50
}) {
    let { minX, maxX, minY, maxY, time } = option
    let Dom = ref(null)
    let x = ref(0)
    let y = ref(0)

    let CurrentX = 0
    let CurrentY = 0

    let offsetX = 0
    let offsetY = 0
    let a = 0
    function move(e) {
        // let disX = e.pageX - CurrentX 
        let disY = e.clientY - CurrentY - y.value
        console.log(disY, "disy");
        // CurrentX = e.pageX
        // CurrentY = e.pageY
        // console.log(disX,disY);

        // x.value += disX
        y.value += disY
        setDomPostion(0, y.value)
    }
    function up() {
        document.removeEventListener("mouseup", up)
        document.removeEventListener("mousemove", newMove)
    }
    let newMove = throttle(move, time)
    function down(e) {
        let result = getDomInfo(Dom.value)
        console.log(e);
        CurrentX = e.clientX
        CurrentY = e.clientY
        // console.log(CurrentY,"CurrentYCurrentY");
        // offsetX = e.offsetX
        // offsetY = e.offsetY
        document.addEventListener("mousemove", newMove)
        document.addEventListener("mouseup", up)
    }
    function setDomPostion(x, y) {
        // console.log(x, y);
        Dom.value.style = `transform: translate(${x}px,${y}px);`
    }
    onMounted(() => {
        Dom.value.addEventListener("mousedown", down)
        setDomPostion(x.value, y.value)
    })
    onUnmounted(() => {
        Dom.removeEventListener("mousedown", down)
    })

    return {
        Dom
    }
}

