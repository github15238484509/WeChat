<template >
    <div class="person-item-container" :class="{
        active: acitve
    }">
        <div class="img">
            <MyImg :src="data.src"></MyImg>
        </div>
        <div class="item-info">
            <div class="name-time">
                <p class="title">{{ data.name }}</p>
                <span class="time">{{ data.time }}</span>
            </div>
            <div class="message">
                {{ data.message }}
            </div>
        </div>
    </div>
</template>

<script setup>
import MyImg from "@/common/none/indexImg.vue"
import { computed, ref, watch, onMounted } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"
import { myDecode } from "@/utils/index.js"
let propData = defineProps({
    data: {
        type: Object,
        default: {}
    },
})
let Route = useRoute()
let acitve = ref(false)
function setAcitve() {
    acitve.value = propData.data.id === Number(myDecode(Route.params.id))
}
watch(Route, setAcitve)
onMounted(setAcitve)


</script>
<style scoped lang="less">
.person-item-container {
    width: 100%;
    height: 50px;
    display: flex;
    background-color: rgba(333, 333, 333, 1);
    border-bottom: 2px solid rgba(222, 222, 222, 1);
    padding: 5px;
    box-sizing: border-box;
    cursor: pointer;

    &.active,
    &:hover {
        background-color: rgba(222, 222, 222, 1);
    }

    .img {
        height: 100%;
        width: 50px;
    }

    .item-info {
        height: 100%;
        flex: 1;
        margin-left: 5px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .name-time {
            display: flex;

            justify-content: space-between;

            .title {
                font-weight: 600;
                font-size: 0.9rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #555;
            }

            .time {
                font-size: 0.8rem;
                color: #777;
            }
        }

        .message {
            color: #777;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 0.7rem;
        }
    }
}
</style>