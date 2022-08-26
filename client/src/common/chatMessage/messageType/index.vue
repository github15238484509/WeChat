<template >
    <div class="message-type-container">
        <TextMessage :data="data"></TextMessage>
    </div>
</template>

<script setup>
import LatelyPerson from "@/components/latelyPerson/index.vue"
import { useRouter, useRoute, onBeforeRouteUpdate, } from "vue-router";
import { myDecode } from "@/utils/index.js"
import { onMounted, ref, watch, computed } from "vue"
import TextMessage from "./text.vue"

let defineData = defineProps({
    data: {
        type: Object,
        require: true
    }
})


</script>
<style scoped lang="less">
.message-type-container {
    margin: 10px 0;
    box-sizing: border-box;
}
</style>