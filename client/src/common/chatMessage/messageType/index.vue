<template >
    <div class="message-type-container">
        <template v-if="data.type === 'text'">
            <TextMessage :data="data"></TextMessage>
        </template>
        <template v-else-if="data.type === 'image'">
            <ImageMessage :data="data"></ImageMessage>
        </template>
        <template v-else-if="data.type === 'txt'">
            <TxtMessage :data="data"></TxtMessage>
        </template>
        <template v-else-if="data.type === 'video'">
            <VideoMessage :data="data"></VideoMessage>
        </template>
        <template v-else-if="data.type === 'audio'">
            <AudioMessage :data="data"></AudioMessage>
        </template>
        <template v-else-if="data.type === 'multiple'">
            <MultipleMessage :data="data"></MultipleMessage>
        </template>
        <template v-else>
            <UnSupportMessage :data="data"></UnSupportMessage>
        </template>
    </div>
</template>

<script setup>
import LatelyPerson from "@/components/latelyPerson/index.vue"
import { useRouter, useRoute, onBeforeRouteUpdate, } from "vue-router";
import { myDecode } from "@/utils/index.js"
import { onMounted, ref, watch, computed } from "vue"
import TextMessage from "./textMessage.vue"
import ImageMessage from "./imageMessage.vue"
import TxtMessage from "./txtMessage.vue"
import VideoMessage from "./videoMessage.vue"
import AudioMessage from "./audioMessage.vue"
import UnSupportMessage from "./unSupportMessage.vue"
import MultipleMessage from "./multipleMessage.vue"

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