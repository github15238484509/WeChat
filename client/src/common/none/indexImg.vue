<template>
    <div class="none-container">
        <img v-if="imgSrc" class="img" ref="imgDom" :src="imgSrc" alt="">
        <Loding v-else></Loding>
    </div>
</template>

<script setup>
import { ref } from "vue"
import none from "@/assets/none.webp"
import Loding from "@/common/loading/index.vue"
let defineData = defineProps({
    src: {
        type: String,
        require: true
    }
})
let imgDom = ref(null)
let imgSrc = ref("")

function Myload(e) {
    imgSrc.value = this.src
}
function Myerror() {
    imgSrc.value = none
}
let img = new Image()
img.onload = Myload
img.onerror = Myerror
img.src = defineData.src
</script>
<style scoped lang="less">
.none-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

}
</style>