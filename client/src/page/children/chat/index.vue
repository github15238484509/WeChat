<template >
    <div class="chat-container">
        <PersonContainer></PersonContainer>
        <div class="rightContainer">
            {{Route.params.id}}
        </div>
    </div>
</template>

<script setup>
import PersonContainer from "@/components/person/index.vue"
import { useRouter, useRoute } from "vue-router";
import { myEncode } from "@/utils/index.js"
import { ref } from "vue"
let Router = useRouter()
let Route = useRoute()
let id = ref("")

try {
    console.log(878);
    id.value = myEncode(Route.params.id)
    console.log(id.value);
} catch (error) {
    Router.back()
}
</script>
<style scoped lang="less">
.chat-container {
    display: flex;
    width: 100%;
    height: 100%;

    .rightContainer {
        flex: 1;
    }
}
</style>