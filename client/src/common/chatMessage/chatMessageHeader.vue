<template >
    <div class="chatMessageHeader-container">
        <div class="header">
            <div class="name">
                {{ name }}
                <span class="number" v-if="num">({{ num }})</span>
            </div>
            <div class="iconBox" @click="$emit('iconClick')">
                <Icon :icon="icon"></Icon>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup>
import Icon from "@/common/icon/index.vue"
import { useRouter, useRoute, onBeforeRouteUpdate, } from "vue-router";
import { myDecode } from "@/utils/index.js"
import { onMounted, ref, watch, computed } from "vue"


let propData = defineProps({
    name: {
        type: String,
        require: true
    },
    num: {
        type: Number,
    },
    icon: {
        type: String,
    }
})
defineEmits(["iconClick"])





let Router = useRouter()
let Route = useRoute()
let id = ref("")
// let InfoData = useHistoryPerson()
function getId() {
    try {
        let result = Number(myDecode(Route.params.id))
        if (Object.is(result, NaN)) {
            throw Error("走你")
        }
        id.value = result
    } catch (error) {
        Router.back()
    }
}
//获取
// let chatData = computed(() => {
//     return InfoData.data.filter((item) => {
//         return item.id === id.value
//     })
// })
onMounted(getId)
onBeforeRouteUpdate(getId)

</script>
<style scoped lang="less">
.chatMessageHeader-container {
    height: 40px;
    width: 100%;
    .header {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;

        .name {
            font-weight: 600;

            .number {
                margin-left: 10px;
                font-weight: normal;
            }
        }

        .iconBox {
            cursor: pointer;
        }
    }

}
</style>