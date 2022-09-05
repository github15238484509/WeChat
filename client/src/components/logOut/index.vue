
<template>
    <div class="show-logout-container" @click="close">
        <div class="container" ref="refDom" :style="getStyle" @click.stop="">
            <div class="close" @click.stop="close">
                <Icon icon="close"></Icon>
            </div>
            <slot>5</slot>
        </div>
    </div>
</template>
  <script setup name="ShowLogout">
import { ref, onMounted, computed } from "vue"
import Icon from "@/common/icon/index.vue"

let propsData = defineProps({
    startX: {
        type: Number,
        default: 0
    },
    startY: {
        type: Number,
        default: 0
    },
})
let isShow = ref(false)
let isShow1 = ref(false)
let refDom = ref(null)

let widthDom = ref(0)
let heightDom = ref(0)
let getStyle = computed(() => {
    if (!isShow.value) {
        return {}
    }
    if (isShow.value && isShow1.value == false) {
        return {
            left: `${propsData.startX}px`,
            top: `${propsData.startY}px`,
            height: 0,
            width: 0,
        }
    }
    if (isShow1.value) {
        return {
            left: `50%`,
            top: `50%`,
            height: `${heightDom.value}px`,
            width: `${widthDom.value}px`,
            transition: `all 0.5s`,
        }
    }
})
onMounted(() => {
    let { width, height } = refDom.value.getBoundingClientRect()
    widthDom.value = width
    heightDom.value = height
    requestAnimationFrame(() => {
        isShow.value = true
        requestAnimationFrame(() => {
            isShow1.value = true
        })
    })
})
function close() {

}
</script>
  <style lang="less" scoped>
  .show-logout-container {
      position: fixed;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
  
      .container {
          border: 1px solid #c5c5c5;
          box-sizing: border-box;
          position: absolute;
          padding: 2rem 1rem;
          border-radius: 10px;
          overflow: hidden;
          transform-origin: center;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
  
          .close {
              width: 2rem;
              height: 2rem;
              position: absolute;
              right: 0;
              top: 0;
              font-size: 1.5rem;
              cursor: pointer;
              transition: all 0.5s;
              color: #c9c7c7;
  
              &:hover {
                  color: inherit;
              }
          }
      }
  }
  </style>
  